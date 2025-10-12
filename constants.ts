import { EducationItem, SkillSet, ExperienceItem } from './types';

export const PERSONAL_INFO = {
  name: "Rakibul Hasan Rabbi",
  title: "Computer Science & Engineering Student",
  contact: "01745218711",
  email: "hasanrakibul1488@gmail.com",
  address: "100 Feet Madane Avenue Nursury, Dhaka 1212.",
  permanentAddress: "Vill- Hasmari, Post- Kachikata 6630, Gurudashpur, Natore.",
  photoUrl: "data:image/jpeg;base64,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",
  summary: "A motivated and skilled student currently pursuing a bachelor's degree in computer science and engineering at United International University. With a strong academic background, achieving a GPA of 5.00 in both SSC and HSC, I consistently demonstrate excellence in science and technology. I have completed six months of professional training in computer office applications and data entry, enhancing my technical skills. Skilled in MS Office, basic programming languages, and various software tools. My strong communication, leadership, and problem-solving abilities complement my technical skills. I actively participate in extracurricular activities as a leading member of the UIU Cansat Team and a member of the UIU Robotics Club, developing teamwork and innovation skills. Fluent in English, I am committed to continuous learning and professional growth, aiming to contribute meaningfully to computer science and engineering."
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "BSc (Eng.) in Computer Science and Engineering",
    institution: "United International University",
    period: "Current 6th Trimester",
    grade: "",
    details: ["Group/Subject: Computer Science and Engineering"]
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "N.S. Govt. College, Natore",
    period: "2021",
    grade: "GPA: 5.00",
    details: ["Board: Rajshahi", "Group/Subject: Science"]
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Natore Govt. Boys' High School",
    period: "2019",
    grade: "GPA: 5.00",
    details: ["Board: Rajshahi", "Group/Subject: Science"]
  }
];

export const SKILLS_DATA: SkillSet = {
  technical: ["MS Word", "MS Excel", "Microsoft Office", "Power Point Presentation", "Basic Programming", "Software Tools", "Data Entry"],
  languages: ["English (Fluent in writing, reading, and speaking)"],
  soft: ["Communication", "Leadership", "Problem-solving", "Teamwork", "Innovation"]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: "Leading Member",
    organization: "UIU Cansat Team",
    type: "Extracurricular",
    description: "Actively participate in team projects, fostering teamwork and innovation skills."
  },
  {
    title: "General Member",
    organization: "UIU Robotics",
    type: "Extracurricular",
    description: "Engaged in robotics projects and activities as a general member."
  },
  {
    title: "Cadet",
    organization: "Bangladesh National Cadet Corps (BNCC)",
    type: "Extracurricular",
    description: "Served as a BNCC Cadet at Bangladesh National Cadet Corps."
  },
  {
    title: "Professional Training",
    organization: "Computer Office Applications & Data Entry",
    type: "Training",
    description: "Completed six months of professional training, improving technical skills and accuracy in using digital tools."
  },
  {
    title: "BAUET ICT Olympiad Certificate",
    organization: "BAUET",
    type: "Certification",
    description: "Certificate of participation."
  },
  {
    title: "International Entrepreneurs Day Certificate",
    organization: "Event Certificate",
    type: "Certification",
    description: "Certificate of participation."
  },
  {
    title: "Presentation Masterclass Certificate",
    organization: "Event Certificate",
    type: "Certification",
    description: "Certificate of completion."
  }
];