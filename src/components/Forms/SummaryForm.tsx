import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import TextArea from '../UI/TextArea';

type SummaryFormProps = {
  handler: (evt: React.ChangeEvent<HTMLInputElement>, name: string) => void;
};

const SummaryForm: FC<SummaryFormProps> = ({ handler }) => {
  const { CV } = useAppSelector((state) => state.CVSLice);

  return (
    <div className="mb-10">
      <h2 className="subtitle mb-2">Professional Summary</h2>
      <p className="text-sm text-priamry-gray mb-4">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </p>
      <TextArea value={CV.profile} handler={(evt) => handler(evt, 'profile')} />
      <div className="flex justify-between gap-3">
        <p className="text-sm text-priamry-gray">
          Recruiter tip: write 400-600 characters to increase interview chances
        </p>
        <span className="whitespace-nowrap">{CV.profile?.length} / 600</span>
      </div>
    </div>
  );
};

export default SummaryForm;
