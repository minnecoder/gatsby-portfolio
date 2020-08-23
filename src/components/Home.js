import React from 'react';
import styled from 'styled-components';
// import './Home.css';

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

const Main = styled.div`

margin: 0;
height: 100vh;
display: flex;
align-items: center;
  justify-content: center;
> p {
  font-size: 3.5rem;
  // font-family: 'Red Rose', sans-serif;
  // font-weight: bold;
}
`;
