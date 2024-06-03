import { FC } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import { TextAreaType } from '../../../@types';
import useBlur from '../../hooks/useBlur';

const TextArea: FC<TextAreaType> = ({
  value,
  handler,
  className,
  label,
  placeholder,
}) => {
  const onBlur = useBlur();

  return (
    <>
      <label className={`${className ? className : ''}`}>
        <span className="block text-sm font-light text-priamry-gray mb-1">
          {label}
        </span>
        <SimpleMDE
          value={value}
          onChange={handler}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </label>
    </>
  );
};

export default TextArea;
