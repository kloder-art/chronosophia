import React, { useRef, useEffect } from 'react';
import { DataSet, Timeline as TL } from 'vis-timeline/standalone';
import styled from 'styled-components';
import moment from 'moment';
import { graphql, useStaticQuery } from 'gatsby';

import 'vis-timeline/styles/vis-timeline-graph2d.css';

const StyledTimeline = styled.div`
  width: 100%;
  height: 100%;
  .person {
    display: flex;
    img {
      margin: 0 16px 0 0;
    }
    p {
      margin: 0;
    }
  }
`;

const formatDate = year => `${Math.abs(year)} b. C.`;

const parseItems = items =>
  new DataSet(
    items.map(({ node: { frontmatter: item } }, idx) => ({
      id: idx,
      content: `<div class="person">
  ${
    item.image
      ? `<img src="${item.image.childImageSharp.fixed.src}" height="50"/>`
      : ''
  }
  <p>
    <strong>${item.name}</strong><br />
    <small>
      ${formatDate(item.birth.year)} - 
      ${formatDate(item.death.year)}
      (${item.death.year - item.birth.year})
    </small>
  </p>
</person>`,
      start: moment().year(item.birth.year),
      end: moment().year(item.death.year),
    }))
  );

export default function Timeline() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___birth___year, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              name
              image {
                childImageSharp {
                  fixed(width: 50, height: 50, quality: 90, fit: CONTAIN) {
                    src
                  }
                }
              }
              id
              birth {
                year
              }
              death {
                year
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  const ref = useRef();
  useEffect(() => {
    new TL(ref.current, parseItems(data.allMarkdownRemark.edges), {});
  }, []);
  return <StyledTimeline ref={ref} />;
}
