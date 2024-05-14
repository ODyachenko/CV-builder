import { FC } from 'react';
import CVEditor from '../components/CV/CVEditor';
import CVPreview from '../components/CV/CVPreview';

const CVPage: FC = () => {
  return (
    <main className="grid grid-cols-2">
      <CVEditor />
      <CVPreview />
    </main>
  );
};

export default CVPage;
