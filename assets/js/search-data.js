// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "post-2nd-place-at-the-european-cybersecurity-amp-ai-hackathon-championship",
        
          title: "2nd place at the European Cybersecurity &amp; AI Hackathon Championship",
        
        description: "We finished 2nd in Vienna and advanced to the CISPA championship grand final.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/european-cybersecurity-ai-hackathon/";
          
        },
      },{id: "post-invited-talk-at-essai-2025",
        
          title: "Invited talk at ESSAI 2025",
        
        description: "I presented our SaTML paper at the European Symposium on Security and AI in Rennes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/essai-talk/";
          
        },
      },{id: "post-winner-of-ocg-förderpreis-2025",
        
          title: "Winner of OCG Förderpreis 2025",
        
        description: "I received the OCG Förderpreis 2025 for my master’s thesis on model stealing attacks.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ocg-foerderpreis/";
          
        },
      },{id: "post-presenting-our-paper-on-model-stealing-at-ieee-satml-2025",
        
          title: "Presenting our paper on model stealing at IEEE SaTML 2025",
        
        description: "Our SaTML 2025 paper on model stealing attacks is now published.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/new-paper-attackers-can-do-better/";
          
        },
      },{id: "post-runner-up-at-tu-wien-informatics-awards",
        
          title: "Runner-up at TU Wien Informatics Awards",
        
        description: "I received the runner-up prize for my master’s thesis at the TU Wien Informatics Awards.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tu-wien-informatics-awards-runner-up/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%72%79%6E%61.%6F%6C%69%79%6E%79%6B@%75%6E%69%76%69%65.%61%63.%61%74", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=1ukdFjgAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/darusik", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/doliynyk", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
