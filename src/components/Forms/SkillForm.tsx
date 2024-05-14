import React, { FC } from 'react';
import InputField from '../UI/InputField';
import SelectField from '../UI/SelectField';

const options = [
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Skillful', label: 'Skillful' },
  { value: 'Experienced', label: 'Experienced' },
  { value: 'Expert', label: 'Expert' },
];

const SkillForm: FC = () => {
  return (
    <form action="">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField label="Skill" value="" handler={() => true} />
        <SelectField
          options={options}
          label="Level"
          placeholder="Select level"
        />
      </fieldset>
    </form>
  );
};

export default SkillForm;
