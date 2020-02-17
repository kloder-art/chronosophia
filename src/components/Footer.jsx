import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-size: 14px;
`;

const Footer = ({ siteTitle }) => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, {siteTitle}
    </StyledFooter>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

export default Footer;
