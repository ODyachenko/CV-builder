import { useAppDispatch, useAppSelector } from './hooks';
import { setCV } from '../redux/slices/CVSlice';
import { useUpdateCVMutation } from '../redux/API/CVAPI';

const useCreate = () => {
  const [updateCV, { isLoading, isError }] = useUpdateCVMutation();
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const createItem = (name: string, initialValue: unknown) => {
    const addedNewItem = { ...CV, [name]: [...CV[name], initialValue] };
    dispatch(setCV(addedNewItem));
    updateCV(addedNewItem);
  };

  return createItem;
};

export default useCreate;
