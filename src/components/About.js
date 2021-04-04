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
      <h2>About</h2>
      <p>
        My name is Sean Parkin, I am full stack developer with a preference for the back end.
        I enjoy making websites and web applications using JavaScript.
        I continue to learn new things that are coming out in the industry. I am
        currently learning all of the things that React and Node has to offer.
      </p>
    </AboutSection>
    <SkillsSection>
      <h3>Skills</h3>
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

const About = styled.section`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  @import url('https:fonts.googleapis.com/css2?family=Montserrat&display=swap');
  font-family: "Montserrat", sans-serif;
`;
const AboutSection = styled.div`
  width: 70%;
  margin: 0 auto;
  > p {
    padding: 20px;
    font-size: 1.4rem;
  }
  h2 {
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

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: .5rem;
  }
 
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
  background: #ffc331;
  border-radius: 10px;
  padding-left: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  > h3 {
    font-size: 25px;
    text-align: center;
    margin-bottom: 1rem;
  }
`;
