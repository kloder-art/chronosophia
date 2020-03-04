import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
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
    p {
      margin: 0;
    }
  }
`;

const formatDate = year => `${Math.abs(year)} b. C.`;

const parsePhilosophers = philosophers =>
  philosophers.map(
    (
      {
        node: {
          childMarkdownRemark: { frontmatter: x },
        },
      },
      idx
    ) => ({
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
    })
  );

const parseWorks = works =>
  works.map(({ node: { childMarkdownRemark: { frontmatter: x } } }, idx) => ({
    id: `work${idx}`,
    content: `
  ${x.title}
  `,
    start: moment().year(x.year),
  }));

const Timeline = ({ philosophers, works }) => {
  const ref = useRef();
  useEffect(() => {
    new TL(
      ref.current,
      new DataSet(
        [].concat(parsePhilosophers(philosophers), parseWorks(works))
      ),
      {}
    );
  }, []);
  return <StyledTimeline ref={ref} />;
};

Timeline.propTypes = {
  philosophers: PropTypes.array,
  works: PropTypes.array,
};

export default Timeline;
