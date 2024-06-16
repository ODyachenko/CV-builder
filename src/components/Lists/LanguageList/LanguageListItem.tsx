import { FC, useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { LanguageType } from '../../../../@types';
import { IoChevronDown } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { RiDraggable } from 'react-icons/ri';
import LanguagesForm from '../../Forms/LanguagesForm';
import { languageLevels } from '../../../data/languageLevels';
import useDelete from '../../../hooks/useDelete';

type LanguageListItemProps = {
  item: LanguageType;
};

const LanguageListItem: FC<LanguageListItemProps> = ({ item }) => {
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
      className="max-w-list-width bg-white border border-solid border-primary-gray rounded-md mb-4 mx-auto md:max-w-full"
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
                {item.language ? item.language : 'Not specified'}
              </h3>
              <span className="font-light text-priamry-gray">
                {languageLevels[item.level].label}
              </span>
            </div>
            <IoChevronDown size={20} />
          </div>
        </div>
        <button
          onClick={() => onClickDelete(item.id, 'languages')}
          className="absolute -right-6 top-0 bottom-0 m-auto"
        >
          <MdDeleteOutline
            size={20}
            className="transition-all hover:fill-primary-blue"
          />
        </button>
      </div>
      {isEdit && <LanguagesForm {...item} />}
    </div>
  );
};

export default LanguageListItem;
