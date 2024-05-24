import { useDispatch } from 'react-redux';
import { setCV } from '../redux/slices/CVSlice';
import { useAppSelector } from './hooks';
import { useUpdateCVMutation } from '../redux/API/CVAPI';

const useDelete = () => {
  const [updateCV, { isLoading, isError }] = useUpdateCVMutation();
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useDispatch();

  const onClickDelete = (id: string, field: string) => {
    if (confirm('Do you want to delete item?')) {
      const filteredItems = CV[field].filter((item) => item.id !== id);
      const newCV = { ...CV, [field]: filteredItems };
      dispatch(setCV(newCV));
      updateCV(newCV);
    }
  };
  return onClickDelete;
};

export default useDelete;
