import { FC, useEffect } from 'react';
import CVEditor from '../components/CV/CVEditor';
import CVPreview from '../components/CV/CVPreview';
import { useRetrieveCVQuery } from '../redux/API/CVAPI';
import { useAppDispatch } from '../hooks/hooks';
import { setCV } from '../redux/slices/CVSlice';
import { useParams } from 'react-router-dom';

const CVPage: FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useRetrieveCVQuery(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    data && dispatch(setCV(data));
  }, [data, dispatch]);

  return (
    <main className="h-screen grid grid-cols-2">
      <CVEditor />
      <CVPreview />
    </main>
  );
};

export default CVPage;
