import moment from 'moment';

const formatDate = (year) => `${Math.abs(year)} b. C.`;

export const parse = (items) =>
  items.map(({ node: { childMarkdownRemark: { frontmatter: x } } }, idx) => ({
    id: `philosopher${idx}`,
    content: `<div class="person">
  ${
    x.image
      ? `<img src="${x.image.childImageSharp.fixed.src}" height="50"/>`
      : ''
  }
  <p>
    <strong>${x.name}</strong><br />
    <small>
      ${formatDate(x.birth.year)} - 
      ${formatDate(x.death.year)}
      (${x.death.year - x.birth.year})
    </small>
  </p>
</person>`,
    start: moment().year(x.birth.year),
    end: moment().year(x.death.year),
  }));
