import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterSect>
    <p>
      ©
      {' '}
      {new Date().getFullYear()}
      {' '}
      Sean Parkin
    </p>
  </FooterSect>
);

export default Footer;

const FooterSect = styled.div`
  height: 8vh;
  margin: 0;
  background-color: #393e41;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-family: "Poppins", Helvetica, sans-serif;
  > p {
    text-align: center;
    margin: 0;
    color: white;
    font-weight: bold;
    padding-top: 20px;
  }
`;
