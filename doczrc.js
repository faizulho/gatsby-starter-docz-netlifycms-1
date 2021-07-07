const projectRoot = __dirname.replace('/.docz', '');

const { menuItems } = require(`${projectRoot}/config/menu.json`);

export default {
  files: 'docs/**/*.{md,markdown,mdx}',
  title: '#ImMuhdFaizul's Legal Documentation Website',
  menu: menuItems
}
