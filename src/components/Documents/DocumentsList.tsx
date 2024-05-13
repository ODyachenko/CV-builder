import { FC } from 'react';
import { documentsList } from '../../data/documentsList';
import Document from './Document';

const DocumentsList: FC = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-5 sm:grid sm:grid-cols-2">
      {documentsList.map((document) => (
        <Document key={document.id} {...document} />
      ))}
    </ul>
  );
};

export default DocumentsList;
