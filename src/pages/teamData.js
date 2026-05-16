/* ── Avatar colours ──────────────────────────────────────────────── */


/* Just add new entries by copying and pasting under the same subsection and filling details */

export const AVATAR_COLORS = [
  'bg-indigo-700', 'bg-rose-700', 'bg-amber-700', 'bg-green-700',
  'bg-cyan-700',   'bg-purple-700', 'bg-pink-700', 'bg-orange-700',
  'bg-blue-700',   'bg-teal-700',
]

/* ── Team data ────────────────────────────────────────────────────
   Each person can have any combination of optional fields:
     link     – URL to their personal/profile page (makes card clickable)
     email    – shows mail icon + mailto link
     scholar  – Google Scholar profile URL
     linkedin – LinkedIn profile URL
     cv       – CV / resume URL
   ──────────────────────────────────────────────────────────────── */


 /* if you want to add more faculty members, copy-paste the below object and fill in the details.*/  

export const FACULTY = [
  {
    name:     'Prof. Yama Dixit',
    role:     'Principal Investigator',
    degree:   'Ph.D., IISc Bangalore',
    focus:    'Graph algorithms, influence maximization, algorithmic fairness.',
    email:    'dummy@iit.ac.in',
    image:    'yama dixit.png',
    link:     'https://example.com/arun-mehta',       
    scholar:  'https://scholar.google.com/',
    linkedin: 'https://linkedin.com/',
    cv:       'https://example.com/cv.pdf',
  },
]

/* if you want to add more Ph.D. scholars, copy-paste the below object and fill in the details.*/

export const PHD = [
  {
    name:     'Priya Nair',
    role:     'Ph.D. Scholar — 3rd Year',
    degree:   'B.Tech., NIT Trichy',
    focus:    'Temporal graph streaming and incremental shortest-path algorithms.',
    email:    'dummy@iit.ac.in',
    image:    null,
    link:     null,                                   
    scholar:  'https://scholar.google.com/',          
    linkedin: null,                                   
    cv:       null,                                   
  },
  {
    name:     'Divya Sharma',
    role:     'Ph.D. Scholar — 1st Year',
    degree:   'B.E., BITS Pilani',
    focus:    'Fairness-aware ranking algorithms and bias auditing in recommender systems.',
    email:    'dummy@iit.ac.in',
    image:    'divya sharma.png',
    link:     'https://example.com/divya-sharma',
    scholar:  null,
    linkedin: 'https://linkedin.com/',
    cv:       'https://example.com/cv.pdf',
  },
  {
    name:     'Rahul Joshi',
    role:     'Ph.D. Scholar — 2nd Year',
    degree:   'B.Tech., IIT Delhi',
    focus:    'Approximate counting and sub-linear graph algorithms for streaming data.',
    email:    'dummy@iit.ac.in',
    image:    'rahul joshi.jpg',
    link:     'https://example.com/rahul-joshi',
    scholar:  'https://scholar.google.com/',
    linkedin: 'https://linkedin.com/',
    cv:       null,
  },
]

/* if you want to add more M.Tech. researchers, copy-paste the below object and fill in the details.*/

export const MASTERS = [
  {
    name:     'Ananya Reddy',
    role:     'M.Tech. Research — CSE',
    degree:   'B.Tech., JNTU Hyderabad',
    focus:    'Seed-selection heuristics for influence maximization in heterogeneous networks.',
    email:    null,
    image:    null,
    link:     null,
    scholar:  null,
    linkedin: null,
    cv:       null,
  },
  {
    name:     'Karthik Suresh',
    role:     'M.Tech. Research — CSE',
    degree:   'B.E., Anna University',
    focus:    'Real-time community detection on dynamic social graphs.',
    email:    null,
    image:    null,
    link:     'https://example.com/karthik-suresh',
    scholar:  'https://scholar.google.com/',
    linkedin: 'https://linkedin.com/',
    cv:       'https://example.com/cv.pdf',
  },
]

/* if you want to add more undergrad students, copy-paste the below object and fill in the details.*/

export const UNDERGRAD = [
  {
    name:     'Sneha Pillai',
    role:     'B.Tech. — CSE (3rd Year)',
    degree:   'IIT (current)',
    focus:    'Visualisation dashboard for temporal network evolution and anomaly detection.',
    email:    null,
    image:    null,
    link:     null,
    scholar:  null,
    linkedin: 'https://linkedin.com/',
    cv:       null,
  },
  {
    name:     'Aditya Kumar',
    role:     'B.Tech. — Data Science (Final Year)',
    degree:   'IIT (current)',
    focus:    'Benchmarking graph neural networks on citation and co-authorship networks.',
    email:    null,
    image:    null,
    link:     null,
    scholar:  'https://scholar.google.com/',
    linkedin: null,
    cv:       null,
  },
]

/* if you want to add more alumni, copy-paste the below object and fill in the details.*/

export const ALUMNI = [
  {
    name:     'Neeraj Gupta',
    role:     'Former Ph.D. Scholar',
    degree:   'Now at Adobe Research',
    focus:    'Worked on scalable graph mining and distributed network analysis.',
    email:    null,
    image:    null,
    link:     null,
    scholar:  'https://google.com',
    linkedin: null,
    cv:       null,
  },
  {
    name:     'Megha Iyer',
    role:     'Former M.Tech. Researcher',
    degree:   'Now pursuing Ph.D. at UIUC',
    focus:    'Worked on fairness-aware recommender systems.',
    email:    null,
    image:    null,
    link:     null,
    scholar:  'https://scholar.google.com/',
    linkedin: 'https://linkedin.com/',
    cv:       null,
  },
]
