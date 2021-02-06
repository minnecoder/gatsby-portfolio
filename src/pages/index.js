import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './index.css';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        bgImage: file(relativePath: { eq: "white-building.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        front: allFile(sort: { order: ASC, fields: [id] }, filter: { relativePath: { regex: "icons/front.*.png/" } }) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fixed(width: 48, height: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        back: allFile(filter: { relativeDirectory: { eq: "icons/back" } }) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fixed(width: 48, height: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        tools: allFile(filter: { relativeDirectory: { eq: "icons/tools" } }) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fixed(width: 48, height: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Main>
        <GlobalStyle />
        <Helmet title="Sean Parkin" />
        <Home bgImage={data.bgImage} />
        <Header />

        <About
          FEimages={data.front.edges}
          BEimages={data.back.edges}
          Toolimages={data.tools.edges}
        />
        <Projects />
        <Contact />
        <Footer />
      </Main>
    )}
  />
);

export default IndexPage;

const Main = styled.div`
  display: flex;
 
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Red+Rose&display=swap');
font-family: "Red Rose", sans-serif;
body {
  margin: 0;
  // background: red;
 
}
`;
