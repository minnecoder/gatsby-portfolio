import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <StaticQuery
      query={graphql`
    {
        allFile(filter: { relativePath: { regex: "/projects/.*.(png|gif|jpeg|jpg)/" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 800) {
                  src
                }
              }
            }
          }
        }
        allProjectsJson {
          edges {
            node {
              name
              description
              img
              tech
              github
              website
            }
          }
        }
      }
    
    
    `}
      render={(data) => {
        const portfolioData = data.allProjectsJson.edges;
        const portfolioImages = data.allFile.edges;
        return (
          <Main id="work">
            <div className="container">
              <h2>Projects</h2>
              <div>
                {portfolioData.map(({ node }) => {
                  const image = portfolioImages.find((n) => n.node.relativePath === `projects/${node.img}`);
                  const imgSrc = image.node.childImageSharp.fluid.src;
                  return <ProjectItem node={node} imgSrc={imgSrc} key={node.name} />;
                })}
              </div>
            </div>
          </Main>
        );
      }}
    />
  );
}

export default Projects;

const Main = styled.section`
padding-top: 50px;
font-family: "Montserrat", sans-serif;
background: #778DA9;
box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.3);
>.container{
margin: 0 auto;
width: 70%;

> h2{
  text-align: center;
  font-size: 2.5rem;
  padding-bottom: 2rem;
}
}
`;
