import { FC } from 'react';
import InputField from '../UI/InputField';
import SelectField from '../UI/SelectField';
import { LanguageType } from '../../../@types';
import { languageLevels } from '../../data/languageLevels';
import useUpdate from '../../hooks/useUpdate';
import { useTranslation } from 'react-i18next';
import useBlur from '../../hooks/useBlur';

const LanguagesForm: FC<LanguageType> = ({ language, level, id }) => {
  const { t } = useTranslation();
  const onChange = useUpdate(id, 'languages');
  const onBlur = useBlur();

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField
          label={t('Language')}
          value={language}
          handler={(evt) => onChange(evt.target.value, 'language')}
        />
        <SelectField
          options={languageLevels}
          value={level}
          handler={(evt) => onChange(String(evt?.value), 'level')}
          onBlur={onBlur}
          label={t('Level')}
          placeholder="Select level"
        />
      </fieldset>
    </form>
  );
};

export default LanguagesForm;
