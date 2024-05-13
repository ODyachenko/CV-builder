import { FC } from 'react';
import { DocumentType } from '../../../@types';
import DocumentActions from './DocumentActions';

const Document: FC<DocumentType> = ({ title, lastUpdate, screenshot }) => {
  return (
    <li className="md:flex gap-5">
      <img
        className="border border-solid border-priamry-gray rounded-md mb-3 md:mb-0"
        src={screenshot}
        alt={title}
      />
      <div>
        <h2 className="text-2xl">{title}</h2>
        <span className="inline-block text-sm text-priamry-gray mb-5">
          {lastUpdate}
        </span>
        <DocumentActions />
      </div>
    </li>
  );
};

export default Document;
