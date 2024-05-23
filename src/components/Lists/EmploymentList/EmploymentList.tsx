import { FC } from 'react';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { DndContext, closestCenter } from '@dnd-kit/core';
import useDragAndDrop from '../../../hooks/useDragAndDrop';
import EmploymentListItem from './EmploymentListItem';
import { EmploymentType } from '../../../../@types';

type EmploymentListProps = {
  list: EmploymentType[];
};

const EmploymentList: FC<EmploymentListProps> = ({ list }) => {
  const { sensors, handleDragEnd } = useDragAndDrop('employments');

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={list} strategy={verticalListSortingStrategy}>
        {list.map((item) => (
          <EmploymentListItem key={item.id} item={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default EmploymentList;
