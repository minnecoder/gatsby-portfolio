import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Main from '../components/main';
import About from '../components/about';
import Projects from '../components/projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />
    <About />
    <Projects />
  </Layout>
);

export default IndexPage;
