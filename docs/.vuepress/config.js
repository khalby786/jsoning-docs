const nav = require('./nav.js');

module.exports = {
  base: '/',
  title: 'Jsoning',
  description: "A simple key-value JSON-based persistent lightweight database.",
  theme: 'yuu',
  themeConfig: {
    repo: "khalby786/jsoning",
    // docsDir: 'guide',
    sidebarDepth: 3,
    editLinks: true,
    lastUpdated: true,
    nav
  }
};