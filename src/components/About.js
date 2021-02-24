import React from 'react';
import styled from 'styled-components';
import SkillSection from './SkillSection';

const AboutPage = (
  {
    FEimages, BEimages, DBimages, Timages,
  },
) => (
  <About id="about">
    <AboutSection>
      <h1>About</h1>
      <p>
        Hi! My name is Sean Parkin I am a web developer that is based in
        Minnesota. I make websites and web applications using JavaScript. I am
        currently learning all of the things that React has to offer. React is
        my go-to for web applications and use Gatsby for websites.
      </p>
    </AboutSection>
    <SkillsSection>
      <h2>Skills</h2>
      <Skills>
        <SkillSection title="Front End Skills" icons={FEimages} />
        <SkillSection title="Back End Skills" icons={BEimages} />
        <SkillSection title="Database Skills" icons={DBimages} />
        <SkillSection title="Tools" icons={Timages} />
      </Skills>
    </SkillsSection>
  </About>
);

export default AboutPage;

const About = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  @import url('https:fonts.googleapis.com/css2?family=Montserrat&display=swap');
  font-family: "Montserrat", sans-serif;
  background: #26292C;
  color:white;
`;
const AboutSection = styled.div`
  width: 70%;
  margin: 0 auto;
  > p {
    padding: 20px;
    font-size: 1.4rem;
  }
  h1 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
`;
const Skills = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
 
  .skill {
    padding: 0 .5rem;
  }
  .skill >p{
    text-align: center;
  }
  .skill-icons{
    display: flex;
    justify-content: center;
  }
  h3{
    text-align: center;
  }
 
`;
const SkillsSection = styled.div`
  margin: 0 auto;
  > h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;
