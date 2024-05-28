import { FC } from 'react';
import InputField from '../UI/InputField';
import { CourseType } from '../../../@types';
import useUpdate from '../../hooks/useUpdate';
import { useTranslation } from 'react-i18next';

const CourseForm: FC<CourseType> = ({
  id,
  course,
  institution,
  startDate,
  endDate,
}) => {
  const { t } = useTranslation();
  const onChange = useUpdate(id, 'courses');

  return (
    <form className="py-4 px-5">
      <fieldset className="grid grid-cols-2 gap-6 mb-6">
        <InputField
          label={t('Course')}
          value={course}
          handler={(evt) => onChange(evt.target.value, 'course')}
        />
        <InputField
          label={t('Institution')}
          value={institution}
          handler={(evt) => onChange(evt.target.value, 'institution')}
        />
        <fieldset>
          <label>
            <span className="block text-sm font-light text-priamry-gray mb-1">
              {t('Start & End Date')}
            </span>
            <span className="grid grid-cols-2 gap-3">
              <InputField
                type="month"
                value={startDate}
                handler={(evt) => onChange(evt.target.value, 'startDate')}
              />
              <InputField
                type="month"
                value={endDate}
                handler={(evt) => onChange(evt.target.value, 'endDate')}
              />
            </span>
          </label>
        </fieldset>
      </fieldset>
    </form>
  );
};

export default CourseForm;
