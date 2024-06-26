import { FC } from 'react';
import DocumentActions from './DocumentActions';
import { Link } from 'react-router-dom';
import { CVType } from '../../../@types';

const Document: FC<CVType> = ({ id, name }) => {
  return (
    <li className="md:flex gap-5">
      <Link to={`/cv/${id}`} className="md:flex gap-5">
        <img
          className="border border-solid border-priamry-gray rounded-md mb-3 md:mb-0"
          src="./screenshot.webp"
          alt={name}
        />
      </Link>
      <div>
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <DocumentActions id={id} />
      </div>
    </li>
  );
};

export default Document;
