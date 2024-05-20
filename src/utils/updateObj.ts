import { CVType } from '../../@types';

export const updateObj = (
  parent: CVType,
  key: string,
  field: string,
  id: string,
  evt: string
) => {
  return parent[key].map((item: { id: string }) => {
    if (item.id === id && field in item) {
      return { ...item, [field]: evt };
    }
    return item;
  });
};
