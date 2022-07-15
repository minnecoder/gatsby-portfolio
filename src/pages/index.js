import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function IndexPage() {
  return (
    <Main>
      <GlobalStyle />
      <Helmet title="Sean Parkin" />
      <Home />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Main>
  );
}

export default IndexPage;

const Main = styled.div`
  display: flex;
 
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}
`;
