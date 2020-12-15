import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import { Filters } from './Filters';

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  padding: 1.45rem 0;

  h1 {
    margin: 0;
    a {
      color: rebeccapurple;
      text-decoration: none;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <Filters />
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
