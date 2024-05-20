import React, { FC } from 'react';
import InputField from '../UI/InputField';
import TextArea from '../UI/TextArea';
import { setCV } from '../../redux/slices/CVSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { EducationType } from '../../../@types';
import { updateObj } from '../../utils/updateObj';

const EducationForm: FC<EducationType> = ({
  id,
  degree,
  description,
  school,
  city,
  startDate,
  endDate,
}) => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const onChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const updatedEducations = updateObj(CV, 'educations', key, id, evt);
    dispatch(setCV({ ...CV, educations: updatedEducations }));
  };

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6 mb-6">
        <InputField
          label="School"
          value={school}
          handler={(evt) => onChangeHandler(evt, 'school')}
        />
        <InputField
          label="Degree"
          value={degree}
          handler={(evt) => onChangeHandler(evt, 'degree')}
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
                handler={(evt) => onChangeHandler(evt, 'startDate')}
              />
              <InputField
                type="month"
                value={endDate}
                handler={(evt) => onChangeHandler(evt, 'endDate')}
              />
            </span>
          </label>
        </fieldset>
        <InputField
          label="City"
          value={city}
          handler={(evt) => onChangeHandler(evt, 'city')}
        />
      </fieldset>
      <TextArea
        value={description}
        handler={(evt) => onChangeHandler(evt, 'description')}
        label="Description"
      />
    </form>
  );
};

export default EducationForm;
