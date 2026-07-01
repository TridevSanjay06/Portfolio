'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Star, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/projects';

const stackColors: Record<string, string> = {
  TypeScript: '#3178C6',
  Python: '#3776AB',
  FastAPI: '#009688',
  'Next.js': '#000000',
  'Next.js 14': '#000000',
  'Rainforest API': '#CF4500',
  'NVIDIA NIM': '#76B900',
  'Llama 3.1 70B': '#9A3A0A',
  LLMs: '#9A3A0A',
  'Prompt Engineering': '#CF4500',
  Docker: '#2496ED',
  'Node.js': '#339933',
  'Express.js': '#404040',
  SQLite: '#003B57',
  Nodemailer: '#9A3A0A',
  'Gmail SMTP': '#D93025',
  Helmet: '#d53a44',
  'HTML/CSS/JS': '#E34F26',
  Render: '#46E3B7',
  React: '#61DAFB',
  'Tailwind CSS': '#06B6D4',
  'Framer Motion': '#BB4B96',
  'HTML5 Canvas API': '#E34F26',
  'Scikit-learn': '#F7931E',
  TensorFlow: '#FF6F00',
};

function getTagColor(tag: string) {
  return stackColors[tag] || '#9A3A0A';
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Ghost watermark */}
      <div className="absolute top-0 left-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="ghost-text text-[14vw] font-black leading-none" style={{ opacity: 0.2 }}>
          WORK
        </span>
      </div>

      {/* Orbital arc */}
      <svg
        className="absolute bottom-0 right-0 w-full h-32 pointer-events-none opacity-30"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 0 0 Q 400 120 1200 20" className="orbital-line" strokeDasharray="6 10" />
      </svg>

      <div className="container-width relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="eyebrow mb-4 block">Selected Work</span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Projects that{' '}
            <span style={{ color: 'var(--accent)' }}>ship</span>
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              id={`project-${project.id}`}
              className={`relative flex flex-col rounded-stadium border transition-all duration-300 ${
                project.flagship
                  ? 'lg:col-span-2 lg:flex-row lg:items-stretch'
                  : ''
              }`}
              style={{
                background: 'var(--card-bg)',
                borderColor: project.flagship ? 'rgba(207,69,0,0.45)' : 'var(--border)',
                boxShadow: project.flagship
                  ? '0 24px 48px rgba(0,0,0,0.08)'
                  : '0 8px 32px rgba(0,0,0,0.06)',
              }}
            >
              {/* Flagship left accent bar */}
              {project.flagship && (
                <div
                  className="absolute left-0 top-6 bottom-6 w-1 rounded-full"
                  style={{ background: 'var(--accent-light)' }}
                />
              )}

              {/* Card content */}
              <div className={`flex flex-col flex-1 p-8 lg:p-10 ${project.flagship ? 'lg:pl-12' : ''}`}>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    {project.flagship && (
                      <div className="flex items-center gap-2 mb-2">
                        <Star size={14} style={{ color: 'var(--accent)' }} fill="currentColor" />
                        <span className="eyebrow text-[11px]" style={{ color: 'var(--accent)' }}>
                          Flagship Project
                        </span>
                      </div>
                    )}
                    <h3
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
                    >
                      {project.name}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {project.tagline}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`project-${project.id}-github`}
                        className="p-2.5 rounded-full border transition-all hover:scale-110 hover:border-accent"
                        style={{
                          borderColor: 'var(--border)',
                          color: 'var(--text-primary)',
                          background: 'var(--bg)',
                        }}
                        aria-label={`${project.name} GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-${project.id}-live`}
                      className="p-2.5 rounded-full transition-all hover:scale-110"
                      style={{
                        background: 'var(--accent)',
                        color: '#fff',
                      }}
                      aria-label={`${project.name} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Description bullets */}
                <ul className={`space-y-3 mb-8 flex-1 ${project.flagship ? 'lg:grid lg:grid-cols-1 lg:gap-3 lg:space-y-0' : ''}`}>
                  {project.description.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--accent-light)' }}
                      />
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-pill text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: `${getTagColor(tag)}18`,
                        color: getTagColor(tag),
                        border: `1px solid ${getTagColor(tag)}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flagship right panel — decorative */}
              {project.flagship && (
                <div
                  className="hidden lg:flex flex-col items-center justify-center p-10 rounded-r-stadium min-w-[260px]"
                  style={{
                    background: 'var(--bg)',
                    borderLeft: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
                    style={{
                      background: 'var(--ink)',
                      color: 'var(--canvas)',
                      boxShadow: '0 24px 48px rgba(0,0,0,0.08)',
                    }}
                  >
                    <span className="text-xl font-bold">AI</span>
                  </div>
                  <span
                    className="text-sm font-semibold text-center"
                    style={{ color: 'var(--accent)', letterSpacing: '-0.01em' }}
                  >
                    Amazon Intelligence
                  </span>
                  <span className="text-xs text-center mt-1" style={{ color: 'var(--text-secondary)' }}>
                    URL analysis - Competitors - Insights
                  </span>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 px-5 py-2.5 rounded-pill text-sm font-semibold transition-all hover:scale-105"
                    style={{ background: 'var(--accent)', color: '#fff' }}
                  >
                    Live Demo →
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/TridevSanjay06"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-all"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-pill border font-medium text-sm transition-all hover:border-accent hover:text-accent"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <Github size={16} />
            View all projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
