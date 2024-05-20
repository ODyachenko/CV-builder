import { FC } from 'react';
import InputField from '../UI/InputField';
import TextArea from '../UI/TextArea';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { EmploymentType } from '../../../@types';
import { setCV } from '../../redux/slices/CVSlice';
import { updateObj } from '../../utils/updateObj';

const EmploymentForm: FC<EmploymentType> = ({
  id,
  jobTitle,
  employer,
  startDate,
  endDate,
  city,
  description,
}) => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const onChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const updatedEmployments = updateObj(
      CV,
      'employments',
      key,
      id,
      evt.target.value
    );
    dispatch(setCV({ ...CV, employments: updatedEmployments }));
  };

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6 mb-6">
        <InputField
          label="Job title"
          value={jobTitle}
          handler={(evt) => onChangeHandler(evt, 'jobTitle')}
        />
        <InputField
          label="Employer"
          value={employer}
          handler={(evt) => onChangeHandler(evt, 'employer')}
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

export default EmploymentForm;
