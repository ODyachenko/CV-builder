import React, { FC } from 'react';
import { IoChevronDown } from 'react-icons/io5';

type SkillListProps = {
  list: string[];
  form: React.ReactNode;
};

const SkillList: FC<SkillListProps> = ({ list, form }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li
          key={index}
          className="border border-solid border-primary-gray rounded-md py-4 px-5 mb-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold">{item}</h3>
            </div>
            <IoChevronDown />
          </div>
        </li>
      ))}

      <li className="border border-solid border-primary-gray rounded-md py-4 px-5 mb-4">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-bold">Not secified</h3>
          </div>
          <IoChevronDown />
        </div>
        {form}
      </li>
    </ul>
  );
};

export default SkillList;
