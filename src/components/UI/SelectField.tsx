import React, { FC } from 'react';
import Select from 'react-select';
import { SelectType } from '../../../@types';
import useBlur from '../../hooks/useBlur';

const colorStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: '#eff2f9',
    border: 'none',
    borderRadius: '3px',
    padding: '4px 0',
    cursor: 'pointer',
  }),
};

const SelectField: FC<SelectType> = ({
  className,
  label,
  options,
  placeholder,
  value,
  handler,
}) => {
  const onBlur = useBlur();

  return (
    <label className={`${className ? className : ''}`}>
      <span className="block text-sm font-light text-priamry-gray mb-1">
        {label}
      </span>
      <Select
        options={options}
        placeholder={placeholder}
        styles={colorStyles}
        defaultValue={options[value]}
        onChange={handler}
        onBlur={onBlur}
      />
    </label>
  );
};

export default SelectField;
