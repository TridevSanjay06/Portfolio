# Kancharla Tridev Sanjay — Portfolio

A modern, premium portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

🌐 **Live**: [sanjay-portfolio.vercel.app](https://sanjay-portfolio.vercel.app)

---

## ✨ Features

- **Dark/Light Mode** — Smooth theme switching with `next-themes`
- **Animated UI** — Scroll-triggered animations and micro-interactions via Framer Motion
- **Typing Effect** — Animated hero typing effect cycling through tech keywords
- **Contact Form** — Functional contact form powered by Formspree
- **Responsive** — Mobile-first layout with a floating pill navbar
- **SEO Ready** — Open Graph tags, Twitter Card metadata, sitemap, robots.txt
- **Security Headers** — X-Frame-Options, X-Content-Type-Options, XSS-Protection via Next.js config

---

## 🗂️ Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, typing animation, CTA buttons, social links |
| **About** | Bio, metrics (shipped projects, technologies), highlights |
| **Projects** | Featured work with stack tags, GitHub + live links |
| **Skills** | Categorized technical skills across 8 domains |
| **Experience** | Professional work history (HPE internship) |
| **Contact** | Email/LinkedIn/GitHub links + Formspree form |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS variables (warm cream / dark charcoal palette)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Form**: Formspree
- **Fonts**: Sofia Sans (Google Fonts)
- **Deployment**: Vercel

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata & ThemeProvider
│   ├── page.tsx         # Home page assembling all sections
│   └── globals.css      # CSS custom properties, base styles, utilities
├── components/
│   ├── Navbar.tsx       # Floating pill navbar with scroll tracking
│   ├── Hero.tsx         # Hero section with typing animation
│   ├── About.tsx        # About section with metrics
│   ├── Projects.tsx     # Project cards with stack tags
│   ├── Skills.tsx       # Skill groups grid
│   ├── Experience.tsx   # Timeline-style work history
│   ├── Contact.tsx      # Contact form + direct links
│   ├── Footer.tsx       # Footer with nav & social links
│   └── ThemeProvider.tsx# next-themes wrapper
├── data/
│   ├── projects.ts      # Project data (name, description, stack, links)
│   └── skills.ts        # Skill groups (category, icon, skills[])
└── public/
    ├── resume.pdf        # Downloadable resume
    ├── og-image.png      # Open Graph social card (1200×630)
    ├── robots.txt        # SEO crawl permissions
    └── sitemap.xml       # XML sitemap
```

---

## 📄 License

MIT — feel free to use as a reference or template.

---

*Built with ❤️ by Kancharla Tridev Sanjay*
