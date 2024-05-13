import { FC } from 'react';
import { InputFieldType } from '../../../@types';

const InputField: FC<InputFieldType> = ({
  value,
  handler,
  className,
  type,
  label,
  placeholder,
}) => {
  return (
    <label className={`${className ? className : ''}`}>
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={handler}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputField;
