export default defineAppConfig({
  docus: {
    title: 'Sin City RP',
    description: "Australia's Premier FiveM Roleplaying Haven",
    url: 'https://sin-city.com.au',
    image: 'https://i.imgur.com/eKCrYP0.png',
    socials: {
      github: 'google.com',
      discord: {
        label: 'Discord',
        icon: 'simple-icons:discord',
        href: 'https://discord.gg/sincityau',
        rel: 'noopener noreferrer',
      },
      tiktok: '@sincityau',
    },
    github: {
      dir: '/content',
      branch: 'main',
      repo: 'web-landing',
      owner: 'fdg-rp',
      edit: true,
    },
    aside: {
      level: 1,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: false,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: false,
    },
    footer: {
      fluid: false,
      credits: false,
      iconLinks: [],
      textLinks: [
        {
          text: 'Discord',
          href: 'https://discord.gg/sincityau',
          target: '_blank',
          rel: 'noopener',
        },
        {
          text: 'Donate',
          href: 'https://sincityroleplay.tebex.io/',
          target: '_blank',
          rel: 'noopener',
        },
      ],
    },
  },
});
