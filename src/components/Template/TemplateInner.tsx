import { FC } from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Btn from '../UI/Btn';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  decrementLineSpacing,
  incrementLineSpacing,
} from '../../redux/slices/CVSlice';
import { useTranslation } from 'react-i18next';

type TemplateInnerProps = {
  handler: () => void;
};

const TemplateInner: FC<TemplateInnerProps> = ({ handler }) => {
  const { lineSpacing } = useAppSelector((state) => state.CVSLice);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between gap-2 mb-8">
      <div className="flex items-center ">
        <button className="flex items-center gap-2 text-white border-r border-solid border-white mr-4 pr-4">
          <AiOutlineAppstore size={25} /> {t('Select template')}
        </button>
        <div className="flex items-center gap-3 text-white">
          <button
            className="disabled:text-priamry-gray"
            onClick={() => dispatch(decrementLineSpacing())}
            disabled={lineSpacing < 1.3}
          >
            <FaMinus />
          </button>
          <span>Aa</span>
          <button
            className="disabled:text-priamry-gray"
            onClick={() => dispatch(incrementLineSpacing())}
            disabled={lineSpacing > 1.9}
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <div>
        <Btn handler={handler}>{t('Download PDF')}</Btn>
      </div>
    </div>
  );
};

export default TemplateInner;
