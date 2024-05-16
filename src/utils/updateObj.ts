import React from 'react';
import { CVType } from '../../@types';

export const updateObj = (
  parent: CVType,
  key: string,
  field: string,
  id: number,
  evt: React.ChangeEvent<HTMLInputElement>
) => {
  return parent[key].map((item: { id: number }) => {
    if (item.id === id && field in item) {
      return { ...item, [field]: evt.target.value };
    }
    return item;
  });
};
