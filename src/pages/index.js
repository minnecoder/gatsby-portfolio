import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />
    <About />
    <Projects />
  </Layout>
);

export default IndexPage;
