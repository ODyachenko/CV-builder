import { FC } from 'react';
import InputField from '../UI/InputField';
import SelectField from '../UI/SelectField';
import { LanguageType } from '../../../@types';
import { languageLevels } from '../../data/languageLevels';
import useUpdate from '../../hooks/useUpdate';

const LanguagesForm: FC<LanguageType> = ({ language, level, id }) => {
  const onChange = useUpdate(id, 'languages');

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField
          label="Language"
          value={language}
          handler={(evt) => onChange(evt.target.value, 'language')}
        />
        <SelectField
          options={languageLevels}
          value={level}
          handler={(evt) => onChange(evt.value, 'level')}
          label="Level"
          placeholder="Select level"
        />
      </fieldset>
    </form>
  );
};

export default LanguagesForm;
