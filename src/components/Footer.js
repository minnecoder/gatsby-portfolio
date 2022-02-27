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

const FooterSect = styled.footer`
  height: 8vh;
  margin: 0;
  background-color: #0D1B2A;
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-family: "Montserrat", Helvetica, sans-serif;
  box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.3);
  > p {
    text-align: center;
    margin: 0;
    font-weight: bold;
    padding-top: 20px;
  }
`;
