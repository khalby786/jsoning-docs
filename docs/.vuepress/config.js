const nav = require('./nav.js');

module.exports = {
  base: '/',
  title: 'Jsoning',
  description: "A simple key-value JSON-based persistent lightweight database.",
  theme: 'yuu',
  themeConfig: {
    repo: "khalby786/jsoning",
    logo: "https://cdn.glitch.com/c393fad9-338a-43b4-9a2f-8ba07e26d39d%2Fjsoning.png?v=1589190601684",
    // docsDir: 'guide',
    sidebarDepth: 3,
    editLinks: true,
    lastUpdated: true,
    nav
  }
};
