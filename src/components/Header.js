import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

const Header = () => (
  <Nav>
    <Navbar>
      <LogoLink to="/">Sean Parkin</LogoLink>
      <Navlinks>
        <Navlink to="/#home" className="navlink">
          Home
        </Navlink>
        <Navlink to="/#about">About</Navlink>
        <Navlink to="/#work">Portfolio</Navlink>
        <Navlink to="/#contact">Contact</Navlink>
        <Navlink to="/blog">Blog</Navlink>
      </Navlinks>
    </Navbar>
  </Nav>
);

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  z-index: 1;
  background: #26292c;
  height: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
 
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  padding-left: 4rem;
  @media(max-width:420px) {
    font-size: 1rem;
    padding-left: 1rem; 
  }
`;
const Navlinks = styled.div`
  padding-right: 4rem;
  
 
`;
const Navlink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0 1.5rem;
  &:hover {
    border-bottom: 2px solid #18a4e0;
  }
  @media (max-width: 420px) {
    padding: 0 .25rem;
  }
`;
