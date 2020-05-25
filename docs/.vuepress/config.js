const nav = require('./nav.js');

module.exports = {
  base: '/',
  title: 'Jsoning',
  description: "A simple key-value JSON-based persistent lightweight database.",
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.glitch.com/a1686874-cbbf-4ca9-b412-cd53a73b9ceb%2Fjsoning_square.png?v=1590375603069' }]
  ],
  theme: 'yuu',
  themeConfig: {
    repo: "khalby786/jsoning",
    logo: "https://cdn.glitch.com/a1686874-cbbf-4ca9-b412-cd53a73b9ceb%2Fjsoning_square.png?v=1590375603069",
    // docsDir: 'guide',
    sidebarDepth: 3,
    editLinks: true,
    lastUpdated: true,
    nav
  }
};
