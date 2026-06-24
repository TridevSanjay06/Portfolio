'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const typedWords = [
  'full-stack products',
  'AI-assisted workflows',
  'LLM integrations',
  'reliable backend systems',
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = typedWords[wordIdx];
    let timeout: NodeJS.Timeout;

    if (typing && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 58);
    } else if (typing) {
      timeout = setTimeout(() => setTyping(false), 1700);
    } else if (displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 26);
    } else {
      setWordIdx((i) => (i + 1) % typedWords.length);
      setTyping(true);
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIdx]);

  const scrollToProjects = useCallback(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11, delayChildren: 0.26 } },
  };

  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="absolute inset-x-0 top-24 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="ghost-text block translate-x-[-4vw] text-[18vw] leading-none md:text-[14vw]">
          SANJAY
        </span>
      </div>

      <svg className="absolute left-0 top-[18%] h-56 w-full pointer-events-none" viewBox="0 0 1200 220" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M -40 164 C 260 28 470 22 690 112 S 1000 212 1260 70"
          className="orbital-line"
          strokeDasharray="7 12"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.62 }}
          transition={{ duration: 1.8, delay: 0.55, ease: 'easeInOut' }}
        />
      </svg>

      <div className="container-width relative z-10 pt-28 md:pt-32">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl">
          <motion.span variants={item} className="eyebrow mb-7">
            Available for opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="max-w-5xl text-5xl font-medium md:text-7xl lg:text-[88px]"
            style={{ letterSpacing: '-0.03em', lineHeight: 0.98 }}
          >
            Kancharla Tridev Sanjay builds practical AI products with calm, full-stack engineering.
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-8 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:items-end"
          >
            <div>
              <p className="max-w-2xl text-xl font-medium md:text-2xl" style={{ color: 'var(--text-secondary)', letterSpacing: '-0.01em' }}>
                AI Engineer and Full-Stack Developer focused on React, Python, FastAPI, LLMs, and computer vision.
              </p>
              <div className="mt-5 min-h-10 text-2xl font-medium md:text-3xl" style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                I build <span className="typing-cursor" style={{ color: 'var(--accent)' }}>{displayed}</span>
              </div>
            </div>

            <motion.div
              variants={item}
              className="rounded-[40px] border p-6"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--border)', boxShadow: '0px 24px 48px rgba(0,0,0,0.08)' }}
            >
              <div className="eyebrow mb-4">Current focus</div>
              <div className="flex flex-wrap gap-2">
                {['LLMs', 'Computer Vision', 'React', 'Python', 'FastAPI'].map((tag) => (
                  <span key={tag} className="rounded-pill border px-4 py-2 text-sm font-medium" style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <button id="hero-view-projects" onClick={scrollToProjects} className="ink-button flex items-center gap-2 px-7 py-3 text-base font-semibold">
              View Projects
              <ArrowDown size={16} />
            </button>
            <a id="hero-download-resume" href="/resume.pdf" download className="outline-button flex items-center gap-2 px-7 py-3 text-base font-semibold">
              <Download size={16} />
              Resume
            </a>
            <button id="hero-contact" onClick={scrollToContact} className="outline-button flex items-center gap-2 px-7 py-3 text-base font-semibold">
              <Mail size={16} />
              Contact
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            {[
              { href: 'https://github.com/TridevSanjay06', label: 'GitHub', icon: Github, id: 'hero-github' },
              { href: 'https://www.linkedin.com/in/sanjay-kancharla-bb3311263/', label: 'LinkedIn', icon: Linkedin, id: 'hero-linkedin' },
              { href: 'mailto:tridevsanjay06@gmail.com', label: 'Email', icon: Mail, id: 'hero-email' },
            ].map(({ href, label, icon: Icon, id }) => (
              <a
                key={id}
                id={id}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-2 rounded-pill px-1 py-2 text-sm font-medium transition-colors hover:text-accent"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs font-bold uppercase" style={{ color: 'var(--muted)', letterSpacing: '0.08em' }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <ArrowDown size={16} style={{ color: 'var(--accent-light)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
