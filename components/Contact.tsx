
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { EmailIcon, LocationIcon, PhoneIcon } from './Icons';


const Contact: React.FC = () => {
  return (
    <Section title="Get In Touch">
        <div className="text-center max-w-2xl mx-auto">
            <p className="mb-8">
                I am actively seeking new opportunities and would be delighted to connect. Please feel free to reach out to me via email or phone.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                    <EmailIcon className="w-6 h-6"/>
                    <span>{PERSONAL_INFO.email}</span>
                </a>
                <a href={`tel:${PERSONAL_INFO.contact}`} className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                    <PhoneIcon className="w-6 h-6"/>
                    <span>{PERSONAL_INFO.contact}</span>
                </a>
            </div>
            <div className="mt-8 flex justify-center items-center gap-3 text-center">
                <LocationIcon className="w-5 h-5"/>
                <span>{PERSONAL_INFO.permanentAddress}</span>
            </div>
        </div>
        <footer className="text-center text-gray-500 mt-16 border-t border-slate-700 pt-6">
            <p>&copy; {new Date().getFullYear()} Rakibul Hasan Rabbi. All Rights Reserved.</p>
        </footer>
    </Section>
  );
};

export default Contact;
