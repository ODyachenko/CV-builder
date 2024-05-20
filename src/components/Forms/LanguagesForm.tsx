import React, { FC } from 'react';
import InputField from '../UI/InputField';
import SelectField from '../UI/SelectField';
import { LanguageType } from '../../../@types';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setCV } from '../../redux/slices/CVSlice';
import { updateObj } from '../../utils/updateObj';
import { languageLevels } from '../../data/languageLevels';

const LanguagesForm: FC<LanguageType> = ({ language, level, id }) => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const onChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const updatedLanguages = updateObj(CV, 'languages', key, id, evt);
    dispatch(setCV({ ...CV, languages: updatedLanguages }));
  };

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField
          label="Language"
          value={language}
          handler={(evt) => onChangeHandler(evt, 'language')}
        />
        <SelectField
          options={languageLevels}
          value={level}
          label="Level"
          placeholder="Select level"
        />
      </fieldset>
    </form>
  );
};

export default LanguagesForm;
