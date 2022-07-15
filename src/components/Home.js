import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <Main id="home">
      <p>
        Hi, my name is Sean Parkin
        {' '}
        <br />
        I am a JavaScript Developer
      </p>
    </Main>
  );
}

const Main = styled.section`

margin: 0;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: #415A77;
font-family: "Montserrat", sans-serif;
box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.3);

> p {
  font-size: 3.5rem;
  color: #E0E1DD;
  @media(max-width:700px) {
    font-size: 2rem;
    text-align: center;
  }
}
`;
