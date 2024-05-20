import { FC } from 'react';
import InputField from '../UI/InputField';
import SelectField from '../UI/SelectField';
import { SkillType } from '../../../@types';
import { skillLevels } from '../../data/skillLevels';
import useUpdate from '../../hooks/useUpdate';

const SkillForm: FC<SkillType> = ({ skill, level, id }) => {
  const onChange = useUpdate(id, 'skills');

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField
          label="Skill"
          value={skill}
          handler={(evt) => onChange(evt.target.value, 'skill')}
        />
        <SelectField
          options={skillLevels}
          label="Level"
          placeholder="Select level"
          value={level}
          handler={(evt) => onChange(evt.value, 'level')}
        />
      </fieldset>
    </form>
  );
};

export default SkillForm;
