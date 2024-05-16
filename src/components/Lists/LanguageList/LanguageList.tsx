import React, { FC } from 'react';
import { LanguageType } from '../../../../@types';
import LanguageListItem from './LanguageListItem';

type LanguageListProps = {
  list: LanguageType[];
};

const LanguageList: FC<LanguageListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <LanguageListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default LanguageList;
