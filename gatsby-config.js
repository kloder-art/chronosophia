module.exports = {
  pathPrefix: '/chronosophia',
  siteMetadata: {
    title: 'Chronosophia',
    description: 'Philosopher organization over time and relations',
    author: '@kloder',
  },
  mapping: {
    'MarkdownRemark.frontmatter.teachers': 'MarkdownRemark.frontmatter.id',
    'MarkdownRemark.frontmatter.students': 'MarkdownRemark.frontmatter.id',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'philosophers',
        path: `${__dirname}/data/philosophers/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'works',
        path: `${__dirname}/data/works/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Chronosophia',
        short_name: 'Chronosophia',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
