import { FC } from 'react';
import Layout from '../Layout';
import TemplateInner from '../Template/TemplateInner';
import StockholmTemplate from '../Template/StockholmTemplate';
import { useAppSelector } from '../../hooks/hooks';

const CVPreview: FC = () => {
  const { CV } = useAppSelector((state) => state.CVSLice);

  return (
    <Layout className="bg-dark-gray">
      <TemplateInner />
      <StockholmTemplate {...CV} />
    </Layout>
  );
};

export default CVPreview;
