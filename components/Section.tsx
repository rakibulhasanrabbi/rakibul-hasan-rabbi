
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-dark-heading mb-8 relative w-full text-center">
        {title}
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 h-1 w-24 bg-primary rounded-full"></span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
