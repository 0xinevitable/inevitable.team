import styled from 'styled-components';

export const HeaderSection = () => {
  return (
    <Container>
      <Dot />
      <Title>Inevt</Title>
      <Description>
        web3
        <br />
        social profiles
        <br />
        meta + universe
        <br />
        superapp
      </Description>
    </Container>
  );
};

const Container = styled.header`
  padding-top: 120px;
  padding-bottom: 160px;

  margin: 0 auto;
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dot = styled.div`
  margin-right: auto;
  width: 24px;
  height: 24px;

  border-radius: 12px;
  background-color: black;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 60px;
  width: 100%;

  font-family: 'ITC Avant Garde Gothic Std';
  font-style: italic;
  font-weight: 700;
  font-size: 84px;
  line-height: 78px;
  letter-spacing: -0.05em;
  text-align: left;

  color: #000000;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 28px;
  width: 100%;

  font-family: 'ITC Avant Garde Gothic Std';
  font-style: italic;
  font-weight: 500;
  font-size: 44px;
  line-height: 100%;
  letter-spacing: -0.05em;
  text-align: left;

  color: #000000;
`;
