import { useAppDispatch, useAppSelector } from './hooks';
import { setCV } from '../redux/slices/CVSlice';
import { useUpdateCVMutation } from '../redux/API/CVAPI';
import { CVType } from '../../@types';

const useCreate = (id: string) => {
  const [updateCV] = useUpdateCVMutation();
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const createItem = (name: string, initialValue: object) => {
    const addedItem = {
      ...CV,
      [name]: [...CV[name as keyof CVType], { ...initialValue, id }],
    };
    dispatch(setCV(addedItem));
    updateCV(addedItem);
  };

  return createItem;
};

export default useCreate;
