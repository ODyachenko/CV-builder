import { FC } from 'react';
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
  newEducation,
  newEmployment,
  newLanguage,
  newLink,
  newSkill,
} from '../../data/initialValues';

const CVEditor: FC = () => {
  const { CV } = useAppSelector((state) => state.CVSLice);
  const dispatch = useAppDispatch();
  const createItem = useCreate();

  const onChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    dispatch(setCV({ ...CV, [key]: evt.target.value }));
  };

  return (
    <Layout>
      <div className="text-center mb-10">
        <input
          className="font-bold text-xl text-center mb-2 focus:outline-none focus:border-b-2 border-solid border-primary-blue"
          type="text"
          value={CV.name}
          onChange={(evt) => onChangeHandler(evt, 'name')}
        />
        <span className="block font-light text-priamry-gray">English</span>
      </div>
      <PersonalDetailsForm />
      <SummaryForm />
      <CVBlock
        name="employment"
        title="Employment History"
        text="Show your relevant experience (last 10 years). Use bullet points to
          note your achievements, if possible - use numbers/facts (Achieved X,
          measured by Y, by doing Z)."
      >
        <EmploymentList list={CV.employments} />
        <CreateBtn
          value="employment"
          handler={() => createItem('employments', newEmployment)}
        />
      </CVBlock>

      <CVBlock
        name="education"
        title="Education"
        text="A varied education on your resume sums up the value that your
        learnings and background will bring to job."
      >
        <EducationList list={CV.educations} />
        <CreateBtn
          value="education"
          handler={() => createItem('educations', newEducation)}
        />
      </CVBlock>

      <CVBlock
        name="link"
        title="Websites & Social Links"
        text="You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your portfolio, LinkedIn profile, or personal
        website"
      >
        <SocialList list={CV.links} />
        <CreateBtn value="link" handler={() => createItem('links', newLink)} />
      </CVBlock>

      <CVBlock
        name="skill"
        title="Skills"
        text=" Choose 5 important skills that show you fit the position. Make sure
        they match the key skills mentioned in the job listing (especially
        when applying via an online system)."
      >
        <SkillList list={CV.skills} />
        <CreateBtn
          value="skill"
          handler={() => createItem('skills', newSkill)}
        />
      </CVBlock>

      <CVBlock name="language" title="Languages">
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
