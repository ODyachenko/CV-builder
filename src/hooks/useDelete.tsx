import { useDispatch } from 'react-redux';
import { setCV } from '../redux/slices/CVSlice';
import { useAppSelector } from './hooks';

const useDelete = () => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useDispatch();

  const onClickDelete = (id: string, field: string) => {
    if (confirm('Do you want to delete item?')) {
      const filteredItems = CV[field].filter((item) => item.id !== id);
      dispatch(setCV({ ...CV, [field]: filteredItems }));
    }
  };
  return onClickDelete;
};

export default useDelete;
