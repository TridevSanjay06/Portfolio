'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    try {
      const res = await fetch('https://formspree.io/f/xpwdvzpz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFormState('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-lifted)' }}
    >
      {/* Ghost watermark */}
      <div className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="ghost-text text-[14vw] font-black leading-none" style={{ opacity: 0.2 }}>
          HELLO
        </span>
      </div>

      {/* Decorative arc */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
        viewBox="0 0 1200 96"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 0 96 Q 600 0 1200 96" className="orbital-line" strokeDasharray="5 8" strokeOpacity="0.35" />
      </svg>

      <div className="container-width relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow mb-4 block justify-center">Get in Touch</span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Let&apos;s build something{' '}
            <span style={{ color: 'var(--accent)' }}>together</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Open to Full-Stack and AI Engineering roles. Let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Left — direct contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <p className="text-base font-medium mb-2" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Reach out directly via email or connect on LinkedIn and GitHub.
              I typically respond within 24 hours.
            </p>

            {[
              {
                icon: Mail,
                label: 'Email Me',
                value: 'tridevsanjay06@gmail.com',
                href: 'mailto:tridevsanjay06@gmail.com',
                id: 'contact-email-btn',
              },
              {
                icon: Linkedin,
                label: 'LinkedIn',
                value: 'sanjay-kancharla-bb3311263',
                href: 'https://www.linkedin.com/in/sanjay-kancharla-bb3311263/',
                id: 'contact-linkedin-btn',
              },
              {
                icon: Github,
                label: 'GitHub',
                value: 'TridevSanjay06',
                href: 'https://github.com/TridevSanjay06',
                id: 'contact-github-btn',
              },
            ].map(({ icon: Icon, label, value, href, id }) => (
              <a
                key={id}
                id={id}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-4 p-5 rounded-stadium border group transition-all duration-300 hover:-translate-y-1 hover:border-accent"
                style={{
                  background: 'var(--card-bg)',
                  borderColor: 'var(--border)',
                  textDecoration: 'none',
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent"
                  style={{ background: 'rgba(207,69,0,0.10)' }}
                >
                  <Icon size={20} style={{ color: 'var(--accent)' }} className="group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {label}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                    {value}
                  </div>
                </div>
                <span className="ml-auto text-lg opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent)' }}>
                  →
                </span>
              </a>
            ))}
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              id="contact-form"
              className="p-8 rounded-stadium border flex flex-col gap-5"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--border)' }}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-pill text-sm border outline-none transition-all focus:border-accent"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email-input"
                  className="block text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Email
                </label>
                <input
                  id="contact-email-input"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-pill text-sm border outline-none transition-all focus:border-accent"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or project..."
                  className="w-full px-4 py-3 rounded-[20px] text-sm border outline-none transition-all focus:border-accent resize-none"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                disabled={formState === 'sending' || formState === 'success'}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-pill font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: formState === 'success' ? '#059669' : 'var(--accent)',
                  color: '#fff',
                  letterSpacing: '-0.01em',
                  boxShadow: '0 18px 34px rgba(0,0,0,0.12)',
                }}
              >
                {formState === 'sending' && <Loader2 size={16} className="animate-spin" />}
                {formState === 'success' && <CheckCircle size={16} />}
                {formState === 'error' && <AlertCircle size={16} />}
                {formState === 'idle' && <Send size={16} />}
                {formState === 'sending'
                  ? 'Sending...'
                  : formState === 'success'
                  ? 'Message Sent!'
                  : formState === 'error'
                  ? 'Try Again'
                  : 'Send Message'}
              </button>

              {formState === 'error' && (
                <p className="text-xs text-center" style={{ color: '#EF4444' }}>
                  Something went wrong. Please email me directly at tridevsanjay06@gmail.com
                </p>
              )}

              <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>
                Powered by Formspree · No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
