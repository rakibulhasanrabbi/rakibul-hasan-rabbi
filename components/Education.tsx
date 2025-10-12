
import React from 'react';
import Section from './Section';
import { EDUCATION_DATA } from '../constants';
import { GraduationCapIcon } from './Icons';

const Education: React.FC = () => {
  return (
    <Section title="Education">
      <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-400 h-full border" style={{ left: '50%' }}></div>
        {EDUCATION_DATA.map((item, index) => (
          <div key={index} className={`mb-8 flex justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center w-full`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center justify-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
               <GraduationCapIcon className="w-5 h-5 text-dark-heading" />
            </div>
            <div className="order-1 bg-dark-card rounded-lg shadow-xl w-5/12 px-6 py-4 transition-transform transform hover:scale-105">
              <h3 className="mb-2 font-bold text-dark-heading text-xl">{item.degree}</h3>
              <p className="text-sm font-medium text-primary">{item.institution}</p>
              <p className="text-sm text-gray-400 mb-2">{item.period} {item.grade && `• ${item.grade}`}</p>
              <ul className="text-xs list-disc list-inside">
                {item.details.map((detail, dIndex) => <li key={dIndex}>{detail}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
