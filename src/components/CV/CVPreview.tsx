import { FC } from 'react';
import { usePDF } from 'react-to-pdf';
import Layout from '../Layout';
import TemplateInner from '../Template/TemplateInner';
import StockholmTemplate from '../Template/StockholmTemplate';
import { useAppSelector } from '../../hooks/hooks';

const CVPreview: FC = () => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const { toPDF, targetRef } = usePDF({
    filename: `${CV.jobTitle.replace(' ', '_')}`,
    method: 'open',
  });

  return (
    <Layout className="bg-dark-gray">
      <TemplateInner handler={toPDF} />
      <StockholmTemplate CV={CV} ref={targetRef} />
    </Layout>
  );
};

export default CVPreview;
