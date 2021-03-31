import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectItem = ({ node, imgSrc }) => (
  <Main>
    <Image>
      <img src={imgSrc} alt="Project" style={{ maxWidth: '100%' }} />
    </Image>
    <Text>
      <h3>{node.name}</h3>
      <p>{node.description}</p>
      <p>
        <strong>Technologies Used: </strong>
        {node.tech}
      </p>
      <Buttons>
        <Button href={node.website}>Website</Button>
        <Button href={node.github}>GitHub</Button>
      </Buttons>
    </Text>
  </Main>
);
export default ProjectItem;

ProjectItem.propTypes = {
  node: PropTypes.objectOf(PropTypes.string).isRequired,
  imgSrc: PropTypes.string.isRequired,
};

const Main = styled.article`
display: flex;
flex-direction: row-reverse;
font-family: "Montserrat", sans-serif;
margin-bottom: 2rem;
@media (max-width:420px) {
  flex-direction: column;
}
`;

const Image = styled.div`
width: 100%;
img {
  height: 100%;
  width: 500px;
}
`;

const Text = styled.div`
width: 50%;
padding: 0 2rem ;
@media (max-width:420px) {
  width: 100%;
  padding: 0;
}
`;

const Buttons = styled.div`
padding: 1rem 0;


`;

const Button = styled.a`
text-decoration: none;
color: #02aab0;
border: solid 2px #02aab0;
padding: 8px 16px;
margin-right: 1rem; 
`;
