
const CONFIG = {
  github: {
    username: 'Forprojects101',
  },

  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Bot10011/Scholarship-Portal',], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'SMCBI School Portal and Enrollment System',
          description:
            'A role-based system for student registration, subject enrollment, and grade viewing at SMCBI.',
          imageUrl:
            'https://i.postimg.cc/xJkRrgq6/2.png',
          link: 'https://lp-smcbiportal.vercel.app/',
          underDevelopment: false,
        },
        {
          title: 'Horizon Hikers',
          description:
            'A hiking booking platform that helps adventurers discover trails, book guided hikes, and plan mountain adventures with ease.',
          imageUrl:
            'https://i.postimg.cc/m2Ct1mHC/Untitled.png',
          link: 'https://horizonhikers.qzz.io/',
          underDevelopment: false,
        },
        {
          title: 'Scholarship Management System',
          description:
            'A system to manage scholarship applications, approvals, and student tracking.',
          imageUrl:
            'https://i.postimg.cc/xJWP9Hzn/1.png',
          link: '',
          underDevelopment: true,
        },
      ],
    },
  },
  seo: {
    title: 'J-Mondejar',
    description: '',
    imageURL: 'https://t4.ftcdn.net/jpg/03/92/60/97/360_F_392609716_BTUMrPmVwJwQpn8I3uQTkskNvYQsU5WV.jpg',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: 'code.write.debug.learn.build.repeat.improve.grow',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'jessonmondejar4@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1wxG1QQttJsdMhyiSZbV7mX1T3Jy7slMO/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Firebase',
    'MongoDB',
    'Git',
    'GitHub',
    'Supabase',
    'Python',
    'Html',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'St. Mary s College of Bansalan, Inc.',
      degree: 'Bachelor of Science in Information Technology',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Nazareth High School',
      degree: 'ICT- Information and Communications Technology',
      from: '2017',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Hi, I\'m Jesson Mondejar ',
      description: ' A dedicated web and systems developer passionate about building practical, efficient, user-focused digital solutions. Always learning, exploring new ideas, and improving skills. If you need someone to bring your ideas to life, let\'s connect.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'fantasy',
      'dim',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
