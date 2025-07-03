// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Bot10011', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
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
          link: '',
          underDevelopment: true,
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
    email: 'forprojectonly101@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1odUQH7dkeqFVTZnXZJwM_pNQtC0cH4y7/edit?usp=sharing&ouid=109977615897588793844&rtpof=true&sd=true', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js,
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
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
  ],
  publications: [
    {
      title: 'Hi, I’m Jesson Mondejar ',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:' A dedicated Web and System developer passionate about building practical, efficient, and user-focused digital solutions. I’m always learning, exploring new ideas, and improving my skills. If you’re looking for someone to bring your ideas to life, let’s connect!',
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
    defaultTheme: 'lofi',

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
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://www.facebook.com/code.write.debug.learn.build.repeat.improve.grow"
      target="_blank"
      rel="noreferrer"
    >Jesson Mondejar</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
