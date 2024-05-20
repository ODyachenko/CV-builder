import { useAppDispatch, useAppSelector } from './hooks';
import { setCV } from '../redux/slices/CVSlice';
import { updateObj } from '../utils/updateObj';

const useUpdate = (id: string, field: string) => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const onChange = (evt: string, key: string) => {
    const updatedObj = updateObj(CV, field, key, id, evt);
    dispatch(setCV({ ...CV, [field]: updatedObj }));
  };
  return onChange;
};

export default useUpdate;
