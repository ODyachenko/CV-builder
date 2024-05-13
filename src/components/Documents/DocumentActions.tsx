import { FC } from 'react';
import { documentActions } from '../../data/documentActions';

const DocumentActions: FC = () => {
  return (
    <ul>
      {documentActions.map((action) => (
        <li
          key={action.id}
          className="flex items-center gap-2 mb-3 text-priamry-gray last:mb-0 last:text-red-500"
        >
          {action.icon} <span className="text-lg">{action.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default DocumentActions;
