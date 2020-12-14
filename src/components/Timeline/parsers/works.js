import moment from 'moment';

export const parse = (items) =>
  items.map(({ node: { childMarkdownRemark: { frontmatter: x } } }, idx) => ({
    id: `work${idx}`,
    content: `
  ${x.title}
  `,
    start: moment().year(x.year),
  }));
