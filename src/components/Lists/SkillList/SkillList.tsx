import { FC } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SkillListItem from './SkillListItem';
import { SkillType } from '../../../../@types';
import useDragAndDrop from '../../../hooks/useDragAndDrop';

type SkillListProps = {
  list: SkillType[];
};

const SkillList: FC<SkillListProps> = ({ list }) => {
  const { sensors, handleDragEnd } = useDragAndDrop('skills');

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={list} strategy={verticalListSortingStrategy}>
        {list.map((item) => (
          <SkillListItem key={item.id} item={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default SkillList;
