import { FC } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import { TextAreaType } from '../../../@types';

const TextArea: FC<TextAreaType> = ({
  value,
  handler,
  className,
  label,
  placeholder,
}) => {
  return (
    <>
      <label className={`${className ? className : ''}`}>
        <span className="block text-sm font-light text-priamry-gray mb-1">
          {label}
        </span>
        <SimpleMDE value={value} onChange={handler} placeholder={placeholder} />
      </label>
    </>
  );
};

export default TextArea;
