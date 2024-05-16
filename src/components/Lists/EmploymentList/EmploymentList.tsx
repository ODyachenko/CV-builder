import React, { FC } from 'react';
import EmploymentListItem from './EmploymentListItem';
import { EmploymentType } from '../../../../@types';

type EmploymentListProps = {
  list: EmploymentType[];
};

const EmploymentList: FC<EmploymentListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <EmploymentListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EmploymentList;
