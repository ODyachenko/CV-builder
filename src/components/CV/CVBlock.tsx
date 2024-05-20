import { FC } from 'react';
import { CVBlockType } from '../../../@types';

const CVBlock: FC<CVBlockType> = ({ title, text, name, children }) => {
  return (
    <div className="mb-10">
      <h2 className="subtitle mb-2">{title}</h2>
      {text && <p className="text-sm text-priamry-gray mb-4">{text}</p>}
      {children}
      <button className="font-medium text-primary-blue mt-3">
        + Add one more {name}
      </button>
    </div>
  );
};

export default CVBlock;
