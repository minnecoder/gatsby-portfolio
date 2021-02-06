import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import ProjectItem from './ProjectItem';

const Projects = () => (
  <StaticQuery
    query={graphql`
    {
        allFile(filter: { relativePath: { regex: "/projects/.*.(png|gif|jpeg|jpg)/" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 500) {
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
          <div>
            <h1>Projects</h1>

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

export default Projects;

const Main = styled.div`
padding-top: 40px;
font-family: "Montserrat", sans-serif;
`;
