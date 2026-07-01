export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string[];
  stack: string[];
  github?: string;
  live: string;
  flagship?: boolean;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: 'pixii-engine',
    name: 'Pixii Engine',
    tagline: 'AI-powered Amazon intelligence engine',
    description: [
      'Analyzes live Amazon product URLs and produces a competitive breakdown in seconds for product positioning, market context, and listing intelligence',
      'Combines Rainforest API product data with NVIDIA NIM and Llama 3.1 70B for structured AI-generated insights',
      'Includes a live URL workflow and sample data mode so users can evaluate products quickly without setup friction',
    ],
    stack: ['TypeScript', 'Next.js', 'Rainforest API', 'NVIDIA NIM', 'Llama 3.1 70B', 'LLMs', 'Prompt Engineering'],
    live: 'https://pixxi-engine.vercel.app/',
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
