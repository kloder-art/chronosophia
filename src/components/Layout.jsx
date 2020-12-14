import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import { FiltersContextProvider } from '../context/filters-context';

import '../styles/layout.scss';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <FiltersContextProvider>
      <StyledLayout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </StyledLayout>
    </FiltersContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
