// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'raghavendracherupalli', 
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
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      /*projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],*/
    }, 
  },
  seo: { title: 'Raghavendra Cherupalli', description: 'Doctoral Reseacher at University of Tulsa', imageURL: '' },
  social: {
    linkedin: 'Raghavendra Cherupalli',
    orcid: '0009-0003-1294-7330',
    email: 'raghavendra[.]cherupalli@gmail[.]com',
  },
  resume: {
    fileUrl:'cv.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    { name: 'Python', type: 'coding' },
    { name: 'R', type: 'coding' },
    { name: 'Java', type: 'coding' },
    { name: 'C', type: 'coding' },
    { name: 'C++', type: 'coding' },
    { name: 'MySql', type: 'coding' },
    { name: 'PostgreSQL', type: 'coding' },
    { name: 'Git', type: 'coding' },
    { name: 'TeradataDB', type: 'coding' },
    //{ name: 'C', type: 'coding' },
    { name: 'Autopsy', type: 'cyber' },
    { name: 'HxD', type: 'cyber' },
    { name: 'IDA', type: 'cyber' },
    { name: 'Maltego', type: 'cyber' },
    { name: 'WireShark', type: 'cyber' },
    { name: 'Eraser', type: 'cyber' },
    { name: 'nMap', type: 'cyber' },
    { name: 'BurpSuite', type: 'cyber' },
    
    
  ],
  experiences: [
    {
      company: 'The University of Tulsa',
      position: 'Doctoral Researcher',
      from: 'August 2024',
      to: 'Present',
      companyLink: 'https://sites.utulsa.edu/cyber-students/raghavendra-cherupalli-office-bio-gscholar/',
    },
    {
      company: 'University of Alabama at Birmingham',
      position: 'Cyber Security Researcher',
      from: 'January 2023',
      to: 'August 2024',
      companyLink: 'https://www.uab.edu/home/',
    },
    {
      company: 'Teradata',
      position: 'Associate Software Engineer',
      from: 'April 2022',
      to: 'December 2022',
      companyLink: 'https://www.teradata.com/',
    },
    {
      company: 'Accenture',
      position: 'Associate Software Engineer',
      from: 'August 2021',
      to: 'April 2022',
      companyLink: 'https://www.accenture.com/en',
    },
  ],
  
  talks_and_teaching: {
  talks: [
    {
      institution: 'TEDx',
      title: 'Scammers Don\'t Hack Computers They Hack Emotions.',
      date:'2026',
      link:'https://www.youtube.com/watch?v=x8Om5tnUWqU'
    },
  ],
  teaching:[
    
    {
      institution: 'The University of Tulsa',
      title: 'System Administration',
      term:'Fall 2026 and 2025',
      
    },
    {
      institution: 'The University of Tulsa',
      title: 'Introduction to Operating Systems',
      term:'Spring 2026',
      
    },
    
    {
      institution: 'The University of Tulsa',
      title: 'Enterprise Networks and Security',
      term:'Spring 2026',
      
    },
     {
      institution: 'The University of Tulsa',
      title: 'Introduction to Digital Forensics',
      term:'Fall 2025 and 2024',
      
    },
    {
      institution: 'The University of Tulsa',
      title: 'Introduction to Digital Forensics Lab',
      term:'Fall 2025 and 2024',
      
    },
    {
      institution: 'The University of Tulsa',
      title: 'Penetration Testing',
      term:'Spring 2025',
      
    },
   
    {
      institution: 'The University of Tulsa',
      title: 'Data Security and Cryptography',
      term:' Fall 2024',
      
    },
  ]},
 
  educations: [
    {
      institution: 'The University of Tulsa',
      degree: 'Doctor of Philosophy in Cyber Studies',
      from: '2024',
      to: 'Present',
    },
    {
      institution: 'University of Alabama at Birmingham',
      degree: 'Master of Science in Cyber Security (Computer Forensics and Counter-Terrorism)',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Jawaharlal Nehru Technological University',
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      from: '2017',
      to: '2021',
    },
  ],
  publications: [
    {
      title: 'Linking Tech-Support Scam Lure Tactics and Brand Targets From Cybercriminal Marketplaces To Victim Complaints.',
      conferenceName: 'TAKEDOWN - ACM CCS, 2026',
      //journalName: 'Journal Name',
      authors: 'Raghavendra Cherupalli, Yi Ting Chua, Tyler Moore, Gary Warner',
      //link: 'https://example.com',
      description:
        '',
    },
    {
      title: 'Analyzing Supply and Demand Signals for Cybercrime Services in Technical-Support Scams.',
      conferenceName: 'WACCO - IEEE European Symposium on Security and Privacy, 2026',
      //journalName: '',
      authors: 'Raghavendra Cherupalli, Yi Ting Chua, Tyler Moore, Gary Warner',
      link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11632250',
      description:
        '',
    },
    {
      title: 'Towards Automatic Identification of Task-Based Cyber Risk.',
      //conferenceName: 'WACCO - IEEE European Symposium on Security and Privacy, 2026',
      journalName: 'International Symposium on Human Aspects of Information Security & Assurance (HAISA), 2026',
      authors: 'Corey Bolger, Raghavendra Cherupalli, Samantha Phillips, Bradley Brummel, Sal Aurigemma, Tyler Moore',
      //link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11632250',
      description:
        '',
    },
    {
      title: 'Contextual Classification of Cybercriminal Posts Using Large Language Models: A Comprehensive Study on Tech Support Scam Marketplaces.',
      conferenceName: 'APWG - Ecrime 2025',
      //journalName: '',
      authors: 'Raghavendra Cherupalli, Hawken Grubbs, Yi Ting Chua, Weiping Pei, Tyler Moore, Gary Warner',
      link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11327876',
      description:
        '',
    },
  ],

  // Display articles from your medium or dev account. (Optional)
  /*blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },*/
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },

  
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    /*
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
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],*/
  },

  // Optional Footer. Supports plain text or HTML.
  

  enablePWA: false,
};

export default CONFIG;
