import { FC } from 'react';
import Layout from '../Layout';
import TextArea from '../UI/TextArea';
import PersonalDetailsForm from '../Forms/PersonalDetailsForm';
import EmploymentForm from '../Forms/EmploymentForm';
import EducationForm from '../Forms/EducationForm';
import SocialLinksForm from '../Forms/SocialLinksForm';
import LanguagesForm from '../Forms/LanguagesForm';
import SkillForm from '../Forms/SkillForm';
import CVBlock from './CVBlock';
import { useAppSelector } from '../../hooks/hooks';
import EmploymentList from '../Lists/EmploymentList';
import EducationList from '../Lists/EducationList';
import SocialList from '../Lists/SocialList';
import SkillList from '../Lists/SkillList';
import LanguageList from '../Lists/LanguageList';

const CVEditor: FC = () => {
  const { CV } = useAppSelector((state) => state.CVSLice);

  return (
    <Layout>
      <div className="text-center mb-10">
        <input
          className="font-bold text-xl text-center mb-2 focus:outline-none focus:border-b-2 border-solid border-primary-blue"
          type="text"
          value={CV.name}
          // defaultValue="Chemist"
        />
        <span className="block font-light text-priamry-gray">English</span>
      </div>
      <PersonalDetailsForm />
      <div className="mb-10">
        <h2 className="subtitle mb-2">Professional Summary</h2>
        <p className="text-sm leading-snug text-priamry-gray mb-4">
          Write 2-4 short & energetic sentences to interest the reader! Mention
          your role, experience & most importantly - your biggest achievements,
          best qualities and skills.
        </p>
        <TextArea value={CV.profile} handler={() => true} />
        <div className="flex justify-between gap-3">
          <p className="text-sm leading-snug text-priamry-gray">
            Recruiter tip: write 400-600 characters to increase interview
            chances
          </p>
          <span className="whitespace-nowrap">{CV.profile?.length} / 600</span>
        </div>
      </div>
      <CVBlock
        name="employment"
        title="Employment History"
        text="Show your relevant experience (last 10 years). Use bullet points to
          note your achievements, if possible - use numbers/facts (Achieved X,
          measured by Y, by doing Z)."
      >
        <EmploymentList list={CV.employments} form={<EmploymentForm />} />
      </CVBlock>

      <CVBlock
        name="education"
        title="Education"
        text="A varied education on your resume sums up the value that your
        learnings and background will bring to job."
      >
        <EducationList list={CV.educations} form={<EducationForm />} />
      </CVBlock>

      <CVBlock
        name="link"
        title="Websites & Social Links"
        text="You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your portfolio, LinkedIn profile, or personal
        website"
      >
        <SocialList list={CV.links} form={<SocialLinksForm />} />
      </CVBlock>

      <CVBlock
        name="skill"
        title="Skills"
        text=" Choose 5 important skills that show you fit the position. Make sure
        they match the key skills mentioned in the job listing (especially
        when applying via an online system)."
      >
        <SkillList list={CV.skills} form={<SkillForm />} />
      </CVBlock>

      <CVBlock name="language" title="Languages">
        <LanguageList list={CV.languages} form={<LanguagesForm />} />
      </CVBlock>
    </Layout>
  );
};

export default CVEditor;
