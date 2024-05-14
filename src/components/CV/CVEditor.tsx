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

const CVEditor: FC = () => {
  return (
    <Layout>
      <div className="text-center mb-10">
        <input
          className="font-bold text-xl text-center mb-2 focus:outline-none focus:border-b-2 border-solid border-primary-blue"
          type="text"
          // value={'Chemist'}
          defaultValue="Chemist"
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
        <TextArea />
        <div className="flex justify-between gap-3">
          <p className="text-sm leading-snug text-priamry-gray">
            Recruiter tip: write 400-600 characters to increase interview
            chances
          </p>
          <span className="whitespace-nowrap">423 / 600</span>
        </div>
      </div>
      <CVBlock
        name="employment"
        title="Employment History"
        form={<EmploymentForm />}
        text="Show your relevant experience (last 10 years). Use bullet points to
          note your achievements, if possible - use numbers/facts (Achieved X,
          measured by Y, by doing Z)."
      />

      <CVBlock
        name="education"
        title="Education"
        form={<EducationForm />}
        text="A varied education on your resume sums up the value that your
        learnings and background will bring to job."
      />

      <CVBlock
        name="link"
        title="Websites & Social Links"
        form={<SocialLinksForm />}
        text="You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your portfolio, LinkedIn profile, or personal
        website"
      />

      <CVBlock
        name="skill"
        title="Skills"
        form={<SkillForm />}
        text=" Choose 5 important skills that show you fit the position. Make sure
        they match the key skills mentioned in the job listing (especially
        when applying via an online system)."
      />

      <CVBlock name="language" title="Languages" form={<LanguagesForm />} />
    </Layout>
  );
};

export default CVEditor;
