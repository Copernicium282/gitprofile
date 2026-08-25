// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Copernicium282', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['Copernicium282/gitprofile', 'Copernicium282/neetcode-submissions', 'Copernicium282/rustlings', 'Copernicium282/Copernicium282', 'Copernicium282/NITRO', 'Copernicium282/Zero-Knowledge-Proofs'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'Copernicium282/Othello',
          'Copernicium282/Caesar',
          'Copernicium282/Medicine-Chain-Supply-Tracker',
          'Copernicium282/Building-with-the-Claude-API'
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Othello',
          description:
            'Fully on-chain Othello game on Somnia Shannon testnet. Features sub-second finality, bitboard-enforced game logic, YYG-staked wagering, 4 production contracts (YinYang ERC-20 wrapper, OthelloGame, OthelloELO with PRBMath fixed-point, OthelloTreasury with 30-day seasons), and a React 19 + Vite frontend with MetaMask, alpha-beta AI opponent, and seasonal leaderboard.',
          imageUrl:
            'https://opengraph.githubassets.com/1/Copernicium282/Othello',
          link: 'https://github.com/Copernicium282/Othello',
        },
        {
          title: 'Caesar',
          description:
            'Self-sovereign password manager where the encrypted vault never leaves the user\'s machine. Uses Argon2id key derivation, AES-256-GCM vault encryption, a 34-command CLI, 36-endpoint local HTTPS server, a signed Firefox/Zen extension with autofill & TOTP, and multi-device sync via Helia IPFS with vault hash + CID committed to Ethereum Sepolia for tamper-evident verification.',
          imageUrl:
            'https://opengraph.githubassets.com/1/Copernicium282/Caesar',
          link: 'https://github.com/Copernicium282/Caesar',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Amit Prasad', description: '', imageURL: '' },
  social: {
    linkedin: 'amit-prasad-b82188369',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
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
    discord: 'ir192m2',
    telegram: '',
    website: '',
    phone: '',
    email: 'ampr2006rmp@gmail.com',
  },
  skills: [
    'Solidity',
    'TypeScript',
    'JavaScript',
    'Python',
    'C',
    'C++',
    'HTML/CSS',
    'React',
    'Vite',
    'ethers.js',
    'Express.js',
    'Node.js',
    'Tailwind CSS',
    'Foundry',
    'OpenZeppelin',
    'Chainlink',
    'Firebase',
    'Supabase',
    'MongoDB',
    'Docker',
    'Helia IPFS',
    'thirdweb',
    'Anthropic SDK',
    'Ethereum',
    'GitHub Actions',
  ],
  certifications: [
    {
      name: 'Docker Training Course for the Absolute Beginner',
      body: 'KodeKloud',
      year: 'July 2026',
      link: 'https://kodekloud.com/certificate-verification/2a05c853-8718-4954-b15b-510380dc59f0',
    },
    {
      name: 'Agents and Workflows',
      body: 'OpenAI',
      year: 'June 2026',
      link: 'https://academy.openai.com',
    },
    {
      name: 'Applied AI Foundations',
      body: 'OpenAI',
      year: 'June 2026',
      link: 'https://academy.openai.com',
    },
    {
      name: 'Building with the Claude API',
      body: 'Anthropic',
      year: 'June 2026',
      link: 'https://www.anthropic.com',
    },
    {
      name: 'Foundry Fundamentals',
      body: 'Cyfrin Updraft',
      year: 'May 2026',
      link: 'https://updraft.cyfrin.io/certificate/1AW39SUHHBLS',
    },
    {
      name: 'Solidity Smart Contract Development',
      body: 'Cyfrin Updraft',
      year: 'May 2026',
      link: 'https://updraft.cyfrin.io/certificate/A2LTPP93K9FA',
    },
    {
      name: 'Chainlink Fundamentals',
      body: 'Cyfrin Updraft',
      year: 'April 2026',
      link: 'https://updraft.cyfrin.io/certificate/CLF-K6OZX855/D4ZA',
    },
    {
      name: 'Blockchain Basics',
      body: 'Cyfrin Updraft',
      year: 'January 2026',
      link: 'https://updraft.cyfrin.io/certificate/BBCC-UHNCLICIIJ8X5',
    },
  ],
  educations: [
    {
      institution: 'IIT (ISM) Dhanbad',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      from: '2025',
      to: '2029',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'business',

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
      'halloween',
      'forest',
      'black',
      'business',
      'lemonade',
      'night',
      'dim',
      'sunset',
      'abyss',
    ],
  },
};

export default CONFIG;
