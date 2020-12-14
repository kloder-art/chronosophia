import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';
import Container from '../components/Container';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Timeline
        philosophers={data.philosophers.edges}
        works={data.works.edges}
      />
    </Container>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
  query {
    works: allFile(
      filter: { sourceInstanceName: { eq: "works" }, extension: { eq: "md" } }
      sort: { fields: childMarkdownRemark___frontmatter___year, order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              id
              title
              year
              subjects
            }
          }
        }
      }
    }
    philosophers: allFile(
      filter: {
        sourceInstanceName: { eq: "philosophers" }
        extension: { eq: "md" }
      }
      sort: {
        fields: childMarkdownRemark___frontmatter___birth___year
        order: DESC
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              image {
                childImageSharp {
                  fixed(width: 50, height: 50, quality: 90, fit: CONTAIN) {
                    src
                  }
                }
              }
              id
              birth {
                year
              }
              death {
                year
              }
              subjects
            }
          }
        }
      }
    }
  }
`;
