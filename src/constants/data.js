// ============================================================
// Central data source — extracted from Jaishree K S's resume.
// Edit this file to update content across the entire site.
// ============================================================

export const personalInfo = {
  name: 'Jaishree K S',
  initials: 'JK',
  tagline: 'Aspiring Software Engineer | Python & MERN Stack',
  roles: [
    'Software Engineer',
    'Python Developer',
    'MERN Stack Developer',
    'Machine Learning Enthusiast',
  ],
  location: 'Bengaluru, India',
  phone: '+91 7624945573',
  email: 'ksjaishree2005@gmail.com',
  github: 'https://github.com/', // placeholder — add your GitHub username
  linkedin: 'https://linkedin.com/', // placeholder — add your LinkedIn profile
  resumeFile: '/resume.pdf',
  summary:
    "Information Science student with a 9.38 CGPA, Smart India Hackathon (SIH) participant, and HackerRank Silver Badge holder in Python. Hands-on experience with Python, Java, and Machine Learning through academic and personal projects, plus practical MERN stack development experience from a Webstack Academy internship. Looking to build real-world, scalable software applications.",
};

export const about = {
  objective:
    "To grow as a software engineer by building real-world, scalable applications — combining a strong academic foundation in Information Science with hands-on experience across full-stack development and machine learning.",
  strengths: [
    'Problem Solving',
    'Adaptability',
    'Quick Learning',
    'Time Management',
    'Analytical Thinking',
  ],
  enjoys:
    'Building full-stack applications that solve tangible problems — from department management portals to AI-assisted platforms — and exploring how machine learning models can be deployed into real, interactive tools.',
};

export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'FiCode',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 75 },
      { name: 'C (Basic)', level: 55 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'FiLayout',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'React.js (Basic)', level: 65 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'FiServer',
    skills: [
      { name: 'Flask', level: 80 },
      { name: 'REST APIs', level: 78 },
      { name: 'JWT Authentication', level: 70 },
      { name: 'Node.js & Express.js', level: 65 },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    icon: 'FiCpu',
    skills: [
      { name: 'Scikit-learn', level: 78 },
      { name: 'Pandas & NumPy', level: 80 },
      { name: 'Model Evaluation', level: 75 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'FiDatabase',
    skills: [{ name: 'MongoDB', level: 78 }],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'FiTool',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Streamlit', level: 72 },
    ],
  },
];

export const projects = [
  {
    id: 'smart-department-portal',
    title: 'Smart Department Portal (ISEHub)',
    type: 'Academic Project',
    overview:
      'A department management portal built for students and faculty to streamline day-to-day department operations, centralizing announcements and academic information into a single, always-current source of truth.',
    shortDescription:
      'A department management portal with role-based login, centralizing announcements and academic info for students and faculty.',
    features: [
      'Student login and authentication for secure, role-based access',
      'Centralized department announcements and academic information',
      'Lightweight backend architecture for fast, reliable data access',
    ],
    challenges:
      'Balancing simplicity with security — implementing role-based authentication while keeping the backend lightweight using JSON-based storage instead of a full database, so the portal stayed fast and easy to deploy.',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'JSON'],
    github: '',
    demo: '',
  },
  {
    id: 'bitcoin-price-prediction',
    title: 'Bitcoin Price Prediction using Machine Learning',
    type: 'Academic Project',
    overview:
      'An end-to-end machine learning pipeline that predicts Bitcoin closing prices from historical market data, deployed as an interactive dashboard for real-time prediction and trend analysis.',
    shortDescription:
      'An ML pipeline predicting Bitcoin prices — KNN Regression (RMSE ≈ 305) deployed as an interactive Streamlit dashboard.',
    features: [
      'Data preprocessing and feature selection for improved prediction reliability',
      'Trained and compared Linear Regression, Decision Tree, and KNN Regression models',
      'KNN Regression achieved the strongest performance (RMSE ≈ 305) vs. ≈ 440 for the baselines',
      'Interactive Streamlit dashboard with Plotly visualizations for live predictions',
    ],
    challenges:
      'Improving prediction reliability meant iterating across multiple regression models and evaluation metrics until KNN Regression consistently outperformed the Linear Regression and Decision Tree baselines.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Streamlit', 'Plotly'],
    github: '',
    demo: '',
  },
  {
    id: 'orderit',
    title: 'OrderIt — Online Food Delivery Platform',
    type: 'Personal Project',
    overview:
      'A full-stack food ordering and delivery platform built independently on the MERN stack, featuring AI-generated content and a complete checkout and payment flow.',
    shortDescription:
      'A full-stack MERN food delivery platform with Groq AI-generated content and end-to-end Stripe checkout.',
    features: [
      'Groq AI integration to auto-generate food item descriptions and analyze customer reviews',
      'End-to-end checkout, payment processing, and order confirmation via Stripe',
      'MongoDB data layer with a React, Node.js, and Express.js client-server architecture',
    ],
    challenges:
      'Designing a client-server architecture from scratch and wiring together three external integrations — Groq AI for content generation and Stripe for payments — into a single, coherent ordering flow.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Groq AI', 'Stripe'],
    github: '',
    demo: '',
  },
];

export const experience = [
  {
    id: 'webstack-academy',
    role: 'MERN Stack Development Intern',
    org: 'Webstack Academy (WSA), Bangalore',
    period: 'Jun 2026 (4 weeks)',
    points: [
      'Selected for a competitive, cohort-based MERN Stack Development internship (Cohort WMSI26_007), an initiative to build foundational skills in Full Stack Web Development.',
      'Completed structured, hands-on modules covering MongoDB, Express.js, React, and Node.js through weekly assignments and quizzes.',
      'Maintained consistent attendance and on-time project report submissions as part of the internship evaluation process, successfully clearing the program requirements.',
    ],
  },
];

export const education = [
  {
    id: 'dbit',
    school: 'Don Bosco Institute of Technology, Bengaluru',
    degree: 'B.E. Information Science and Engineering',
    period: '2023 – 2027',
    detail: 'CGPA: 9.38',
  },
  {
    id: 'mes-pu',
    school: 'MES PU College, Bengaluru',
    degree: 'Class XII',
    period: '2023',
    detail: 'Percentage: 92.6%',
  },
  {
    id: 'ravi-english',
    school: 'Ravi English School, Bengaluru',
    degree: 'Class X',
    period: '2021',
    detail: 'Percentage: 83.36%',
  },
];

export const achievements = [
  {
    id: 'sih',
    title: 'Smart India Hackathon (SIH) Participant',
    description: 'Participated in Smart India Hackathon, a national-level initiative to solve real-world problems through technology.',
    icon: 'FiAward',
  },
  {
    id: 'hackerrank-silver',
    title: 'HackerRank Silver Badge — Python',
    description: 'Earned the Silver Badge in Python on HackerRank, reflecting strong problem-solving fundamentals.',
    icon: 'FiStar',
  },
];

export const certifications = [
  {
    id: 'python-basic',
    name: 'Python (Basic)',
    org: 'HackerRank',
    icon: 'FiCode',
  },
  {
    id: 'python-ds',
    name: 'Python for Data Science',
    org: 'Infosys Springboard',
    icon: 'FiBarChart2',
  },
  {
    id: 'intro-ai',
    name: 'Introduction to Artificial Intelligence',
    org: 'Simplilearn',
    icon: 'FiCpu',
  },
  {
    id: 'software-eng',
    name: 'Software Engineering',
    org: 'NPTEL',
    icon: 'FiBriefcase',
  },
  {
    id: 'cloud-foundations',
    name: 'Cloud Foundations',
    org: 'Great Learning',
    icon: 'FiCloud',
  },
];

export const coursework = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Database Management Systems (DBMS)',
  'Computer Networks',
  'Object-Oriented Programming (OOP)',
  'Machine Learning',
  'Web Development',
];

export const additionalInfo = {
  languages: ['English', 'Kannada'],
  interests: ['Machine Learning', 'Artificial Intelligence', 'Software Development'],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
