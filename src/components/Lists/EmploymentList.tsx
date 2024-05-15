import React, { FC } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { EmploymentType } from '../../../@types';

type EmploymentListProps = {
  list: EmploymentType[];
  form: React.ReactNode;
};

const EmploymentList: FC<EmploymentListProps> = ({ list, form }) => {
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
                {item.jobTitle} at {item.employer}
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

export default EmploymentList;
