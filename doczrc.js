const projectRoot = __dirname.replace('/.docz', '');

const { menuItems } = require(`${projectRoot}/config/menu.json`);

export default {
  files: 'docs/**/*.{html,md,markdown,mdx}',
  title: 'ImMuhdFaizul Documents Portal',
  menu: menuItems
}
