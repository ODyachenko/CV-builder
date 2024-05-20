import React from 'react';
import { CVType } from '../../@types';

export const updateObj = (
  parent: CVType,
  key: string,
  field: string,
  id: number,
  evt: string
) => {
  return parent[key].map((item: { id: number }) => {
    if (item.id === id && field in item) {
      return { ...item, [field]: evt };
    }
    return item;
  });
};
