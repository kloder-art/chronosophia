import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';
import Container from '../components/Container';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Timeline />
      </Container>
    </Layout>
  );
}
