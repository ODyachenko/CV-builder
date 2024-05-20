import React, { FC } from 'react';
import InputField from '../UI/InputField';
import SelectField from '../UI/SelectField';
import { SkillType } from '../../../@types';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setCV } from '../../redux/slices/CVSlice';
import { updateObj } from '../../utils/updateObj';
import { skillLevels } from '../../data/skillLevels';

const SkillForm: FC<SkillType> = ({ skill, level, id }) => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const onChangeInput = (
    evt: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const updatedSkills = updateObj(CV, 'skills', key, id, evt.target.value);

    dispatch(setCV({ ...CV, skills: updatedSkills }));
  };

  const onChangeSelect = (
    evt: React.ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    const updatedSkills = updateObj(CV, 'skills', key, id, evt.value);
    dispatch(setCV({ ...CV, skills: updatedSkills }));
  };

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField
          label="Skill"
          value={skill}
          handler={(evt) => onChangeInput(evt, 'skill')}
        />
        <SelectField
          options={skillLevels}
          label="Level"
          placeholder="Select level"
          value={level}
          handler={(evt) => onChangeSelect(evt, 'level')}
        />
      </fieldset>
    </form>
  );
};

export default SkillForm;
