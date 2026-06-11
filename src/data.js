export const skills = {
  Languages:    ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  Frameworks:   ['Flask', 'React', 'Pandas'],
  Technologies: ['Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Cypress', 'Git', 'REST APIs'],
};

export const experience = [
  {
    company: 'Eikon Therapeutics',
    role: 'Software Engineer II',
    period: 'Mar 2025 – Jul 2025',
    bullets: [
      'Built an internal animated content tool and interactive preview app that cut GIF creation time by 70% — adopted by all teams with 120 monthly assets created.',
      'Designed and co-led a 24/7 monitoring dashboard that achieved 99.95% uptime and lowered mean time to resolution by 40%.',
      'Optimized Docker-based deployment workflows, reducing deploy time by 20% and rollback rate by 50%.',
      'Delivered the back end for an ML labeling tool with 6 new API endpoints, supporting ~2,000 images/day with annotation throughput up 60%.',
    ],
  },
  {
    company: 'Eikon Therapeutics',
    role: 'Software Engineer I',
    period: 'Nov 2022 – Mar 2025',
    bullets: [
      'Implemented secure SSO for internal apps with HTTPS and Microsoft Entra/MSAL across dev, alpha, and production environments.',
      'Optimized a real-time data monitor with server-side caching, reducing API volume by ~50% and cutting initial load from ~8s to ~3s.',
      'Built and maintained Cypress end-to-end tests, growing coverage from 0% to ~70% and reducing QA-found regressions by 35%.',
      'Engineered configurable tables, saved views, and SQL full-text search in a React visualization app — reducing key dataset lookup time from ~45s to ~10s.',
    ],
  },
  {
    company: 'Kingston Technology',
    role: 'Programming Analyst',
    period: 'Jul 2021 – Oct 2022',
    bullets: [
      'Partnered with manager to resolve 8–12 bugs per sprint at ~90% first-fix pass rate; regression tests reduced repeat incidents by 25%.',
      'Led full lifecycle development of an internal web app that tracked and expedited malfunction escalations.',
      'Replatformed 3 Lotus Notes apps to a single web stack, lowering maintenance effort by ~20% and removing Notes license dependencies.',
    ],
  },
];

export const projects = [
  {
    title: 'Derm Chart',
    href: 'https://kerry-charting.vercel.app/',
    image: '/charting_app.png',
    alt: 'Derm Chart app',
    bullets: [
      'AI-powered clinical documentation assistant for dermatology that formats free-text provider notes into structured output using LLM tooling.',
      'Features dot phrase shortcuts for common terms and strict PHI de-identification guardrails to protect patient privacy.',
    ],
  },
  {
    title: 'Job CRM',
    href: 'https://vincent1-crm.vercel.app/',
    image: '/job_crm.png',
    alt: 'Job CRM app',
    bullets: [
      'Full-stack recruitment management platform that tracks job applications through a visual pipeline from Saved to Offer.',
      'Includes company and contact management, follow-up scheduling, and a real-time activity dashboard.',
    ],
  },
];
