import { FC } from 'react';
import Document from './Document';
import { useGetCVQuery } from '../../redux/API/CVAPI';
import { CVType } from '../../../@types';

const DocumentsList: FC = () => {
  const { data, isLoading, error } = useGetCVQuery('');

  return (
    <ul className="flex flex-wrap justify-center gap-5 sm:grid sm:grid-cols-2">
      {data &&
        data.map((document: CVType) => (
          <Document key={document.id} {...document} />
        ))}
    </ul>
  );
};

export default DocumentsList;
