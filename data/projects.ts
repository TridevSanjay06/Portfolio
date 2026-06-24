export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string[];
  stack: string[];
  github: string;
  live: string;
  flagship?: boolean;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: 'videoforge-ai',
    name: 'VideoForge AI',
    tagline: 'AI-powered video production asset generator',
    description: [
      'Converts product documents, release notes, and feature specs into production video planning assets: scripts, storyboards, voiceover copy, and GTM content',
      'Integrated NVIDIA NIM API with custom prompt engineering; FastAPI backend on Render, Next.js frontend on Vercel',
      'Monorepo architecture with separate frontend/backend, Docker support, and CI-ready setup scripts',
    ],
    stack: ['TypeScript', 'Python', 'FastAPI', 'Next.js', 'NVIDIA NIM', 'LLMs', 'Prompt Engineering', 'Docker'],
    github: 'https://github.com/TridevSanjay06/VideoForge-AI',
    live: 'https://video-forge-ai-weld.vercel.app/',
    flagship: true,
    accentColor: '#CF4500',
  },
  {
    id: 'admission-portal',
    name: 'Admission & Enrollment Portal',
    tagline: 'Secure full-stack school enrollment system',
    description: [
      'Full-stack admission management system with online enrollment forms, automated email confirmations, unique reference numbers, and an AI-powered chatbot assistant for admission queries',
      'Backend features rate limiting, XSS protection, Helmet security headers, SQL injection prevention via parameterized queries against SQLite',
      'Deployed on Render with Gmail SMTP integration; includes health monitoring, structured project architecture, and detailed server logging',
    ],
    stack: ['Node.js', 'Express.js', 'SQLite', 'Nodemailer', 'Gmail SMTP', 'Helmet', 'HTML/CSS/JS', 'Render'],
    github: 'https://github.com/TridevSanjay06/Admission-_Enrollment_Portal',
    live: 'https://admission-enrollment-portal.vercel.app/',
    flagship: false,
    accentColor: '#059669',
  },
  {
    id: 'image-compressor',
    name: 'Image Compressor',
    tagline: 'Privacy-first client-side image compression',
    description: [
      'Production-ready online image compressor with batch processing, multi-format support, and real-time before/after size preview',
      'Client-side only processing via HTML5 Canvas API; images never leave the user device, preserving a privacy-first architecture',
      'Mobile-first responsive design on Vercel with GitHub Actions CI/CD pipeline',
    ],
    stack: ['TypeScript', 'Next.js 14', 'React', 'Tailwind CSS', 'Framer Motion', 'HTML5 Canvas API'],
    github: 'https://github.com/TridevSanjay06/Image-compressor',
    live: 'https://image-compressor-jade.vercel.app/',
    flagship: false,
    accentColor: '#D97706',
  },
];
