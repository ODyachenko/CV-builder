import React, { FC } from 'react';
import InputField from '../UI/InputField';
import TextArea from '../UI/TextArea';

const EducationForm: FC = () => {
  return (
    <form action="">
      <fieldset className="grid grid-cols-2 gap-6 mb-6">
        <InputField label="School" value="" handler={() => true} />
        <InputField label="Degree" value="" handler={() => true} />
        <fieldset>
          <label>
            <span className="block text-sm font-light text-priamry-gray mb-1">
              Start & End Date
            </span>
            <span className="grid grid-cols-2 gap-3">
              <InputField type="month" value="" handler={() => true} />
              <InputField type="month" value="" handler={() => true} />
            </span>
          </label>
        </fieldset>
        <InputField label="City" value="" handler={() => true} />
      </fieldset>
      <TextArea label="Description" />
    </form>
  );
};

export default EducationForm;
