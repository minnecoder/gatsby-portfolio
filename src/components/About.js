import React from 'react';
import styled from 'styled-components';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiSwagger,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
} from 'react-icons/si';

function AboutPage() {
  return (
    <About id="about">
      <AboutSection>
        <h2>About</h2>
        <p>
          My name is Sean Parkin, I am full stack developer with a preference
          for the back end. I enjoy making websites and web applications using
          JavaScript. I continue to learn new things that are coming out in the
          industry. I am currently learning all of the things that React and
          Node has to offer.
        </p>
      </AboutSection>
      <SkillsSection>
        <h2>Skills</h2>
        <Skills>
          <SkillsRow>
            <Skill>
              <SiHtml5 size="4rem" />
              <p>HTML</p>
            </Skill>
            <Skill>
              <SiCss3 size="4rem" />
              <p>CSS</p>
            </Skill>
            <Skill>
              <SiJavascript size="4rem" />
              <p>JavaScript</p>
            </Skill>
            <Skill>
              <SiTypescript size="4rem" />
              <p>TypeScript</p>
            </Skill>
            <Skill>
              <SiReact size="4rem" />
              <p>React</p>
            </Skill>
          </SkillsRow>
          <SkillsRow>
            <Skill>
              <SiNextdotjs size="4rem" />
              <p>NextJS</p>
            </Skill>
            <Skill>
              <SiMongodb size="4rem" />
              <p>MongoDB</p>
            </Skill>
            <Skill>
              <SiSwagger size="4rem" />
              <p>Swagger</p>
            </Skill>

            <Skill>
              <SiNodedotjs size="4rem" />
              <p>NodeJS</p>
            </Skill>
            <Skill>
              <SiExpress size="4rem" />
              <p>Express</p>
            </Skill>
          </SkillsRow>
        </Skills>
      </SkillsSection>
    </About>
  );
}

export default AboutPage;

const About = styled.section`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  @import url("https:fonts.googleapis.com/css2?family=Montserrat&display=swap");
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
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const SkillsSection = styled.div`
  margin: 0 auto;
  width: 50%;
  padding: 1rem;
  background: #778da9;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  > h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Skill = styled.div`
  margin: 0 3rem;
  > p {
    text-align: center;
  }

  @media (max-width: 1420px) {
    margin: 0 1rem;
  }

  @media (max-width: 1000px) {
    margin: 0 0.5rem;
  }
`;
