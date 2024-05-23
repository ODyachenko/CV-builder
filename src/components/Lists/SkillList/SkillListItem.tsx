import { FC, useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IoChevronDown } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { RiDraggable } from 'react-icons/ri';
import SkillForm from '../../Forms/SkillForm';
import { SkillType } from '../../../../@types';
import { skillLevels } from '../../../data/skillLevels';
import useDelete from '../../../hooks/useDelete';

type SkillListItemProps = {
  item: SkillType;
};

const SkillListItem: FC<SkillListItemProps> = ({ item }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  const onClickDelete = useDelete();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border border-solid border-primary-gray rounded-md mb-4"
    >
      <div className="relative">
        <button
          {...attributes}
          {...listeners}
          className="absolute -left-6 top-0 bottom-0 m-auto cursor-grabbing"
        >
          <RiDraggable size={20} />
        </button>
        <div
          onClick={() => setIsEdit(!isEdit)}
          className="cursor-pointer transition-all hover:text-primary-blue py-4 px-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold mb-1">
                {item.skill ? item.skill : 'Not specified'}
              </h3>
              <span className="font-light text-priamry-gray">
                {skillLevels[item.level].label}
              </span>
            </div>
            <IoChevronDown size={20} />
          </div>
        </div>
        <button
          onClick={() => onClickDelete(item.id, 'skills')}
          className="absolute -right-6 top-0 bottom-0 m-auto"
        >
          <MdDeleteOutline
            size={20}
            className="transition-all hover:fill-primary-blue"
          />
        </button>
      </div>
      {isEdit && <SkillForm {...item} />}
    </div>
  );
};

export default SkillListItem;
