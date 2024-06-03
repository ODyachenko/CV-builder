import dayjs from 'dayjs';

export const convertDate = (value: string) => {
  return dayjs(value).format('MMMM YYYY');
};
