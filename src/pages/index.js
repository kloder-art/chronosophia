import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';

const formatDate = year => `${Math.abs(year)} b. C.`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Timeline items={data.allMarkdownRemark.edges} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___birth___year, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            id
            name
            wikipedia
            image {
              childImageSharp {
                original {
                  src
                }
              }
            }
            death {
              place
              year
            }
            birth {
              place
              year
            }
            teachers {
              frontmatter {
                name
                image {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
                id
              }
            }
            students {
              frontmatter {
                name
                image {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
                id
              }
            }
          }
        }
      }
    }
  }
`;
