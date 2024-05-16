import React, { FC } from 'react';
import InputField from '../UI/InputField';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCV } from '../../redux/slices/CVSlice';

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
        <div className="mt-2 flex items-center gap-x-3">
          <svg
            className="h-12 w-12 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
          <button
            type="button"
            className="rounded-md bg-white px-2.5 py-1.5 text-sm text-primary-blue shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Upload Photo
          </button>
        </div>
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
