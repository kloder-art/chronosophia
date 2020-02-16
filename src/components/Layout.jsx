import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import '../styles/layout.scss';

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, {data.site.siteMetadata.title}{' '}
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
