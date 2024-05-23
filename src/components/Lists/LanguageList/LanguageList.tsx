import { FC } from 'react';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { LanguageType } from '../../../../@types';
import LanguageListItem from './LanguageListItem';
import useDragAndDrop from '../../../hooks/useDragAndDrop';

type LanguageListProps = {
  list: LanguageType[];
};

const LanguageList: FC<LanguageListProps> = ({ list }) => {
  const { sensors, handleDragEnd } = useDragAndDrop('languages');

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={list} strategy={verticalListSortingStrategy}>
        {list.map((item) => (
          <LanguageListItem key={item.id} item={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default LanguageList;
