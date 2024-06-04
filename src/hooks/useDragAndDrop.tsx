import { useCallback, useEffect, useState } from 'react';
import {
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { DragEndEvent } from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from './hooks';
import { setDndIndexes } from '../redux/slices/CVSlice';
import { useUpdateCVMutation } from '../redux/API/CVAPI';

const useDragAndDrop = (arrayName: string) => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const [update, setUpdate] = useState(false);
  const [updateCV] = useUpdateCVMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (update) {
      updateCV(CV);
      setUpdate(false);
    }
  }, [CV, updateCV, update]);

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
          setUpdate(true);
        }
      }
    },
    [dispatch, arrayName]
  );

  return { sensors, handleDragEnd };
};

export default useDragAndDrop;
