import { useAppDispatch, useAppSelector } from './hooks';
import { setCV } from '../redux/slices/CVSlice';
import { useUpdateCVMutation } from '../redux/API/CVAPI';

const useCreate = (id: string) => {
  const [updateCV, { isLoading, isError }] = useUpdateCVMutation();
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const createItem = (name: string, initialValue: object) => {
    const addedItem = { ...CV, [name]: [...CV[name], { ...initialValue, id }] };
    dispatch(setCV(addedItem));
    updateCV(addedItem);
  };

  return createItem;
};

export default useCreate;
