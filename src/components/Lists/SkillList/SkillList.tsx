import React, { FC } from 'react';
import SkillListItem from './SkillListItem';
import { SkillType } from '../../../../@types';

type SkillListProps = {
  list: SkillType[];
};

const SkillList: FC<SkillListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <SkillListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default SkillList;
