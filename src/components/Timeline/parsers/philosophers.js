import moment from 'moment';

import { formatYearRange, getTimelineRange } from '../../../utils/dates';

const template = ({ image, name, yearRange }) => `
<div class="person">
  ${image ? `<img src="${image}" height="50"/>` : ''}
  <p>
    <strong>${name}</strong><br />
    <small>
      ${yearRange}
    </small>
  </p>
</div>
`;

export const parse = (items) =>
  items.map(({ node: { childMarkdownRemark: { frontmatter: x } } }) => ({
    id: `philosopher-${x.id}`,
    content: template({
      image: x.image ? x.image.childImageSharp.fixed.src : null,
      name: x.name,
      yearRange: formatYearRange(x.birth.year, x.death.year),
    }),
    ...getTimelineRange(x.birth.year, x.death.year),
  }));
