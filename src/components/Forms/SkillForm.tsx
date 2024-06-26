import { FC } from 'react';
import InputField from '../UI/InputField';
import SelectField from '../UI/SelectField';
import { SkillType } from '../../../@types';
import { skillLevels } from '../../data/skillLevels';
import useUpdate from '../../hooks/useUpdate';
import { useTranslation } from 'react-i18next';
import useBlur from '../../hooks/useBlur';

const SkillForm: FC<SkillType> = ({ skill, level, id }) => {
  const { t } = useTranslation();
  const onChange = useUpdate(id, 'skills');
  const onBlur = useBlur();

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField
          label={t('Skill')}
          value={skill}
          handler={(evt) => onChange(evt.target.value, 'skill')}
        />
        <SelectField
          options={skillLevels}
          label={t('Level')}
          placeholder="Select level"
          value={level}
          handler={(evt) => onChange(String(evt?.value), 'level')}
          onBlur={onBlur}
        />
      </fieldset>
    </form>
  );
};

export default SkillForm;
