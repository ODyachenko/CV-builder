import React, { FC } from 'react';
import InputField from '../UI/InputField';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCV } from '../../redux/slices/CVSlice';
import ImageCropper from '../ImageCropper/ImageCropper';

const PersonalDetailsForm: FC = () => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const onChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    dispatch(setCV({ ...CV, [key]: evt.target.value }));
  };

  return (
    <form action="" className="mb-10">
      <h2 className="subtitle mb-5">Personal Details</h2>
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField
          label="Job Title"
          value={CV.jobTitle}
          handler={(evt) => onChangeHandler(evt, 'jobTitle')}
          placeholder="e.g. Teacher"
        />
        <ImageCropper />
        <InputField
          label="First Name"
          value={CV.firstName}
          handler={(evt) => onChangeHandler(evt, 'firstName')}
        />
        <InputField
          label="Last Name"
          value={CV.lastName}
          handler={(evt) => onChangeHandler(evt, 'lastName')}
        />
        <InputField
          label="Email"
          value={CV.email}
          handler={(evt) => onChangeHandler(evt, 'email')}
          type="email"
          name="email"
        />
        <InputField
          label="Phone"
          value={CV.phone}
          handler={(evt) => onChangeHandler(evt, 'phone')}
          type="phone"
          name="phone"
        />
        <InputField
          label="Country"
          value={CV.country}
          handler={(evt) => onChangeHandler(evt, 'country')}
          name="country"
        />
        <InputField
          label="City"
          value={CV.city}
          handler={(evt) => onChangeHandler(evt, 'city')}
          name="city"
        />
      </fieldset>
    </form>
  );
};

export default PersonalDetailsForm;
