import { FC, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCV } from '../../redux/slices/CVSlice';
import TextArea from '../UI/TextArea';

const SummaryForm: FC = () => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const onChangeHandler = useCallback(
    (value: string) => {
      dispatch(setCV({ ...CV, ['profile']: value }));
    },
    [dispatch, CV]
  );

  return (
    <div className="mb-10">
      <h2 className="subtitle mb-2">Professional Summary</h2>
      <p className="text-sm text-priamry-gray mb-4">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </p>
      <TextArea
        value={CV.profile}
        handler={(evt) => onChangeHandler(evt)}
        placeholder="e.g. Passionate science teacher with 8+ years of expericence and a track record of ..."
      />
      <div className="flex justify-between gap-3 mt-2">
        <p className="text-sm text-priamry-gray">
          Recruiter tip: write 400-600 characters to increase interview chances
        </p>
        <span className="whitespace-nowrap">{CV.profile?.length} / 600</span>
      </div>
    </div>
  );
};

export default SummaryForm;
