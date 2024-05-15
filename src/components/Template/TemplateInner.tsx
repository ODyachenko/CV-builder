import { FC } from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FaMinus, FaPlus } from 'react-icons/fa';

import Btn from '../UI/Btn';

const TemplateInner: FC = () => {
  return (
    <div className="flex items-center justify-between gap-2 mb-8">
      <div className="flex items-center ">
        <button className="flex items-center gap-2 text-white border-r border-solid border-white mr-4 pr-4">
          <AiOutlineAppstore size={25} /> Select template
        </button>
        <div className="flex items-center gap-3 text-white">
          <button>
            <FaMinus />
          </button>
          <span>Aa</span>
          <button>
            <FaPlus />
          </button>
        </div>
      </div>
      <div>
        <Btn handler={() => true}>Download PDF</Btn>
      </div>
    </div>
  );
};

export default TemplateInner;
