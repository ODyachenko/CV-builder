import React, { FC } from 'react';
import { EducationType } from '../../../../@types';
import EducationListItem from './EducationListItem';

type EducationListProps = {
  list: EducationType[];
};

const EducationList: FC<EducationListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <EducationListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EducationList;
