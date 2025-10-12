
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section title="About Me">
      <p className="text-center text-lg leading-relaxed max-w-3xl mx-auto">
        {PERSONAL_INFO.summary}
      </p>
    </Section>
  );
};

export default About;
