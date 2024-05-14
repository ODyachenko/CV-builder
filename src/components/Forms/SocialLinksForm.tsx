import React, { FC } from 'react';
import InputField from '../UI/InputField';

const SocialLinksForm: FC = () => {
  return (
    <form action="">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField label="Label" value="" handler={() => true} />
        <InputField label="Link" value="" handler={() => true} />
      </fieldset>
    </form>
  );
};

export default SocialLinksForm;
