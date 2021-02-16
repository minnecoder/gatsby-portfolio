import React from 'react';
import styled from 'styled-components';
import {
  SiCss3, SiEslint, SiGatsby, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNodeDotJs, SiNodemon, SiPostgresql, SiPostman, SiReact, SiSwagger,
} from 'react-icons/si';
import { IconContext } from 'react-icons';

const AboutPage = () => (
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
        <IconContext.Provider value={{ size: '5rem' }}>

          <section>
            <h3>Front End</h3>
            <div className="skill-icons">
              <div className="skill">
                <SiCss3 />
                <p> CSS3 </p>
              </div>
              <div className="skill">
                <SiHtml5 />
                <p>HTML</p>
              </div>
              <div className="skill">
                <SiJavascript />
                <p>JavaScript</p>
              </div>
              <div className="skill">
                <SiReact />
                <p>React</p>
              </div>
              <div className="skill">
                <SiGatsby />
                <p>Gatsby</p>
              </div>
            </div>
          </section>
          <section>
            <h3>Back End</h3>
            <div className="skill-icons">
              <div className="skill">
                <SiNodeDotJs />
                <p>NodeJs</p>
              </div>
              <div className="skill">
                <SiSwagger />
                <p>Swagger</p>
              </div>
              <div className="skill">
                <SiNodemon />
                <p>Nodemon</p>
              </div>
            </div>
          </section>
          <section>
            <h3>Database</h3>
            <div className="skill-icons">
              <div className="skill">
                <SiMongodb />
                <p>MongoDB</p>
              </div>
              <div className="skill">
                <SiPostgresql />
                <p>PostgreSQL</p>
              </div>
            </div>
          </section>
          <section>
            <h3>Tools</h3>
            <div className="skill-icons">
              <div className="skill">
                <SiGithub />
                <p>GitHub</p>
              </div>
              <div className="skill">
                <SiPostman />
                <p>Postman</p>
              </div>
              <div className="skill">
                <SiEslint />
                <p>Eslint</p>
              </div>
            </div>
          </section>
        </IconContext.Provider>
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
