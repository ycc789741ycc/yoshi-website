// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yoshi\'s Blog',
  tagline: 'Welcome to my blog',
  url: 'https://ycc789741ycc.github.io',
  baseUrl: '/yoshi-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ycc789741ycc', // Usually your GitHub org/user name.
  projectName: 'yoshi-website', // Usually your repo name.


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ycc789741ycc',
        },
        side_project: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ycc789741ycc',
        },
        life_style: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ycc789741ycc',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home Page',
        logo: {
          alt: 'Home Page Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tech Blog',
          },
          {to: '/side_project', label: 'Side Project', position: 'left'},
          {to: '/life_style', label: 'Life Style', position: 'left'},
          {
            href: 'https://github.com/ycc789741ycc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tech Blog',
            items: [
              {
                label: 'Introduce',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/yoshi-taka-36201b194/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Side Project',
                to: '/side_project',
              },
              {
                label: 'Life Style',
                to: '/life_style',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yoshi's Blog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
