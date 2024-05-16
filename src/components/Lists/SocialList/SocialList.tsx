import React, { FC } from 'react';
import { SocialLinkType } from '../../../../@types';
import SocialListItem from './SocialListItem';

type EmploymentListProps = {
  list: SocialLinkType[];
};

const SocialList: FC<EmploymentListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <SocialListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default SocialList;
