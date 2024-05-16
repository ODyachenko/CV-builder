import React, { FC } from 'react';
import InputField from '../UI/InputField';
import { SocialLinkType } from '../../../@types';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setCV } from '../../redux/slices/CVSlice';
import { updateObj } from '../../utils/updateObj';

const SocialLinksForm: FC<SocialLinkType> = ({ label, link, id }) => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();

  const onChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const updatedSocialLinks = updateObj(CV, 'links', key, id, evt);
    dispatch(setCV({ ...CV, links: updatedSocialLinks }));
  };

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6">
        <InputField
          label="Label"
          value={label}
          handler={(evt) => onChangeHandler(evt, 'label')}
        />
        <InputField
          label="Link"
          value={link}
          handler={(evt) => onChangeHandler(evt, 'link')}
        />
      </fieldset>
    </form>
  );
};

export default SocialLinksForm;
