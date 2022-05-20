import styled from 'styled-components';

export const ODVWSection = () => {
  return (
    <Container>
      <Background src="/assets/background.png" />

      <AbsoluteForeground>
        <Graphic />
        <Information>
          <Subtitle>Everything in the world of</Subtitle>
          <Title>odvw</Title>
        </Information>
      </AbsoluteForeground>
    </Container>
  );
};

const Container = styled.section`
  margin-top: 160px;
  position: relative;
`;

const Background = styled.img`
  height: 500px;
  width: 100vw;
`;
const AbsoluteForeground = styled.header`
  position: absolute;
  top: -159px;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Graphic = styled.header`
  width: 368px;
  height: 368px;

  background-color: black;
  filter: drop-shadow(0px 16px 32px rgba(98, 0, 34, 0.46));
  border-radius: 44px;
`;

const Information = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Subtitle = styled.h3`
  margin: 0;
  margin-top: 48px;

  font-family: 'Poppins';
  font-weight: 600;
  font-size: 32px;

  line-height: 48px;
  letter-spacing: -0.05em;
  text-align: center;
  color: #ffffff;
`;
const Title = styled.h2`
  margin: 0;

  font-family: 'ITC Avant Garde Gothic Std';
  font-style: italic;
  font-weight: 700;
  font-size: 65px;

  line-height: 78px;
  letter-spacing: -0.05em;
  text-align: center;
  color: #ffffff;
`;
