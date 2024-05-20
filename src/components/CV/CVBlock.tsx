import { FC } from 'react';
import { CVBlockType } from '../../../@types';

const CVBlock: FC<CVBlockType> = ({ title, text, children }) => {
  return (
    <div className="mb-10">
      <h2 className="subtitle mb-2">{title}</h2>
      {text && <p className="text-sm text-priamry-gray mb-4">{text}</p>}
      {children}
    </div>
  );
};

export default CVBlock;
