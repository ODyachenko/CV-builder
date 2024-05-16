import React, { FC } from 'react';
import InputField from '../UI/InputField';
import SelectField from '../UI/SelectField';
import { SkillType } from '../../../@types';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setCV } from '../../redux/slices/CVSlice';
import { updateObj } from '../../utils/updateObj';

const options = [
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Skillful', label: 'Skillful' },
  { value: 'Experienced', label: 'Experienced' },
  { value: 'Expert', label: 'Expert' },
];

const SkillForm: FC<SkillType> = ({ skill, level, id }) => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const onChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const updatedSkills = updateObj(CV, 'skills', key, id, evt);
    dispatch(setCV({ ...CV, skills: updatedSkills }));
  };

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField
          label="Skill"
          value={skill}
          handler={(evt) => onChangeHandler(evt, 'skill')}
        />
        <SelectField
          options={options}
          value={level}
          label="Level"
          placeholder="Select level"
        />
      </fieldset>
    </form>
  );
};

export default SkillForm;
