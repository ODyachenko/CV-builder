import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type CreateBtnProps = {
  value: string;
  handler: () => void;
};

const CreateBtn: FC<CreateBtnProps> = ({ value, handler }) => {
  const { t } = useTranslation();

  return (
    <button onClick={handler} className="font-medium text-primary-blue mt-3">
      + {t('Add one more')} {value}
    </button>
  );
};

export default CreateBtn;
