import React from 'react';
import styled from 'styled-components';

export default function SkillSection({ title, icons }) {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <SkillIcons>
        {icons.map((icon) => (
          <SkillItem key={icon.node.name}>
            <img src={icon.node.childImageSharp.fixed.src} alt={icon.node.name} />
            <p>{icon.node.name}</p>
          </SkillItem>
        ))}
      </SkillIcons>
    </div>
  );
}

const SectionTitle = styled.h3`

`;
const SkillIcons = styled.div`
display: flex;
justify-content: center;
`;
const SkillItem = styled.div`
padding: 0 0.5rem;
img {
  display: block;
  margin: auto;
}
`;
