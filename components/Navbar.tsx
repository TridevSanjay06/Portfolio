'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import { Code2, Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function BrandMark() {
  return (
    <span
      className="flex h-7 w-7 items-center justify-center rounded-full border"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--accent)',
        color: 'var(--canvas)',
      }}
      aria-hidden="true"
    >
      <Code2 size={15} strokeWidth={2.4} />
    </span>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(link.href.slice(1));
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const scrollTo = useCallback((href: string) => {
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <>
      <motion.nav
        initial={{ y: -76, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 md:flex"
      >
        <div
          className="flex items-center gap-2 rounded-pill px-6 py-3 backdrop-blur-md transition-all duration-300"
          style={{
            background: 'var(--nav-bg)',
            boxShadow: scrolled
              ? '0 12px 34px rgba(0,0,0,0.10), 0 0 0 1px var(--border)'
              : '0 4px 24px rgba(0,0,0,0.04), 0 0 0 1px var(--border)',
          }}
        >
          <button
            id="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mr-5 flex h-10 items-center gap-2 rounded-pill px-2 text-sm font-bold transition-transform active:scale-95"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            <BrandMark />
            KTS
          </button>

          {navLinks.map((link) => {
            const active = activeSection === link.href.slice(1);
            return (
              <button
                key={link.label}
                id={`nav-${link.label.toLowerCase()}`}
                onClick={() => scrollTo(link.href)}
                className="relative rounded-pill px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5"
                style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute left-1/2 top-full mt-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                    style={{ background: 'var(--accent-light)' }}
                    transition={{ duration: 0.25 }}
                  />
                )}
              </button>
            );
          })}

          <div className="mx-2 h-5 w-px" style={{ background: 'var(--border)' }} />

          <a
            id="nav-github"
            href="https://github.com/TridevSanjay06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            style={{ color: 'var(--text-primary)' }}
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            id="nav-linkedin"
            href="https://www.linkedin.com/in/sanjay-kancharla-bb3311263/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            style={{ color: 'var(--text-primary)' }}
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>

          {mounted && (
            <button
              id="nav-theme-toggle"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all active:scale-95"
              style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -40, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 40, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>
          )}
        </div>
      </motion.nav>

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed left-4 right-4 top-4 z-50 flex items-center justify-between rounded-pill px-5 py-3 backdrop-blur-md md:hidden"
        style={{
          background: 'var(--nav-bg)',
          boxShadow: '0 8px 28px rgba(0,0,0,0.10), 0 0 0 1px var(--border)',
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-sm font-bold"
          style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
        >
          <BrandMark />
          KTS
        </button>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed left-4 right-4 top-20 z-40 overflow-hidden rounded-[32px] md:hidden"
            style={{
              background: 'var(--card-bg)',
              boxShadow: '0 24px 48px rgba(0,0,0,0.14), 0 0 0 1px var(--border)',
            }}
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                  onClick={() => scrollTo(link.href)}
                  className="rounded-pill px-5 py-3 text-left text-base font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
