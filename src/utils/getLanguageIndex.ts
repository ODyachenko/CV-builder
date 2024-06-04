import { LanguageListType } from '../../@types';

export const getLanguageIndex = (list: LanguageListType[], key: string) => {
  const item = list.find((item) => item.iso === key);
  return item ? item.value : 0;
};
