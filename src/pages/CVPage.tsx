import { FC, useEffect } from 'react';
import CVEditor from '../components/CV/CVEditor';
import CVPreview from '../components/CV/CVPreview';
import { useRetrieveCVQuery } from '../redux/API/CVAPI';
import { useAppDispatch } from '../hooks/hooks';
import { setCV } from '../redux/slices/CVSlice';
import { useParams } from 'react-router-dom';

const CVPage: FC = () => {
  const { id } = useParams();
  const { data } = useRetrieveCVQuery(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    data && dispatch(setCV(data));
  }, [data, dispatch]);

  return (
    <main className="h-screen min-[1220px]:grid min-[1220px]:grid-cols-2">
      <CVEditor />
      <CVPreview />
    </main>
  );
};

export default CVPage;
