import { FC } from 'react';
import { TextAreaType } from '../../../@types';

const TextArea: FC<TextAreaType> = ({ className, label }) => {
  return (
    <label className={`${className ? className : ''}`}>
      <span className="block text-sm font-light text-priamry-gray mb-1">
        {label}
      </span>
      <textarea
        className="w-full h-36 bg-field-bg rounded-sm py-3 px-4 resize-none focus:outline-none focus:border-b-2 border-solid border-primary-blue"
        placeholder="e.g. Passionate science teacher with 8+ years of expericence and a track record of ..."
      ></textarea>
    </label>
  );
};

export default TextArea;
