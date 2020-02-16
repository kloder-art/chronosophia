import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;

  h1 {
    margin: 0;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

const StyledInnerHeader = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledInnerHeader>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </StyledInnerHeader>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
