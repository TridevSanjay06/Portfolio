'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'B.Tech in AI & ML', sub: 'Vel Tech, Chennai - 2026' },
  { icon: Briefcase, label: 'Backend Developer Intern', sub: 'Hewlett Packard Enterprise - 2025' },
  { icon: MapPin, label: 'Open to Work', sub: 'Full-Stack & AI Engineering Roles' },
];

const metrics = [
  { value: '3+', label: 'Shipped projects' },
  { value: '30+', label: 'Technologies' },
  { value: '2025', label: 'HPE internship' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-lifted)' }}>
      <div className="absolute right-0 top-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="ghost-text text-[15vw] leading-none">ABOUT</span>
      </div>

      <svg className="absolute left-0 top-20 h-28 w-full pointer-events-none" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M -20 84 C 290 20 610 8 1220 78" className="orbital-line" strokeDasharray="6 11" />
      </svg>

      <div className="container-width relative z-10" ref={ref}>
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <motion.span variants={item} className="eyebrow mb-5">
              About Me
            </motion.span>

            <motion.h2 variants={item} className="max-w-2xl text-4xl font-medium md:text-5xl">
              Building at the intersection of AI systems and product engineering
            </motion.h2>

            <motion.div variants={item} className="mt-8 space-y-5 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                I am a B.Tech graduate in AI & Machine Learning from Vel Tech, Chennai. I build full-stack applications with AI capabilities: React and Python/FastAPI on the surface, LLMs and ML models underneath.
              </p>
              <p>
                I interned at <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Hewlett Packard Enterprise</span> as a Backend Developer, shipped <span className="font-semibold" style={{ color: 'var(--accent)' }}>Pixii Engine</span>, and built CNN systems for medical image analysis.
              </p>
              <p>
                I am currently open to <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Full-Stack and AI Engineering roles</span> where I can own features end-to-end and ship useful, durable products.
              </p>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative">
            <div className="rounded-[40px] border p-6 md:p-8" style={{ background: 'var(--card-bg)', borderColor: 'var(--border)', boxShadow: '0px 24px 48px rgba(0,0,0,0.08)' }}>
              <div className="grid grid-cols-3 gap-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[28px] border p-4 text-center" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                    <div className="text-3xl font-medium md:text-4xl" style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
                      {metric.value}
                    </div>
                    <div className="mt-2 text-[11px] font-bold uppercase leading-tight" style={{ color: 'var(--muted)', letterSpacing: '0.04em' }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {highlights.map(({ icon: Icon, label, sub }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 rounded-pill border p-4"
                    style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full" style={{ background: 'var(--ink)', color: 'var(--canvas)' }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                        {label}
                      </div>
                      <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {sub}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
