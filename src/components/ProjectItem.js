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

const Main = styled.div`
display: flex;
flex-direction: row-reverse;
margin-bottom: 2rem;
border: solid 1px red;
`;

const Image = styled.div`
img {
  height: 100%;
  width: 500px;
}
`;

const Text = styled.div`


`;

const Buttons = styled.div`



`;

const Button = styled.a`
text-decoration: none;
color: #02aab0;
border: solid 2px #02aab0;
padding: 8px 16px;
margin-right: 1rem; 
`;
