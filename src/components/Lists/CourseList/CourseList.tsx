import { FC } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CourseType } from '../../../../@types';
import useDragAndDrop from '../../../hooks/useDragAndDrop';
import CourseListItem from './CourseListItem';

type CourseListProps = {
  list: CourseType[];
};

const CourseList: FC<CourseListProps> = ({ list }) => {
  const { sensors, handleDragEnd } = useDragAndDrop('courses');

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={list} strategy={verticalListSortingStrategy}>
        {list.map((item) => (
          <CourseListItem key={item.id} item={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default CourseList;
