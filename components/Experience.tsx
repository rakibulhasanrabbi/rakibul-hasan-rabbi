
import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';
import type { ExperienceItem } from '../types';
import { ActivityIcon, CertificateIcon, TrainingIcon } from './Icons';

const getIconForType = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'Extracurricular':
      return <ActivityIcon className="w-6 h-6 text-primary" />;
    case 'Training':
      return <TrainingIcon className="w-6 h-6 text-primary" />;
    case 'Certification':
      return <CertificateIcon className="w-6 h-6 text-primary" />;
    default:
      return null;
  }
};


const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  return (
    <div className="bg-dark-card p-6 rounded-lg shadow-lg flex flex-col h-full transition-shadow hover:shadow-primary/20">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">{getIconForType(item.type)}</div>
        <div className="flex-1">
          <p className="text-xs text-primary font-semibold uppercase">{item.type}</p>
          <h3 className="text-lg font-bold text-dark-heading mt-1">{item.title}</h3>
          {item.organization && <p className="text-sm font-medium text-gray-400">{item.organization}</p>}
          <p className="text-sm mt-2 flex-grow">{item.description}</p>
        </div>
      </div>
    </div>
  );
};


const Experience: React.FC = () => {
  return (
    <Section title="Experience & Activities">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERIENCE_DATA.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
