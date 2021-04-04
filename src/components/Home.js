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
background: #FFC331;
font-family: "Montserrat", sans-serif;

> p {
  font-size: 3.5rem;
  @media(max-width:420px) {
    font-size: 2rem;
    text-align: center;
  }
}
`;
