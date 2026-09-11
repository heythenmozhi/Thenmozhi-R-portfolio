import { 
  ProjectItem, 
  EducationItem, 
  ExperienceItem, 
  SkillCategory, 
  CertificationItem, 
  PublicationItem, 
  AchievementItem,
  AdditionalProjectItem,
  ReferenceItem,
  PersonalDetails
} from '../types';

export const PERSONAL_INFO = {
  name: 'THENMOZHI R',
  title: 'INFORMATION TECHNOLOGY UNDERGRADUATE | FULL STACK DEVELOPER',
  shortTitle: 'Full Stack Developer & AI Enthusiast',
  tagline: 'Engineering modern full-stack web applications and integrating practical AI solutions that solve real-world problems.',
  email: 'thenmozhiraja22@gmail.com',
  phone: '+91 7010995334',
  githubUrl: 'https://github.com/heythenmozhi',
  linkedinUrl: 'https://www.linkedin.com/in/thenmozhi-r-935422338/',
  location: 'Coimbatore, Tamil Nadu, India',
  institution: 'Sri Shakthi Institute of Engineering and Technology',
  affiliation: 'Affiliated with Anna University',
  batch: '2024 – 2028',
  expectedGraduation: 'September 2028',
  cgpa: '8.3',
  careerGoal: 'To become a strong Full Stack Developer with AI capabilities and build production-oriented web applications that solve real-world problems.',
  summary: 
    'Information Technology undergraduate and full stack developer with hands-on experience building responsive, user-focused web applications using React.js, Node.js, Express.js, MongoDB and REST APIs. Practical exposure gained through a web development internship, multiple full-stack and frontend projects, and active participation in hackathons and technical events. Comfortable working across the stack, from designing clean, responsive UI to building backend logic and APIs, with experience integrating AI APIs such as Google Gemini into web applications.',
  careerInterests: [
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
    'REST API Development',
    'Web Application Development',
    'Cloud & DevOps'
  ],
  strengths: [
    'Quick Learner',
    'Adaptability',
    'Team Collaboration',
    'Time Management',
    'Attention to Detail',
    'Self-Motivated',
    'Continuous Learning'
  ],
  languages: [
    { language: 'English', proficiency: 'Professional Working Proficiency' },
    { language: 'Tamil', proficiency: 'Native / Bilingual Proficiency' }
  ]
};

export const PERSONAL_DETAILS: PersonalDetails = {
  dateOfBirth: '22/01/2007',
  gender: 'Female',
  nationality: 'Indian',
  hometown: 'Palani',
  permanentAddress: 'Barathi Dasan Road, Dindigul Road, Palani',
  phone: '+91 7010995334',
  mobility: 'Willing to relocate anywhere in India'
};

export const REFERENCES: ReferenceItem[] = [
  {
    name: 'Sathya T.',
    designation: 'Assistant Professor',
    contact: '9698146506'
  },
  {
    name: 'Prakash S.',
    designation: 'Head of the Department',
    contact: '9942650818'
  }
];

export const DECLARATION = {
  text: 'I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.',
  place: 'Coimbatore',
  name: 'Thenmozhi R'
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering – Information Technology',
    institution: 'Sri Shakthi Institute of Engineering and Technology',
    affiliation: 'Affiliated with Anna University',
    location: 'Coimbatore, Tamil Nadu',
    period: '2024 – 2028 (Expected)',
    expectedGraduation: 'September 2028',
    gradeMetric: 'CGPA',
    gradeValue: '8.3 / 10',
    highlights: [
      'Focusing on Full Stack Web Development, Cloud & AI Systems',
      'Hands-on experience in MERN stack architecture and REST API development',
      'Active participant in university hackathons and national competitive events'
    ]
  },
  {
    degree: 'Higher Secondary (XII)',
    institution: 'Tamil Nadu State Board',
    location: 'Tamil Nadu',
    period: '2024',
    gradeMetric: 'Percentage',
    gradeValue: '79.3%',
    highlights: [
      'Completed with core focus on Mathematics and Computer Science'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Web Technologies',
    description: 'Core web standards and adaptive responsive foundations',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'],
    color: 'emerald'
  },
  {
    category: 'Frontend / UI',
    description: 'Component architecture, reactive client state, and typography',
    skills: ['React.js', 'Responsive UI Design', 'Web Development', 'TypeScript'],
    color: 'blue'
  },
  {
    category: 'Backend / Database',
    description: 'Server runtimes, RESTful route handlers, document and SQL data stores',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'PHP', 'MongoDB', 'MySQL'],
    color: 'teal'
  },
  {
    category: 'Programming Languages',
    description: 'System software development and algorithm implementations',
    skills: ['Python', 'Java', 'C', 'C++'],
    color: 'indigo'
  },
  {
    category: 'Developer Tools',
    description: 'Source versioning, production hosting, and developer workflow',
    skills: ['Git', 'GitHub', 'Vercel', 'VS Code'],
    color: 'amber'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Web Developer Intern',
    company: 'ApexPlanet Software Pvt. Ltd.',
    period: '11 May 2026 – 24 June 2026',
    duration: '6 Weeks & 2 Days',
    mode: 'Virtual / Online',
    domain: 'Web Development in PHP & MySQL',
    description: 'Participated in assigned web development tasks, project development activities and practical learning exercises. Gained practical exposure to web development workflows.',
    keyPoints: [
      'Successfully completed an internship in Web Development using PHP & MySQL.',
      'Participated in assigned web development tasks, project development activities and practical learning exercises.',
      'Gained practical exposure to web development workflows, server-side scripting, and relational database handling.'
    ],
    skillsUsed: ['PHP', 'MySQL', 'Web Development', 'Server Scripting', 'Database Architecture']
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Skill Nexis',
    period: '29 July 2026 – 09 September 2026',
    duration: '6 Weeks',
    mode: 'Virtual / Online',
    domain: 'Full Stack Web Development (MERN)',
    description: 'Participated in assigned web development tasks, project development activities, and practical learning exercises.',
    keyPoints: [
      'Successfully completed a 6-week internship in Full Stack Web Development using the MERN stack.',
      'Participated in assigned web development tasks, project development activities, and practical learning exercises.',
      'Gained hands-on exposure to React.js, Node.js, Express.js, MongoDB, REST APIs, JWT authentication, CRUD operations, and frontend-backend integration.',
      'Developed and integrated full-stack web applications following practical development workflows.'
    ],
    skillsUsed: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'CRUD Operations']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'Capacity-Connect',
    name: 'Capacity Connect',
    subtitle: 'AI-Powered Competency-Based Organizational Learning & Training Platform',
    category: 'Full Stack & AI',
    isFlagship: true,
    coreMessage: 'We do not just deliver training. We measure competency improvement.',
    description: 'Built a competency-based organizational learning platform covering competency assessment, skill-gap identification, and personalized training recommendations.',
    longDescription: 'Capacity Connect bridges corporate and academic skill disparities through an automated 8-step closed-loop competency architecture: Assess → Identify Skill Gap → Match Trainer → Recommend Training → Learn → Measure Improvement. It replaces generic static curriculums with personalized learning journeys powered by real-time analytics and generative intelligence.',
    keyFeatures: [
      'Competency assessment with skill-gap identification and benchmarking',
      'Automated trainer recommendation and intelligent scheduling',
      'Personalized adaptive learning pathways based on baseline score',
      'Continuous progress analytics measuring post-training improvement',
      'Role-based dashboards for Learners, Instructors, and Administrators'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Google Gemini API'],
    aiIntegration: 'Google Gemini API for competency analysis, assessment/MCQ generation, and trainer-recommendation reasoning',
    workflow: [
      'Assess',
      'Analyze',
      'Identify Skill Gap',
      'Personalize',
      'Match Trainer',
      'Train',
      'Re-Assess',
      'Improve'
    ],
    userRoles: ['Learners / Employees', 'Domain Trainers', 'HR & Organization Admins'],
    teamMembers: ['Thenmozhi R (Full Stack Developer & AI Integration)', 'Academic & Industry Mentors'],
    githubUrl: 'https://github.com/heythenmozhi/Capacity-Connect'
  },
  {
    id: 'CampusMarketplace',
    name: 'Campus Marketplace',
    subtitle: 'Campus-Focused Peer-to-Peer Trading Platform',
    category: 'Full Stack Web',
    description: 'Built a campus-focused web application enabling students to buy and sell items within their college community.',
    longDescription: 'A verified student marketplace built to eliminate the risk and friction of buying and selling academic supplies, textbooks, dorm essentials, and electronics on general classifieds. Integrates campus authentication and direct buyer-seller messaging.',
    keyFeatures: [
      'Student identity verification and campus authentication',
      'Categorized item listings with search and price filtering',
      'Direct peer-to-peer messaging and contact exchange',
      'Responsive design optimized for fast mobile browsing'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
    githubUrl: 'https://github.com/heythenmozhi/CampusMarketplace'
  },
  {
    id: 'CollegeRideSharingApp',
    name: 'College Ride Sharing Application',
    subtitle: 'Peer-to-Peer Campus Commute Coordination System',
    category: 'Full Stack Web',
    description: 'Developed a web application connecting college students for shared travel and coordinated ride planning.',
    longDescription: 'Engineered a student commute platform enabling campus peers to coordinate shared transit, reduce travel costs, and decrease campus parking congestion. Features ride posting, route matching, and secure communication channels.',
    keyFeatures: [
      'Student signup, authentication, and verified identity profiles',
      'Ride posting with pickup points, departure schedule, and available seats',
      'Real-time ride searching, route matching, and seat booking requests',
      'Frontend coordination interface with driver contact sharing'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/heythenmozhi/CollegeRideSharingApp'
  },
  {
    id: 'CareerPilot-Ai',
    name: 'CareerPilot',
    subtitle: 'AI-Powered Interactive Career Guidance & Skill-Gap Platform',
    category: 'Full Stack & AI',
    description: 'Built an AI-powered career guidance platform to help students explore career paths and plan their professional development.',
    longDescription: 'CareerPilot empowers students to navigate modern tech career trajectories. It evaluates individual student skills, highlights prerequisite gaps for target job profiles, and generates actionable, milestone-based learning plans using artificial intelligence.',
    keyFeatures: [
      'Interactive career path exploration across modern tech domains',
      'Personalized skill-gap analysis comparing current skills with industry standards',
      'AI-driven milestone recommendations and learning curriculum suggestions',
      'Progress tracking with dynamic visual skill badges'
    ],
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'AI'],
    aiIntegration: 'AI-driven skill-gap analysis and personalized career milestone recommendations',
    githubUrl: 'https://github.com/heythenmozhi/CareerPilot-Ai'
  },
  {
    id: 'NBA-Mapping-System',
    name: 'NBA CO-PO-PSO Mapping System',
    subtitle: 'Academic Accreditation Outcome Mapping & Matrix Validation Platform',
    category: 'Academic & Systems',
    description: 'Developing a full-stack CO/PO/PSO academic outcome mapping system supporting NBA accreditation workflows, including faculty login, dashboard, course details and syllabus management.',
    longDescription: 'A specialized academic workflow system designed for engineering colleges undergoing National Board of Accreditation (NBA) audits. Automates complex Course Outcome (CO) to Program Outcome (PO) and Program Specific Outcome (PSO) matrix correlation calculations with strict accreditation compliance.',
    keyFeatures: [
      'Faculty authentication, departmental dashboards, and syllabus management',
      'PDF syllabus upload and automated parsing for Course Outcomes',
      'Matrix correlation editor with backend validation enforcing blank cells (never zero) for non-correlated outcomes',
      'Comprehensive React/Vite/Tailwind frontend with 14+ dedicated views and collapsible navigation'
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
    aiIntegration: 'Gemini API integration for automated course syllabus parsing and outcome taxonomy alignment'
  },
  {
    id: 'Student-Career-Enhancement-Analyzer',
    name: 'Student Career Enhancement Analyzer',
    subtitle: 'Predictive Competency & Career Trajectory Research System',
    category: 'Full Stack & AI',
    description: 'Research-oriented project focused on analyzing and enhancing student career outcomes; published as a peer-reviewed research paper in the Journal of Advance and Future Research.',
    longDescription: 'A comprehensive academic and career analytics engine that tracks longitudinal student competencies across programming, technical problem solving, and soft skills to predict and enhance placement readiness.',
    keyFeatures: [
      'Multi-dimensional student skill evaluation framework',
      'Predictive career trajectory modeling and vulnerability detection',
      'Validated through peer-reviewed research and formal publication',
      'Journal of Advance and Future Research Publication (App: 202441119642)'
    ],
    techStack: ['Python', 'Web Analytics', 'Full Stack Architecture']
  }
];

export const ADDITIONAL_PROJECTS: AdditionalProjectItem[] = [
  {
    title: 'Learnify – Learning Platform for Students',
    period: 'Aug 2025 – Dec 2025',
    description: 'Educational web application designed for students in Class 1–6 with interactive modules and gamified learning.',
    tech: 'React.js, Web Technologies'
  },
  {
    title: 'Medicine Reminder Application',
    period: 'Jul 2025 – Sep 2025',
    description: 'Web application to schedule, monitor, and track medication reminders with alerting mechanisms.',
    tech: 'JavaScript, Web Technologies'
  },
  {
    title: 'Python Hangman Console',
    period: 'Console Application',
    description: 'Console-based Hangman word guessing game with interactive game states and vocabulary dictionary built in Python.',
    tech: 'Python'
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: 'ReactJS Course',
    issuer: 'Unstop',
    category: 'Frontend & UI'
  },
  {
    name: 'Full Stack Developer Internship',
    issuer: 'Skill Nexis',
    category: 'Full Stack MERN'
  },
  {
    name: 'Web Developer in PHP & MySQL Internship',
    issuer: 'ApexPlanet Software Pvt. Ltd.',
    category: 'Web & Databases'
  },
  {
    name: 'Git Training',
    issuer: 'SkillUp',
    category: 'Developer Tools'
  },
  {
    name: 'CS105: Introduction to Python',
    issuer: 'Saylor Academy',
    category: 'Programming Languages',
    grade: 'Grade: 92.10% (36 hours)'
  },
  {
    name: 'Use Generative AI for Software Development',
    issuer: 'IBM SkillsBuild',
    category: 'Artificial Intelligence'
  },
  {
    name: 'Prompt Engineering',
    issuer: 'Infosys Springboard',
    category: 'Generative AI',
    date: '24 May 2026'
  },
  {
    name: 'Learn the Basics of Web Accessibility',
    issuer: 'Microsoft',
    category: 'Frontend & UI'
  },
  {
    name: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Forage',
    category: 'AI & Analytics',
    date: '25 March 2026'
  },
  {
    name: 'Introduction to Generative AI Concepts',
    issuer: 'Microsoft',
    category: 'Artificial Intelligence'
  },
  {
    name: 'AI/ML Mastery',
    issuer: 'Unstop',
    category: 'Machine Learning & AI'
  }
];

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    title: 'Student Career Enhancement Analyzer',
    status: 'Published',
    date: '06/05/2026',
    applicationNumber: '202441119642',
    description: 'Published in Journal of Advance and Future Research. Research on algorithmic modeling of academic competencies to predict and enhance placement and professional readiness.'
  },
  {
    title: 'Learnify',
    status: 'Published',
    date: '01/12/2025',
    applicationNumber: '202541119662',
    description: 'Published in Journal of Advance and Future Research. Research on digital pedagogical interfaces and engagement architectures for early-grade learning.'
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'SIH Internal Hackathon',
    category: 'Top Performer',
    description: 'Recognized as Top Performer on 25/08/2026 for building full-stack technical solutions addressing national problem statements.'
  },
  {
    title: "HackSprint '26 (24-Hour Hackathon)",
    category: 'Hackathon Participant',
    description: 'Participated in the intense 24-hour hackathon conducted by the AI Research Laboratory at Sri Shakthi Institute of Engineering & Technology (22–23 July 2026).'
  },
  {
    title: 'AI & Technology Quiz 2026',
    category: 'Quiz Participant',
    description: 'Participated in the competitive AI & Technology Quiz conducted by Campus Unite.'
  },
  {
    title: 'DevQuest 2.0',
    category: 'International Challenge',
    description: 'Participated in the International Frontend, C, C++, DSA, AI & Computer Science Challenge.'
  },
  {
    title: 'AI Trivia Challenge (AI Arena 2026)',
    category: 'MCQ Competition',
    description: 'Participated in the competitive online MCQ Quiz Competition covering core artificial intelligence concepts.'
  },
  {
    title: 'AWS Summer Meetup 2026',
    category: 'AWS User Group',
    description: 'Attended specialized technical tracks: Building Production-Ready AI Agents with Amazon Bedrock AgentCore & Building an AI Startup on AWS: From Zero to Production in Coimbatore.'
  }
];

export const VOLUNTEER_EXPERIENCE = [
  {
    title: 'Women Empowerment Awareness',
    description: 'Participated in an awareness initiative focused on promoting women empowerment and social awareness.'
  }
];
