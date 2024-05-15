import React, { FC } from 'react';
import { EducationType } from '../../../@types';
import { IoChevronDown } from 'react-icons/io5';

type EducationListProps = {
  list: EducationType[];
  form: React.ReactNode;
};

const EducationList: FC<EducationListProps> = ({ list, form }) => {
  return (
    <ul>
      {list.map((item) => (
        <li
          key={item.id}
          className="border border-solid border-primary-gray rounded-md py-4 px-5 mb-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold mb-1">
                {item.degree} at {item.school}
              </h3>
              <span className="font-light text-priamry-gray">
                {item.startDate} - {item.endDate}
              </span>
            </div>
            <IoChevronDown />
          </div>
        </li>
      ))}

      <li className="border border-solid border-primary-gray rounded-md py-4 px-5 mb-4">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-bold mb-1">Not secified</h3>
            <span className="font-light text-priamry-gray">
              Sep 2017 - Present
            </span>
          </div>
          <IoChevronDown />
        </div>
        {form}
      </li>
    </ul>
  );
};

export default EducationList;
