import { FC } from 'react';
import InputField from '../UI/InputField';
import { SocialLinkType } from '../../../@types';
import useUpdate from '../../hooks/useUpdate';
import { useTranslation } from 'react-i18next';

const SocialLinksForm: FC<SocialLinkType> = ({ label, link, id }) => {
  const { t } = useTranslation();
  const onChange = useUpdate(id, 'links');

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField
          label={t('Label')}
          value={label}
          handler={(evt) => onChange(evt.target.value, 'label')}
        />
        <InputField
          label={t('Link')}
          value={link}
          handler={(evt) => onChange(evt.target.value, 'link')}
        />
      </fieldset>
    </form>
  );
};

export default SocialLinksForm;
