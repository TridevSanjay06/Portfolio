export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'AI / ML',
    icon: 'AI',
    skills: ['TensorFlow', 'Scikit-learn', 'Computer Vision', 'NLP', 'XAI', 'CNNs'],
  },
  {
    category: 'Generative AI',
    icon: 'LLM',
    skills: ['LLMs', 'Prompt Engineering', 'RAG', 'AI Agents', 'NVIDIA NIM'],
  },
  {
    category: 'Backend',
    icon: 'API',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Frontend',
    icon: 'UI',
    skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    category: 'Languages',
    icon: 'DEV',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  },
  {
    category: 'Databases',
    icon: 'DB',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  },
  {
    category: 'Tools & DevOps',
    icon: 'OPS',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Google Cloud', 'Vercel', 'Render'],
  },
  {
    category: 'CS Fundamentals',
    icon: 'CS',
    skills: ['DSA', 'OOP', 'DBMS', 'OS'],
  },
];
