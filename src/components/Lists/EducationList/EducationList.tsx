import { FC } from 'react';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { DndContext, closestCenter } from '@dnd-kit/core';
import useDragAndDrop from '../../../hooks/useDragAndDrop';
import EducationListItem from './EducationListItem';
import { EducationType } from '../../../../@types';

type EducationListProps = {
  list: EducationType[];
};

const EducationList: FC<EducationListProps> = ({ list }) => {
  const { sensors, handleDragEnd } = useDragAndDrop('educations');

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={list} strategy={verticalListSortingStrategy}>
        {list.map((item) => (
          <EducationListItem key={item.id} item={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default EducationList;
