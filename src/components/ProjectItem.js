import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ProjectItem({ node, imgSrc }) {
  return (
    <Main>
      <Container>
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
        <Image>
          <img src={imgSrc} alt="Project" style={{ maxWidth: '100%' }} />
        </Image>
      </Container>
    </Main>
  );
}
export default ProjectItem;

ProjectItem.propTypes = {
  node: PropTypes.objectOf(PropTypes.string).isRequired,
  imgSrc: PropTypes.string.isRequired,
};

const Main = styled.article`
display: flex;
font-family: "Montserrat", sans-serif;
margin-bottom: 2rem;
background: white;
border-radius: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
padding: 2rem ;
@media (max-width: 1220px) {
  flex-direction: column-reverse;
   backround: red;
  }
`;

const Image = styled.div`
img {
  height: 100%;
  width: 600px;
}
@media (max-width: 540px) {
  img{
    background: red;
    width: 80%;

  }
}
`;

const Text = styled.div`
width: 50%;
padding: 0 2rem ;
> h3 {
  margin: 0 0 2rem 0;
  font-size: 2rem;
}
@media (max-width: 1220px) {
  margin-top: 1rem;
  width: 80%;
  }
@media (max-width: 700px) {
  padding: 0 .25rem;
  margin: 0;
  width: 100%;
}
`;

const Buttons = styled.div`
margin-top: 2rem;
`;

const Button = styled.a`
text-decoration: none;
font-weight: bold;
color: #E0E1DD;
background: #1B263B;
padding: 1rem 2rem;
margin-right: 1rem; 
border-radius: 5px;
`;
