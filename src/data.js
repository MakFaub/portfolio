export const profile = {
  name: 'Makaela Fauber',
  initials: 'MF',
  tagline:
    'Finishing a BA in Computer Science, with a background in retail operations and analytics.',
  location: 'Boulder, CO',
  email: 'makaelafauber@gmail.com',
  github: 'https://github.com/MakFaub',
  linkedin: 'https://www.linkedin.com/in/makaelafauber',
  resumeFile: 'makaela_fauber_resume.pdf',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  paragraphs: [
    'I started at Backcountry as a key holder at the Boulder store in 2022 and became store manager in 2025. I will earn my BA in Computer Science from CU Boulder in 2026.',
    'I use SQL, Python, Looker, and Excel for analysis, and I use JavaScript, React, Tailwind CSS, Node.js, Express, PostgreSQL, and Docker for software development.',
    'I am interested in roles that combine retail operations, data analytics, and software development. I am especially interested in building tools that help people make better decisions with data.',
  ],
};

export const skillGroups = [
  {
    title: 'Data and analytics',
    color: 'badge-primary',
    items: [
      'SQL',
      'Python (pandas, NumPy, Matplotlib, xarray)',
      'Looker',
      'Excel',
      'NetSuite (Report Builder, Saved Searches)',
    ],
  },
  {
    title: 'Software development',
    color: 'badge-secondary',
    items: [
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Docker',
      'Java',
      'Gradle',
      'HTML and CSS',
      'Handlebars',
      'Git and GitHub',
      'JUnit',
      'Mocha and Chai',
    ],
  },
  {
    title: 'Business and operations',
    color: 'badge-accent',
    items: [
      'NetSuite (Endless Aisle ordering, RMA)',
      'Agile (Scrum, Kanban)',
      'Store operations',
      'Retail management',
    ],
  },
];

export const projects = [
  {
    title: "Buff's Bulletin",
    course: 'Software Engineering, CU Boulder',
    featured: true,
    summary:
      'A campus events map web app for CU Boulder. Events appear as pins on a map, colored by event type, with a legend and a search page for finding clubs and events. Built by a team using Scrum and Kanban boards.',
    contributions: [
      'Set up the Mapbox map and the event pins, colored by event type, plus the pin legend',
      'Built the search bar and search results page, and the home page UI',
      'Wrote the use case diagram and unit tests for /register, /login, and /new-event',
      'Worked with a teammate on a parser that puts category tags into the database',
    ],
    result:
      'In user testing, people completed their tasks quickly and described the site as professional and easy to use.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Mapbox', 'Handlebars', 'Mocha', 'Chai'],
    repo: 'https://github.com/miaraygithub/software-dev-group-12-9',
    demo: 'https://youtu.be/PPCzDpSjajc',
  },
  {
    title: 'Clueless',
    course: 'Object Oriented Analysis and Design, CU Boulder',
    summary:
      'A fully object-oriented version of the board game Clue with a modified rule set and a custom map. It adds concealment artifacts that let players peek at another hand, teleport, or summon a weapon to their room.',
    contributions: [
      'Implemented the artifacts, every factory, the observer pattern, and all of the commands',
      'Used Factory, Builder, and Observer patterns',
    ],
    tags: ['Java', 'Gradle', 'JUnit'],
    repo: 'https://github.com/MakFaub/makaela-michael-ooad4448-clueless',
  },
  {
    title: 'Accessibility Audit & Redesign: Girls With Books (nonprofit website)',
    course: 'Accessible Web Design, CU Boulder',
    summary:
      'An accessibility audit and redesign of the Girls With Books nonprofit website, focusing on improving usability for users with disabilities.',
    contributions: [
      'Conducted accessibility audits against WCAG 2.1 guidelines using a heuristic evaluation and user personas',
      'Identified and fixed issues related to keyboard navigation and screen reader compatibility',
      'Ran before-and-after remote usability tests with 2 assistive-technology users: task success rose from 1 of 8 tasks to 8 of 8 tasks',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Accessibility'],
    pdf: 'Girls-With-Books-Audit.pdf',
  },
  {
    title: 'Numerical Methods on Global Monthly SST Means',
    course: 'Numerical Computation (CSCI 3656), May 2025',
    summary:
      'A report analyzing monthly sea surface temperature data from 1850 to 2025, co-authored with Jared Press. It smooths the data three ways, fits a linear trend at every grid point, detects El Niño and La Niña phases, and extends the series 20 years with a seasonal ARIMA model.',
    contributions: [
      'Rolling mean, cubic spline, and Gaussian smoothing',
      'Niño 3.4 phase detection verified with bisection, Newton-Raphson, and cubic spline root finding',
    ],
    tags: ['Python', 'xarray', 'NumPy', 'pandas', 'SciPy', 'Matplotlib', 'Cartopy'],
    repo: 'https://github.com/MakFaub/csci-3656-final-project',
    pdf: 'CSCI_3656_Final_Report.pdf'
  },
];

// Order is newest first. Add 2 to 3 short bullets per job from your resume.
export const experience = [
  {
    role: 'Store Manager',
    org: 'Backcountry – Boulder, CO',
    dates: '2025 to present',
    bullets: [
      'Manage a $738K-revenue store (12 months through May 2026), owning margin, shrink, and payroll hours for a team of 8.',
      'Grew sales 4%, gross margin dollars 6%, and conversion 0.4 points despite a 3% traffic decline; only store in the fleet to grow gross margin rate (+86 bps).',
      'Built Looker dashboards, a weekly KPI report, and NetSuite reports used across stores; lowest shrink in the fleet (0.10%) in 2025.',
    ],
  },
  {
    role: 'Key Holder',
    org: 'Backcountry – Boulder, CO',
    dates: '2022 to 2025',
    bullets: [
      'Used product-level sell-through data to reset floor sets and move aging inventory.',
      'Ran daily store operations, including opening and closing, end-of-night reporting, cash handling, and loss prevention.',
    ],
  },
  {
    role: 'Store Supervisor and Visual Lead',
    org: 'prAna Living – Boulder, CO',
    dates: '2021',
    bullets: [
      'Executed floor sets across a 3,200+ sq ft retail floor, translating planograms and trend data into product presentations.',
      'Wrote a company-wide visual merchandising manual to standardize stores and train new team members.',
    ],
  },
  {
    role: 'Store Supervisor',
    org: 'Billabong – Boulder, CO',
    dates: '2019 to 2021',
    bullets: [
      'Handled cash, balanced registers, and completed end-of-night reporting as part of daily store close.',
      'Trained and coached new associates on the register, customer service, and store procedures, and supervised the floor during shifts.',
    ],
  },
];

export const education = [
  {
    title: 'BA in Computer Science',
    org: 'University of Colorado Boulder',
    dates: '2026',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    org: 'Google',
    dates: '2026',
  },
  {
    title: 'Certificate in Writing',
    org: 'University of Colorado Boulder',
    dates: '2025',
  },
];