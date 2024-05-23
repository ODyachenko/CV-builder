import { FC } from 'react';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SocialLinkType } from '../../../../@types';
import SocialListItem from './SocialListItem';
import useDragAndDrop from '../../../hooks/useDragAndDrop';

type EmploymentListProps = {
  list: SocialLinkType[];
};

const SocialList: FC<EmploymentListProps> = ({ list }) => {
  const { sensors, handleDragEnd } = useDragAndDrop('links');

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={list} strategy={verticalListSortingStrategy}>
        {list.map((item) => (
          <SocialListItem key={item.id} item={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default SocialList;
