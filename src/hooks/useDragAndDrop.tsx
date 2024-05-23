import { useCallback } from 'react';
import {
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { DragEndEvent } from '@dnd-kit/core';
import { useAppDispatch } from './hooks';
import { setDndIndexes } from '../redux/slices/CVSlice';

const useDragAndDrop = (arrayName: string) => {
  const dispatch = useAppDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (active && over) {
        const activeId = active.id;
        const overId = over.id;

        if (activeId !== overId) {
          dispatch(setDndIndexes({ activeId, overId, arrayName }));
        }
      }
    },
    [dispatch, arrayName]
  );

  return { sensors, handleDragEnd };
};

export default useDragAndDrop;
