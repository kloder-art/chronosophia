import React, { useRef, useEffect } from 'react';
import { DataSet, Timeline as TL } from 'vis-timeline/standalone';
import styled from 'styled-components';
import moment from 'moment';

import 'vis-timeline/styles/vis-timeline-graph2d.css';

const StyledTimeline = styled.div`
  width: 100%;
  height: 100%;

  .person {
    display: flex;
    img {
      margin: 0 16px 0 0;
    }
  }
`;

const parseItems = items =>
  items.map((x, idx) => ({
    id: idx,
    content: `<div class="person">
      <img src="${x.node.frontmatter.image.childImageSharp.original.src}" height="50"/>
<h4>${x.node.frontmatter.name}</h4>
    </person>`,
    start: moment().year(x.node.frontmatter.birth.year),
    end: moment().year(x.node.frontmatter.death.year),
  }));

const Timeline = ({ items }) => {
  const ref = useRef();
  useEffect(() => {
    const timeLine = new TL(ref.current, parseItems(items), {});
  }, []);
  return <StyledTimeline ref={ref} />;
};

export default Timeline;

// {data.allMarkdownRemark.edges.map((x, idx) => (
//   <div key={idx}>
//     <img src={x.node.frontmatter.image.childImageSharp.original.src} />
//     <h2>{x.node.frontmatter.name}</h2>
//     <h5>
//       {formatDate(x.node.frontmatter.birth.year)} -{' '}
//       {formatDate(x.node.frontmatter.death.year)}
//     </h5>
//     <p>
//       Maestro:{' '}
//       {x.node.frontmatter.parent
//         ? x.node.frontmatter.parent.frontmatter.name
//         : 'indefinido'}
//     </p>
//     <h4>Alumnos:</h4>
//     <ul>
//       {x.node.frontmatter.children
//         ? x.node.frontmatter.children.map((y, idx2) => (
//             <li key={idx2}>{y ? y.frontmatter.name : 'indefinido'}</li>
//           ))
//         : 'indefinido'}
//     </ul>
//   </div>
// ))}
