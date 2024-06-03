import { useAppSelector } from './hooks';
import { useUpdateCVMutation } from '../redux/API/CVAPI';

const useBlur = () => {
  const [updateCV, { isLoading, isError }] = useUpdateCVMutation();
  const { CV } = useAppSelector((state) => state.CVSLice);

  const onBlur = () => {
    updateCV(CV);
  };

  return onBlur;
};

export default useBlur;
