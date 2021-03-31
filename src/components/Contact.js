import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedin, FaEnvelope,
} from 'react-icons/fa';
import styled from 'styled-components';

const Contact = () => (
  <ContactArea id="contact">
    <ContactSect>
      <h1>Contact Me</h1>
      <p>
        Do you like what you have seen and you are interested in working me?
        {' '}
        <br />
        Use one of the links below to get in contact with me.
      </p>
      <SocialLinks>
        <SocialLink href="https://twitter.com/minnecoder">
          <FaTwitter size={42} color="#1da1f2" hover="#0253b3" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/seanparkin/">
          <FaLinkedin size={42} color="#0073b1" />
        </SocialLink>
        <SocialLink href="https://github.com/minnecoder">
          <FaGithub size={42} color="white" background="fff" />
        </SocialLink>
        <SocialLink href="mailto:sdparkin@gmail.com">
          <FaEnvelope size={42} color="white" />
        </SocialLink>
      </SocialLinks>
    </ContactSect>
  </ContactArea>
);

export default Contact;

const ContactArea = styled.section`
  font-family: "Poppins", sans-serif;
  background: #26292c;
`;
const ContactSect = styled.div`
  width: 70%;
  padding: 100px 0;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  

  > p {
    font-size: 20px;
    text-align: center;
    padding: 20px;
    color: white;
  }
  h1 {
    font-size: 30px;
    text-align: center;
    padding: 20px;
    color: white;
  }
`;

const SocialLinks = styled.div`
  padding: 60px 0;
  margin: 0 auto;

  > a {
    padding: 0px 15px;
  }
`;

const SocialLink = styled.a`
  color: #111  
&:hover {
    color: #0253b3;
  }
`;
