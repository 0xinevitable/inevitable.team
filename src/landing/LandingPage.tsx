import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { MetaHead } from '@/components/MetaHead';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <MetaHead />
      <Badge>WE ARE INEVITABLE</Badge>
      <Title>
        Inevitable is a organization
        <br />
        that shapes the future
      </Title>
      <Subtitle>Web3</Subtitle>
      <ProjectList>
        <ProjectItem
          title="Bento"
          href="https://bento.finance"
          target="_blank"
          rel="noreferrer"
        >
          <BentoImage
            src="/assets/bento.png"
            width={BENTO_IMAGE_WIDTH * 2}
            height={BENTO_IMAGE_HEIGHT * 2}
          />
        </ProjectItem>
      </ProjectList>
      <Notes>Klaymakers22 Finalist</Notes>

      <Subtitle>Next Up</Subtitle>
      <div style={{ marginTop: 32 }}>
        <Image
          alt=""
          src="/assets/next-up.png"
          width={280}
          height={400}
          style={{
            borderRadius: 32,
            objectFit: 'cover',
            filter: 'invert(1) grayscale(1) opacity(0.8)',
          }}
        />
      </div>

      <PhaseList>
        {PHASES.map((title, index) => (
          <PhaseItem key={index}>
            <PhaseImageContainer>
              <Image
                alt={title}
                src={`/assets/phase-${index + 1}.png`}
                width={100}
                height={100}
              />
            </PhaseImageContainer>
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
  width: 100vw;
  padding-top: 156px;
  padding-bottom: 200px;
  overflow: hidden;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding-top: 100px;
    padding-bottom: 200px;
  }

  @media screen and (max-width: 432px) {
    padding-top: 64px;
    padding-bottom: 128px;
  }

  & * {
    transition: all 0.3s ease-in-out;
  }
`;

const Badge = styled.span`
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

  @media screen and (max-width: 1200px) {
    margin-top: 36px;
    font-size: 56px;
  }

  @media screen and (max-width: 900px) {
    padding: 0 48px;
  }

  @media screen and (max-width: 760px) {
    max-width: 720px;
    padding: 0 32px;
    font-size: 48px;
  }

  @media screen and (max-width: 432px) {
    margin-top: 24px;
    padding: 0 20px;
    font-size: 36px;
  }
`;

const Subtitle = styled.span`
  margin-top: 100px;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 32px;
  line-height: 103%;
  text-align: center;
  color: #ffffff;

  @media screen and (max-width: 432px) {
    font-size: 24px;
  }
`;
const Notes = styled.span`
  margin-top: 20px;
  font-family: 'Poppins';
  font-size: 16px;
  color: rgba(255, 255, 255, 0.65);
`;

const ProjectList = styled.div`
  margin-top: 12px;
  list-style-type: none;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 432px) {
    margin-top: 12px;
  }
`;
const ProjectItem = styled.a`
  width: 478px;
  height: 239px;
  position: relative;

  &:hover {
    transform: scale(1.06);
  }

  @media screen and (max-width: 432px) {
    width: 318.6px;
    height: 159.3px;
  }
`;

const BLUR_SIZE = 95.6;
const BENTO_IMAGE_WIDTH = 478 + BLUR_SIZE * 2;
const BENTO_IMAGE_HEIGHT = 239 + BLUR_SIZE * 2;
const BentoImage = styled(Image)`
  margin: ${-BLUR_SIZE}px;
  width: ${BENTO_IMAGE_WIDTH}px;
  height: ${BENTO_IMAGE_HEIGHT}px;
  pointer-events: none;

  filter: saturate(110%);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 432px) {
    width: ${318.6 + BLUR_SIZE * 2}px;
    height: ${159.3 + BLUR_SIZE * 2}px;
  }
`;

const PHASES = [undefined, 'Launch', 'Expand', 'Terraform', undefined];
const PhaseList = styled.ul`
  margin-top: 128px;
  list-style-type: none;

  display: flex;
  justify-content: center;
  gap: 56px;

  @media screen and (max-width: 1200px) {
    margin-top: 96px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0 56px;
    justify-content: space-between;
    gap: unset;
  }

  @media screen and (max-width: 700px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    justify-content: center;
    transform: scale(0.85);
  }

  @media screen and (max-width: 400px) {
    transform: scale(0.7);
  }
`;
const PhaseItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PhaseImageContainer = styled.div`
  width: 100px;
  height: 100px;

  @media screen and (max-width: 460px) {
    width: 88px;
    height: 88px;
  }
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

  @media screen and (max-width: 460px) {
    margin-top: 12px;
    font-size: 14px;
  }
`;
