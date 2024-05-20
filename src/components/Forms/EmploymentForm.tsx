import { FC } from 'react';
import InputField from '../UI/InputField';
import TextArea from '../UI/TextArea';
import { EmploymentType } from '../../../@types';
import useUpdate from '../../hooks/useUpdate';

const EmploymentForm: FC<EmploymentType> = ({
  id,
  jobTitle,
  employer,
  startDate,
  endDate,
  city,
  description,
}) => {
  const onChange = useUpdate(id, 'employments');

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6 mb-6">
        <InputField
          label="Job title"
          value={jobTitle}
          handler={(evt) => onChange(evt.target.value, 'jobTitle')}
        />
        <InputField
          label="Employer"
          value={employer}
          handler={(evt) => onChange(evt.target.value, 'employer')}
        />
        <fieldset>
          <label>
            <span className="block text-sm font-light text-priamry-gray mb-1">
              Start & End Date
            </span>
            <span className="grid grid-cols-2 gap-3">
              <InputField
                type="month"
                value={startDate}
                handler={(evt) => onChange(evt.target.value, 'startDate')}
              />
              <InputField
                type="month"
                value={endDate}
                handler={(evt) => onChange(evt.target.value, 'endDate')}
              />
            </span>
          </label>
        </fieldset>
        <InputField
          label="City"
          value={city}
          handler={(evt) => onChange(evt.target.value, 'city')}
          name="city"
        />
      </fieldset>
      <TextArea
        value={description}
        handler={(evt) => onChange(evt.target.value, 'description')}
        label="Description"
      />
    </form>
  );
};

export default EmploymentForm;
