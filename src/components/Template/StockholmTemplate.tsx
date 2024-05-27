import React, { FC } from 'react';
import { FaUser, FaBriefcase } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import { TemplateProps } from '../../../@types';
import { languageLevels } from '../../data/languageLevels';
import { useAppSelector } from '../../hooks/hooks';

const StockholmTemplate: FC<TemplateProps> = React.forwardRef(({ CV }, ref) => {
  const { lineSpacing } = useAppSelector((state) => state.CVSLice);

  return (
    <div
      ref={ref}
      className="-snug aspect-A4 bg-white rounded-lg py-10 px-14"
      style={{ lineHeight: lineSpacing }}
    >
      <div className="flex items-center gap-4 mb-9">
        {CV.avatarUrl && (
          <img
            className="w-16 h-16 rounded-full"
            src={CV.avatarUrl}
            alt={`${CV.firstName} ${CV.lastName}`}
          />
        )}
        <div>
          <h1 className="text-4xl font-black mb-2">{`${CV.firstName} ${CV.lastName}`}</h1>
          <span>{CV.jobTitle}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <div className="col col-span-2">
          {CV.profile && (
            <div className="mb-9">
              <h2 className="flex items-center gap-2 font-bold mb-2">
                <FaUser size={20} />
                Profile
              </h2>
              <p>{CV.profile}</p>
            </div>
          )}
          {!!CV.employments.length && (
            <div className="mb-9">
              <h2 className="flex items-center gap-2 font-bold mb-2">
                <FaBriefcase size={20} /> Employment History
              </h2>
              <ul>
                {CV.employments.map((employment) => (
                  <li key={employment.id} className="mb-4 last:mb-0">
                    <h3 className=" font-bold mb-1">
                      {employment.jobTitle &&
                        `${employment.jobTitle} at ${employment.employer}, 
                    ${employment.city}`}
                    </h3>
                    <span className="inline-block text-sm font-light text-priamry-gray mb-2">
                      {employment.startDate &&
                        `${employment.startDate} - ${employment.endDate}`}
                    </span>
                    <p>{employment.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!!CV.educations.length && (
            <div className="mb-9">
              <h2 className="flex items-center gap-2 font-bold mb-2">
                <IoSchool size={20} /> Education
              </h2>
              <ul>
                {CV.educations.map((education) => (
                  <li key={education.id} className="mb-4 last:mb-0">
                    <h3 className="font-bold mb-1">
                      {education.school &&
                        `${education.degree} at ${education.school}, ${education.city}`}
                    </h3>
                    <span className="inline-block text-sm font-light text-priamry-gray mb-2">
                      {education.startDate &&
                        `${education.startDate} - ${education.endDate}`}
                    </span>
                    <p>{education.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col">
          <div className="mb-9">
            <h3 className="font-bold mb-2">Details</h3>
            <h4 className="mb-2">{CV.city}</h4>
            <h4 className="mb-2">{CV.country}</h4>
            <a
              className="block text-primary-blue mb-2"
              href={`mailto:${CV.email}`}
            >
              {CV.email}
            </a>
            <a className="block text-primary-blue" href={`tel:${CV.phone}`}>
              {CV.phone}
            </a>
          </div>
          <div className="mb-9">
            <h3 className="font-bold mb-2">Links</h3>
            <ul>
              {CV.links.map((link) => (
                <li className="text-primary-blue mb-1" key={link.id}>
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
              {CV.skills.map(
                (skill, index) =>
                  skill.skill && (
                    <li
                      key={index}
                      className="border-b-4 border-solid border-primary-blue pb-2 mb-3 last:mb-0"
                    >
                      {skill.skill}
                    </li>
                  )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Languages</h3>
            <ul>
              {CV.languages.map(
                (language) =>
                  language.language && (
                    <li
                      key={language.id}
                      className="border-b-4 border-solid border-primary-blue pb-2 mb-3"
                    >
                      {language.language} (
                      {languageLevels[language.level].label})
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default StockholmTemplate;
