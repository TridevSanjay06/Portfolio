'use client';

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ background: 'var(--footer-bg)' }}
    >
      {/* Decorative top arc */}
      <svg
        className="absolute top-0 left-0 w-full h-16 pointer-events-none"
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0 64 Q 600 0 1200 64"
          stroke="#F3733840"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="container-width py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div
              className="text-3xl font-bold mb-3"
              style={{ color: 'var(--footer-text)', letterSpacing: '-0.03em', fontFamily: 'Sofia Sans, sans-serif' }}
            >
              <span style={{ color: 'var(--accent-light)' }}>K</span>TS
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#9B96C8' }}>
              AI Engineer &amp; Full-Stack Developer.
              <br />
              Building at the intersection of AI and engineering.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/TridevSanjay06', id: 'footer-github', label: 'GitHub' },
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/sanjay-kancharla-bb3311263/',
                  id: 'footer-linkedin',
                  label: 'LinkedIn',
                },
                { icon: Mail, href: 'mailto:tridevsanjay06@gmail.com', id: 'footer-email', label: 'Email' },
              ].map(({ icon: Icon, href, id, label }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(243,240,238,0.08)',
                    border: '1px solid rgba(243,240,238,0.18)',
                    color: '#FCFBFA',
                  }}
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav column */}
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: '#9B96C8', letterSpacing: '0.08em' }}
            >
              Navigation
            </div>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    id={`footer-nav-${link.label.toLowerCase()}`}
                    onClick={() => {
                      const el = document.getElementById(link.href.slice(1));
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm transition-colors hover:text-accent"
                    style={{ color: '#9B96C8' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects column */}
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: '#9B96C8', letterSpacing: '0.08em' }}
            >
              Projects
            </div>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'VideoForge AI', href: 'https://video-forge-ai-weld.vercel.app/', id: 'footer-videoforge' },
                {
                  label: 'Admission Portal',
                  href: 'https://admission-enrollment-portal.vercel.app/',
                  id: 'footer-admission',
                },
                { label: 'Image Compressor', href: 'https://image-compressor-jade.vercel.app/', id: 'footer-compressor' },
              ].map(({ label, href, id }) => (
                <li key={id}>
                  <a
                    id={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-accent flex items-center gap-1.5"
                    style={{ color: '#9B96C8' }}
                  >
                    {label}
                    <span style={{ fontSize: '10px' }}>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-8" style={{ background: 'rgba(243,240,238,0.18)' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#9B96C880' }}>
            © {new Date().getFullYear()} Kancharla Tridev Sanjay. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: '#9B96C880' }}>
              Built with Next.js · Tailwind · Framer Motion
            </span>
            <button
              id="footer-scroll-top"
              onClick={scrollTop}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: 'rgba(243,240,238,0.08)',
                border: '1px solid rgba(243,240,238,0.2)',
                color: '#FCFBFA',
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
