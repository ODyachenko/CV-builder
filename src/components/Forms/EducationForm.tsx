import { FC } from 'react';
import InputField from '../UI/InputField';
import TextArea from '../UI/TextArea';
import { EducationType } from '../../../@types';
import useUpdate from '../../hooks/useUpdate';

const EducationForm: FC<EducationType> = ({
  id,
  degree,
  description,
  school,
  city,
  startDate,
  endDate,
}) => {
  const onChange = useUpdate(id, 'educations');

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6 mb-6">
        <InputField
          label="School"
          value={school}
          handler={(evt) => onChange(evt.target.value, 'school')}
        />
        <InputField
          label="Degree"
          value={degree}
          handler={(evt) => onChange(evt.target.value, 'degree')}
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

export default EducationForm;
