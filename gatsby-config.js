module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        manualInit: true,
        modulePath: `https://github.com/faizulho/gatsby-starter-docz-netlifycms-1/src/cms/cms.js', // This needs to be relative to the .docz directory
      },
    }
  ]
};
