import moment from 'moment';

const template = ({ title }) => `
  ${title}
`;

export const parse = (items) =>
  items.map(({ node: { childMarkdownRemark: { frontmatter: x } } }) => ({
    id: `work-${x.id}`,
    content: template({ title: x.title }),
    start: moment().year(x.year),
  }));
