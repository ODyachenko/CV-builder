import { FC } from 'react';
import { FaUser, FaBriefcase } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import { CVType } from '../../../@types';

const StockholmTemplate: FC<CVType> = ({
  firstName,
  lastName,
  jobTitle,
  email,
  city,
  country,
  profile,
  employments,
  educations,
  links,
  skills,
  languages,
}) => {
  return (
    <div className=" bg-white rounded-lg py-10 px-14">
      <div className="mb-9">
        <img src="" alt="" />
        <div>
          <h1 className="text-4xl font-black mb-2">{`${firstName} ${lastName}`}</h1>
          <span>{jobTitle}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <div className="col col-span-2">
          <div className="mb-9">
            <h2 className="flex items-center gap-2 font-bold mb-2">
              <FaUser /> Profile
            </h2>
            <p className="leading-snug">{profile}</p>
          </div>
          <div className="mb-9">
            <h2 className="flex items-center gap-2 font-bold mb-2">
              <FaBriefcase /> Employment History
            </h2>
            <ul>
              {employments.map((employment) => (
                <li key={employment.id}>
                  <h3 className="text-sm font-bold">
                    {employment.jobTitle} at {employment.employer},{' '}
                    {employment.city}
                  </h3>
                  <span className="inline-block text-sm font-light text-priamry-gray mb-2">
                    {employment.startDate} - {employment.endDate}
                  </span>
                  <p>{employment.description}</p>
                  {/* <ul className="leading-snug list-disc pl-8">
                    <li>
                      Conducted research on the synthesis of organic compounds
                      with potential pharmaceutical applications.
                    </li>
                    <li>
                      Designed and executed multi-step synthetic routes,
                      utilizing a variety of modern techniques including
                      chromatography, spectroscopy, and computational modeling.
                    </li>
                    <li>
                      Successfully synthesized and characterized numerous
                      compounds, demonstrating potent activity in preclinical
                      studies.
                    </li>
                  </ul> */}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-9">
            <h2 className="flex items-center gap-2 font-bold mb-2">
              <IoSchool /> Education
            </h2>
            <ul>
              {educations.map((education) => (
                <li key={education.id}>
                  <h3>
                    {education.degree} at {education.school}, {education.city}
                  </h3>
                  <span className="inline-block text-sm font-light text-priamry-gray">
                    {education.startDate} - {education.endDate}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col">
          <div className="mb-9">
            <h3 className="font-bold mb-2">Details</h3>
            <h4>{city}</h4>
            <h4>{country}</h4>
            <a className="text-primary-blue" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <div className="mb-9">
            <h3 className="font-bold mb-2">Links</h3>
            <ul>
              {links.map((link) => (
                <li className="text-primary-blue" key={link.id}>
                  <a href={link.link} target="_blank">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-9">
            <h3 className="font-bold mb-2">Skills</h3>
            <ul>
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="border-b-2 border-solid border-primary-blue pb-3 mb-3"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Languages</h3>
            <ul>
              {languages.map((language) => (
                <li
                  key={language.id}
                  className="border-b-2 border-solid border-primary-blue pb-3 mb-3"
                >
                  {language.language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockholmTemplate;
