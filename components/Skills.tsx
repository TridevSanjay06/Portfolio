'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillGroups } from '@/data/skills';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-lifted)' }}
    >
      {/* Ghost watermark */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="ghost-text text-[14vw] font-black leading-none" style={{ opacity: 0.2 }}>
          SKILLS
        </span>
      </div>

      {/* Decorative top arc */}
      <svg
        className="absolute top-0 left-0 w-full h-20 pointer-events-none"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 0 0 Q 600 80 1200 0" className="orbital-line" strokeDasharray="5 9" strokeOpacity="0.3" />
      </svg>

      <div className="container-width relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="eyebrow mb-4 block">Technical Expertise</span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Skills &amp;{' '}
            <span style={{ color: 'var(--accent)' }}>Technologies</span>
          </h2>
        </motion.div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-stadium border flex flex-col gap-4 transition-all duration-300"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {group.icon}
                </div>
                <span className="eyebrow text-[11px]">{group.category}</span>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.08 + j * 0.04 + 0.2, duration: 0.4 }}
                    className="skill-badge px-3 py-1.5 rounded-pill text-xs font-semibold border"
                    style={{
                      background: 'var(--bg)',
                      color: 'var(--text-primary)',
                      borderColor: 'var(--border)',
                    }}
                    id={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '3+', label: 'Shipped Projects' },
            { value: '8+', label: 'Tech Categories' },
            { value: '30+', label: 'Technologies' },
            { value: '2025', label: 'HPE Internship' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-6 px-4 rounded-stadium border"
              style={{ borderColor: 'var(--border)', background: 'var(--card-bg)' }}
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: 'var(--accent)', letterSpacing: '-0.03em', fontFamily: 'Sofia Sans, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium" style={{ color: 'var(--text-secondary)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
