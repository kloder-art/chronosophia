import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { DataSet, Timeline as TL } from 'vis-timeline/standalone';
import styled from 'styled-components';
import moment from 'moment';

import { FiltersContext } from '../../context/filters-context';
import parsers from './parsers';
import periods from './periods';

import 'vis-timeline/styles/vis-timeline-graph2d.css';
import './Timeline.scss';

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

export const Timeline = ({ philosophers, works }) => {
  const ref = useRef();
  const { filter } = useContext(FiltersContext);

  useEffect(() => {
    const tl = new TL(
      ref.current,
      new DataSet(
        [].concat(
          periods,
          parsers.philosophers(filter(philosophers)),
          parsers.works(filter(works))
        )
      ),
      {}
    );
    return () => {
      tl.destroy();
    };
  }, [philosophers, works, filter]);
  return <StyledTimeline ref={ref} />;
};

Timeline.propTypes = {
  philosophers: PropTypes.array,
  works: PropTypes.array,
};
