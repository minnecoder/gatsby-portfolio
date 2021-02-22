import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
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
      front: allFile(filter: { relativeDirectory: { eq: "icons/front" } }) {
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
      database: allFile(filter: { relativeDirectory: { eq: "icons/database" } }) {
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
      tool: allFile(filter: { relativeDirectory: { eq: "icons/tool" } }) {
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
        <Home />
        <Header />
        <About
          FEimages={data.front.edges}
          BEimages={data.back.edges}
          DBimages={data.database.edges}
          Timages={data.tool.edges}
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
