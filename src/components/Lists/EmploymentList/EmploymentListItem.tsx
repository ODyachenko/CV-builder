import React, { FC, useState } from 'react';
import { EmploymentType } from '../../../../@types';
import { IoChevronDown } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { RiDraggable } from 'react-icons/ri';
import EmploymentForm from '../../Forms/EmploymentForm';

type EmploymentListItemProps = {
  item: EmploymentType;
};

const EmploymentListItem: FC<EmploymentListItemProps> = ({ item }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onClickDeleteHandler = () => {
    confirm('Do you want to delete item?');
  };

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
                {item.jobTitle} at {item.employer}
              </h3>
              <span className="font-light text-priamry-gray">
                {item.startDate} - {item.endDate}
              </span>
            </div>
            <IoChevronDown size={20} />
          </div>
        </div>
        <button
          onClick={onClickDeleteHandler}
          className="absolute -right-6 top-0 bottom-0 m-auto"
        >
          <MdDeleteOutline
            size={20}
            className="transition-all hover:fill-primary-blue"
          />
        </button>
      </div>
      {isEdit && <EmploymentForm {...item} />}
    </li>
  );
};

export default EmploymentListItem;
