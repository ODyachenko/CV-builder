import { FC, useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IoChevronDown } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { RiDraggable } from 'react-icons/ri';
import { SocialLinkType } from '../../../../@types';
import SocialLinksForm from '../../Forms/SocialLinksForm';
import useDelete from '../../../hooks/useDelete';

type SocialListItemProps = {
  item: SocialLinkType;
};

const SocialListItem: FC<SocialListItemProps> = ({ item }) => {
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
            <div className="w-full">
              <h3 className="font-bold mb-1">
                {item.label ? item.label : 'Not specified'}
              </h3>
              <span className="block font-light text-priamry-gray overflow-hidden text-ellipsis">
                {item.link}
              </span>
            </div>
            <IoChevronDown size={20} />
          </div>
        </div>
        <button
          onClick={() => onClickDelete(item.id, 'links')}
          className="absolute -right-6 top-0 bottom-0 m-auto"
        >
          <MdDeleteOutline
            size={20}
            className="transition-all hover:fill-primary-blue"
          />
        </button>
      </div>
      {isEdit && <SocialLinksForm {...item} />}
    </div>
  );
};

export default SocialListItem;
