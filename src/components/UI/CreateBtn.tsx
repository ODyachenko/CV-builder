import React, { FC } from 'react';

type CreateBtnProps = {
  value: string;
  handler: () => void;
};

const CreateBtn: FC<CreateBtnProps> = ({ value, handler }) => {
  return (
    <button onClick={handler} className="font-medium text-primary-blue mt-3">
      + Add one more {value}
    </button>
  );
};

export default CreateBtn;
