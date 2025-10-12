
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { EmailIcon, PhoneIcon, LocationIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between py-12 mb-8">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left">
        <img
          src={PERSONAL_INFO.photoUrl}
          alt={PERSONAL_INFO.name}
          className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-primary shadow-lg"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-heading">{PERSONAL_INFO.name}</h1>
          <p className="text-xl text-primary mt-2">{PERSONAL_INFO.title}</p>
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end space-y-2 text-sm">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center space-x-2 hover:text-primary transition-colors">
          <EmailIcon className="w-4 h-4" />
          <span>{PERSONAL_INFO.email}</span>
        </a>
        <a href={`tel:${PERSONAL_INFO.contact}`} className="flex items-center space-x-2 hover:text-primary transition-colors">
          <PhoneIcon className="w-4 h-4" />
          <span>{PERSONAL_INFO.contact}</span>
        </a>
        <div className="flex items-center space-x-2">
          <LocationIcon className="w-4 h-4" />
          <span>{PERSONAL_INFO.address}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
