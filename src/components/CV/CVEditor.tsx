import React, { FC } from 'react';
import { v4 } from 'uuid';
import Layout from '../Layout';
import PersonalDetailsForm from '../Forms/PersonalDetailsForm';
import CVBlock from './CVBlock';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import EmploymentList from '../Lists/EmploymentList/EmploymentList';
import EducationList from '../Lists/EducationList/EducationList';
import SocialList from '../Lists/SocialList/SocialList';
import SkillList from '../Lists/SkillList/SkillList';
import LanguageList from '../Lists/LanguageList/LanguageList';
import { setCV } from '../../redux/slices/CVSlice';
import CreateBtn from '../UI/CreateBtn';
import SummaryForm from '../Forms/SummaryForm';
import useCreate from '../../hooks/useCreate';
import {
  newCourse,
  newEducation,
  newEmployment,
  newLanguage,
  newLink,
  newSkill,
} from '../../data/initialValues';
import CourseList from '../Lists/CourseList/CourseList';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import SelectField from '../UI/SelectField';
import { languageList } from '../../data/languageList';
import { getLanguageIndex } from '../../utils/getLanguageIndex';

const CVEditor: FC = () => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const createItem = useCreate(v4());

  const onChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    dispatch(setCV({ ...CV, [key]: evt.target.value }));
  };

  const handleLanguageChange = (evt: any) => {
    if (language !== evt.iso) {
      i18n.changeLanguage(evt.iso);
      setLanguage(evt.iso);
    }
  };

  return (
    <Layout className="overflow-auto">
      <div className="text-center mb-10">
        <input
          className="font-bold text-xl text-center mb-2 focus:outline-none focus:border-b-2 border-solid border-primary-blue"
          type="text"
          value={CV.name}
          onChange={(evt) => onChangeHandler(evt, 'name')}
        />
        <div>
          <SelectField
            className="inline-block "
            options={languageList}
            value={getLanguageIndex(languageList, language)}
            handler={handleLanguageChange}
          />
        </div>
      </div>
      <PersonalDetailsForm />
      <SummaryForm />
      <CVBlock
        name="employment"
        title={t('Employment History')}
        text={t(
          'Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).'
        )}
      >
        <EmploymentList list={CV.employments} />
        <CreateBtn
          value="employment"
          handler={() => createItem('employments', newEmployment)}
        />
      </CVBlock>

      <CVBlock
        name="education"
        title={t('Education')}
        text={t(
          'A varied education on your resume sums up the value that your learnings and background will bring to job.'
        )}
      >
        <EducationList list={CV.educations} />
        <CreateBtn
          value="education"
          handler={() => createItem('educations', newEducation)}
        />
      </CVBlock>

      <CVBlock
        name="link"
        title={t('Websites & Social Links')}
        text={t(
          'You can add links to websites you want hiring managers to see! Perhaps It will be a link to your portfolio, LinkedIn profile, or personal website'
        )}
      >
        <SocialList list={CV.links} />
        <CreateBtn value="link" handler={() => createItem('links', newLink)} />
      </CVBlock>

      <CVBlock
        name="skill"
        title={t('Skills')}
        text={t(
          'Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system).'
        )}
      >
        <SkillList list={CV.skills} />
        <CreateBtn
          value="skill"
          handler={() => createItem('skills', newSkill)}
        />
      </CVBlock>
      <CVBlock name="courses" title={t('Courses')}>
        <CourseList list={CV.courses} />
        <CreateBtn
          value="course"
          handler={() => createItem('courses', newCourse)}
        />
      </CVBlock>

      <CVBlock name="language" title={t('Languages')}>
        <LanguageList list={CV.languages} />
        <CreateBtn
          value="language"
          handler={() => createItem('languages', newLanguage)}
        />
      </CVBlock>
    </Layout>
  );
};

export default CVEditor;
