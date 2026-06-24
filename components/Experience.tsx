'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 'hpe',
    company: 'Hewlett Packard Enterprise',
    shortName: 'HPE',
    role: 'Backend Developer Intern',
    period: '2025',
    duration: 'Internship',
    bullets: [
      'Developed backend services and REST APIs for enterprise applications, collaborating with cross-functional teams',
      'Worked with databases, third-party integrations, and scalable backend architecture patterns',
      'Collaborated via Git, Agile/Scrum workflows, debugging, testing, and production deployment processes',
    ],
    tags: ['REST APIs', 'Backend Services', 'Databases', 'Git', 'Agile'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="ghost-text text-[10vw] leading-none">EXPERIENCE</span>
      </div>

      <svg className="absolute right-0 top-0 h-40 w-1/2 pointer-events-none" viewBox="0 0 600 160" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 600 0 Q 300 160 0 80" className="orbital-line" strokeDasharray="6 10" />
      </svg>

      <div className="container-width relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <span className="eyebrow mb-4">Work History</span>
          <h2 className="text-4xl font-medium md:text-5xl">Professional Experience</h2>
        </motion.div>

        <div className="relative max-w-3xl">
          <div className="absolute bottom-10 left-6 top-10 hidden w-px sm:block" style={{ background: 'var(--accent-light)', opacity: 0.5 }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              id={`experience-${exp.id}`}
              initial={{ opacity: 0, x: -36 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-8 sm:pl-20"
            >
              <div
                className="absolute left-0 top-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full text-xs font-bold sm:flex"
                style={{ background: 'var(--card-bg)', border: '2px solid rgba(0,150,214,0.45)', color: 'var(--text-primary)' }}
              >
                {exp.shortName}
              </div>

              <div className="rounded-[40px] border p-8 transition-all duration-300" style={{ background: 'var(--card-bg)', borderColor: 'var(--border)', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Building2 size={14} style={{ color: 'var(--accent-light)' }} />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium md:text-2xl">{exp.role}</h3>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} style={{ color: 'var(--accent-light)' }} />
                      <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                        {exp.period}
                      </span>
                    </div>
                    <span className="rounded-pill px-3 py-1 text-xs font-semibold" style={{ background: 'rgba(207,69,0,0.10)', color: 'var(--accent)', border: '1px solid rgba(207,69,0,0.22)' }}>
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="mb-6 space-y-3">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <ChevronRight size={15} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-light)' }} />
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="rounded-pill border px-3 py-1 text-xs font-semibold" style={{ background: 'var(--bg)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.6 }} className="mt-4 sm:pl-20">
            <div className="rounded-pill border border-dashed px-6 py-4 text-sm font-medium" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
              More experiences to come - just getting started.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
