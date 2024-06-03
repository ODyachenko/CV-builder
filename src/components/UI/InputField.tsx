import { FC } from 'react';
import { InputFieldType } from '../../../@types';
import useBlur from '../../hooks/useBlur';

const InputField: FC<InputFieldType> = ({
  value,
  handler,
  className,
  type,
  label,
  placeholder,
  name,
  autoComplete,
}) => {
  const onBlur = useBlur();

  return (
    <label className={`${className ? className : ''}`}>
      <span className="block text-sm font-light text-priamry-gray mb-1">
        {label}
      </span>
      <input
        className="w-full bg-field-bg rounded-sm py-3 px-4 focus:outline-none focus:border-b-2 border-solid border-primary-blue"
        type={type}
        value={value}
        onChange={handler}
        onBlur={onBlur}
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
      />
    </label>
  );
};

export default InputField;
