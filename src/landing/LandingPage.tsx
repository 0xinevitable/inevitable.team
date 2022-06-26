import React from 'react';
import styled from 'styled-components';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Badge>WE ARE INEVITABLE</Badge>
      <Title>
        Inevitable is a organization
        <br />
        that shapes the future
      </Title>
      <Subtitle>Infra</Subtitle>
      <ProjectList>
        <ProjectItem
          title="Bento"
          href="https://bento.finance"
          target="_blank"
          rel="noreferrer"
        >
          <BentoImage src="/assets/bento.png" />
        </ProjectItem>
      </ProjectList>

      <PhaseList>
        {PHASES.map((title, index) => (
          <PhaseItem key={index}>
            <PhaseImage src={`/assets/phase-${index + 1}.png`} />
            <PhaseTitle>{title}</PhaseTitle>
          </PhaseItem>
        ))}
      </PhaseList>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 333px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Badge = styled.span`
  margin-top: 156px;
  padding: 8px 9px;
  width: fit-content;

  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  text-overflow: ellipsis;
  color: rgba(255, 255, 255, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  margin-top: 54px;

  font-family: 'Poppins';
  font-weight: 900;
  font-size: 64px;
  line-height: 103%;
  text-align: center;
  color: #ffffff;
`;

const Subtitle = styled.span`
  margin-top: 232px;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 32px;
  line-height: 103%;
  text-align: center;
  color: #ffffff;
`;

const ProjectList = styled.div`
  margin-top: 24px;
  list-style-type: none;

  display: flex;
  justify-content: center;
`;
const ProjectItem = styled.a`
  width: 478px;
  height: 239px;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.06);
  }
`;

const BLUR_SIZE = 95.6;
const BentoImage = styled.img`
  margin: ${-BLUR_SIZE}px;
  width: ${478 + BLUR_SIZE * 2}px;
  height: ${239 + BLUR_SIZE * 2}px;
  pointer-events: none;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  user-select: none;
`;

const PHASES = [undefined, 'Launch', 'Expend', 'Terraform', undefined];
const PhaseList = styled.ul`
  margin-top: 128px;
  list-style-type: none;

  display: flex;
  justify-content: center;
  gap: 56px;
`;
const PhaseItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PhaseImage = styled.img`
  width: 100px;
  height: 100px;
  user-select: none;
`;
const PhaseTitle = styled.span`
  margin-top: 20px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
`;
