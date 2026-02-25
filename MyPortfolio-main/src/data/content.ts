const ASSET_VERSION = 1;

export const personalData = {
  name: "Puneeth Kakimari",
  tagline: "AI & Backend Developer building intelligent systems with LLMs, NLP, and scalable web technologies.",
  bio: "AI-focused Computer Science student with hands-on experience building real-time AI applications, multilingual NLP systems, and scalable backend platforms using Python, Django, FastAPI, and LLM integrations.",
  bioExtended: "Developed intelligent systems including an AI-powered Code Reviewer, Real-Time Yoga Pose Detection Assistant, and a Multilingual Video Translation platform. Passionate about applied AI, backend engineering, and building scalable developer-focused solutions.",
  projectsIntro: "Selected projects below demonstrate applied AI, backend engineering, and real-world problem solving.",
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
  icon?: string;
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Artificial Intelligence & Machine Learning",
    skills: [
      { name: "LLM Integration", level: 85 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Machine Learning", level: 80 },
      { name: "Natural Language Processing", level: 75 },
      { name: "Computer Vision", level: 75 },
      { name: "TensorFlow", level: 65 },
      { name: "MediaPipe", level: 65 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Django", level: 75 },
      { name: "FastAPI", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "JWT Authentication", level: 80 },
      { name: "Spring Boot", level: 60 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 60 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 75 },
      { name: "SQLite", level: 70 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 65 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Unity", level: 65 },
    ],
  },
]

export type Certification = {
  title: string;
  issuer: string;
  category: string;
  date?: string;
  image: string;
  certificateLink: string;
};

export const certifications: Certification[] = [
  {
    title: "AI-900 Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    category: "Artificial Intelligence",
    image: `/assets/AZURE.png?v=${ASSET_VERSION}`,
    certificateLink: "https://drive.google.com/file/d/11OBvu_vWqtzOm-0NakX5v0sEMR2e5kW0/view?usp=sharing", // Add your certificate link here
  },
  {
    title: "Prompt Engineering Certificate",
    issuer: "Udemy",
    category: "Artificial Intelligence",
    image: `/assets/prompt.png?v=${ASSET_VERSION}`,
    certificateLink: "https://drive.google.com/file/d/14pLGpDZOlRKqWcqAWKNXziMugwsHJpMU/view", // Add your certificate link here
  },
  {
    title: "Oracle Databases for Developers Foundations",
    issuer: "Oracle",
    category: "Backend Development",
    image: `/assets/oracle.png?v=${ASSET_VERSION}`,
    certificateLink: "https://drive.google.com/file/d/1uhLn6F8UVevLOGpY1j0AinVsTUJ47NEp/view", // Add your certificate link here
  },
  {
    title: "JPMorgan Software Engineering Job Simulation",
    issuer: "Forage",
    category: "Software Engineering",
    image: `/assets/jpmorgon.png?v=${ASSET_VERSION}`,
    certificateLink: "https://drive.google.com/file/d/1231C2dtqN2q3ndwM0IhCHuqVIxRwg1mI/view", // Add your certificate link here
  },
  {
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn Learning",
    category: "Data Analysis",
    image: `/assets/microsoft.png?v=${ASSET_VERSION}`,
    certificateLink: "https://drive.google.com/file/d/14AyTX80fC3g0t_QrHXb3fb0e0ixG-lfN/view", // Add your certificate link here
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  image: string;
  image_alt: string;
};

export const projects: Project[] = [
  {
  title: "CodeInsight AI - Intelligent Code Review System",
  description: "Developed an AI-powered code review web application using Django integrated with a local LLM (Ollama CodeLlama) to analyze code, detect bugs, security issues, and optimization opportunities. The system supports multilingual code review, structured feedback generation, review history tracking, and a modern developer-focused UI.",
  stack: ["Django", "Python", "Ollama", "CodeLlama", "HTML", "CSS", "JavaScript"],
  image: `/assets/project-7.png?v=${ASSET_VERSION}`,
  image_alt: "AI Code Reviewer Platform",
},
{
    title: "Real Time Yoga Assistant",
    description: "Developed a real-time AI-powered yoga pose detection and analysis system using computer vision techniques to monitor posture and provide corrective feedback through a responsive web interface.",
    stack: ["FastAPI", "Python","Media pipe", "OpenCV","Html", "Css"],
    github: "https://github.com/Puneeth2004/YogaAssistant",
    image: `/assets/project-2.png?v=${ASSET_VERSION}`,
    image_alt: "Real Time Yoga Assistant",
  },
  {
    title: " Multilingual Video Translation System",
    description: "Built an AI-driven multilingual video translation platform that extracts speech from videos, transcribes content, translates it into multiple Indian languages, and provides optional audio playback.",
    stack: ["Python", "Streamlit", "OpenAI", "Whisper", "FFMPEG", "gTTs", "Deep Translator"],
    github: "https://github.com/Puneeth2004/Videotranslator.git",
    image: `/assets/project-4.png?v=${ASSET_VERSION}`,
    image_alt: "Multilingual Video Translation System",
  },
  {
    title: "AR Application",
    description: "Developed an Augmented Reality (AR) application using Vuforia to assist individuals with intellectual disabilities in learning daily living skills through interactive image tracking and contextual video guidance..",
    stack: [ "Augmented Reality", "C#", "AR Foundation", "Vuforia SDK", "Unity", "Image Tracking"],
    demo: "https://drive.google.com/file/d/1OKo62f87hPee1w-d4X-4QaIgDNzFE86k/view?usp=sharing",
    image: `/assets/project-1.png?v=${ASSET_VERSION}`,
    image_alt: "AR application",
  },
  
  {
    title: "Portfolio Website",
    description: "My personal portfolio website (the one you're looking at now!) built with Next.js and styled with Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: `/assets/project-3.png?v=${ASSET_VERSION}`,
    image_alt: "portfolio website",
  },
  
  {
    title: "AI powered Placement Assistant",
    description: "Built an AI-driven mock interview and career guidance platform using advanced prompt engineering to simulate realistic interview questions, provide structured feedback, and assist freshers in career preparation.",
    stack: ["LLM Prompt Engineering", "React", "MongoDB","Typescript", "CSS", "Genkit", "Firebase"],
    image: `/assets/project-6.png?v=${ASSET_VERSION}`,
    image_alt: "AI powered Placement Assistant",
  },
  
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Intern",
    company: "Virtusa.",
    period: "2025 - Present",
    description: "Contributed to backend/API development, debugging, and performance optimization in collaborative Agile teams.",
  },
  {
    role: "Intern",
    company: "Tech Sakhshyam - a Colloborative with Microsoft",
    period: "2024 December - 2025 January",
    description: "Developed a human pose detection project using media pipe and Open CV.  Learnt development and deployoning the web pages using python as backend.",
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

export const education: Education[] = [
    {
    degree: "Integrated M.Tech Computer Science",
    institution: "Vellore Institue of Technology",
    period: "2021 - till now",
    description: "Studying M.Tech Integrated with cgpa of 8.41 out of ten.",
  },
  {
    degree: "Intermediate",
    institution: "Narayana Junior Collge",
    period: "2019 - 2021",
    description: "Completed Intermediate by scoring 954 out of thousand.",
  },
  {
    degree: "Secondory School Eduaction",
    institution: "LRG Vidyalayam",
    period: "2014 - 2019",
    description: "Completed Secondory School Certificate with the CGPA of 9.7 out of ten.",
  },
];
