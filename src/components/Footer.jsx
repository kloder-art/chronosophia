import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: auto;
  font-size: 14px;
  padding: 1rem;
`;

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    © {new Date().getFullYear()}, {siteTitle}
  </StyledFooter>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

export default Footer;
