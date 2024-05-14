import { FC } from 'react';
import { BtnType } from '../../../@types';

const Btn: FC<BtnType> = ({ children, handler, className }) => {
  return (
    <button
      className={`font-medium  text-white bg-primary-blue rounded-md py-2 px-3 hover:transition-all hover:bg-secondary-blue ${
        className ? className : ''
      }`}
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Btn;
