import React, { FC, useState } from 'react';
import { LanguageType } from '../../../../@types';
import { IoChevronDown } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { RiDraggable } from 'react-icons/ri';
import LanguagesForm from '../../Forms/LanguagesForm';
import { languageLevels } from '../../../data/languageLevels';

type LanguageListItemProps = {
  item: LanguageType;
};

const LanguageListItem: FC<LanguageListItemProps> = ({ item }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <li className="border border-solid border-primary-gray rounded-md mb-4">
      <div className="relative">
        <button className="absolute -left-6 top-0 bottom-0 m-auto">
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
        <button className="absolute -right-6 top-0 bottom-0 m-auto">
          <MdDeleteOutline
            size={20}
            className="transition-all hover:fill-primary-blue"
          />
        </button>
      </div>
      {isEdit && <LanguagesForm {...item} />}
    </li>
  );
};

export default LanguageListItem;
