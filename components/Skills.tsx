
import React from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="bg-dark-card p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-dark-heading mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SkillCategory title="Technical Skills" skills={SKILLS_DATA.technical} />
        <SkillCategory title="Soft Skills" skills={SKILLS_DATA.soft} />
        <SkillCategory title="Languages" skills={SKILLS_DATA.languages} />
      </div>
    </Section>
  );
};

export default Skills;
