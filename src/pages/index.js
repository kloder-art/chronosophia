import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Timeline />
    </Layout>
  );
}
