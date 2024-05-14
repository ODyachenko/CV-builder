import React, { FC } from 'react';
import InputField from '../UI/InputField';
import SelectField from '../UI/SelectField';

const options = [
  { value: 'Native speaker', label: 'Native speaker' },
  { value: 'C2', label: 'C2' },
  { value: 'C1', label: 'C1' },
  { value: 'B2', label: 'B2' },
  { value: 'B1', label: 'B1' },
  { value: 'A2', label: 'A2' },
  { value: 'A1', label: 'A1' },
];

const LanguagesForm: FC = () => {
  return (
    <form action="">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField label="Language" value="" handler={() => true} />
        <SelectField
          options={options}
          label="Level"
          placeholder="Select level"
        />
      </fieldset>
    </form>
  );
};

export default LanguagesForm;
