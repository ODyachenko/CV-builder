import React, { FC } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { CVBlockType } from '../../../@types';

const CVBlock: FC<CVBlockType> = ({ title, text, form, name }) => {
  return (
    <div className="mb-10">
      <h2 className="subtitle mb-2">{title}</h2>
      {text && (
        <p className="text-sm leading-snug text-priamry-gray mb-4">{text}</p>
      )}
      <ul>
        <li className="border border-solid border-primary-gray rounded-md py-4 px-5 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold mb-1">Organic Chemist at Enamine Ltd</h3>
              <span className="font-light text-priamry-gray">
                Sep 2017 - Present
              </span>
            </div>
            <IoChevronDown />
          </div>
        </li>
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
          {/* <EmploymentForm /> */}
          {form}
        </li>
      </ul>
      <button className="font-medium text-primary-blue mt-3">
        + Add one more {name}
      </button>
    </div>
  );
};

export default CVBlock;
