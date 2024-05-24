import { FC } from 'react';
import { BsFiletypePdf, BsFiletypeTxt } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

const DocumentActions: FC = () => {
  return (
    <div>
      <button className="flex items-center gap-2 mb-3 transition-all last:mb-0  hover:text-primary-blue">
        <BsFiletypePdf color="#1a91f0" size={20} />
        <span className="text-lg">Download PDF</span>
      </button>
      <button className="flex items-center gap-2 mb-3 transition-all last:mb-0  hover:text-primary-blue">
        <BsFiletypeTxt color="#1a91f0" size={20} />
        <span className="text-lg">Export to TXT</span>
      </button>
      <button className="flex items-center gap-2 mb-3 transition-all last:mb-0  hover:text-primary-blue">
        <RiDeleteBin6Line color="#1a91f0" size={20} />
        <span className="text-lg">Delete</span>
      </button>
    </div>
  );
};

export default DocumentActions;
