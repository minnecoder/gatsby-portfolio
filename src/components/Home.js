import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <Main>
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
// background: red;

`;
