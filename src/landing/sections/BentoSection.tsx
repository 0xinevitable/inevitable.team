import styled from 'styled-components';

export const BentoSection = () => {
  return (
    <Container>
      <Web3Emojis>
        <Web3Emoji src="/assets/sushi-emoji.png" alt="image of SushiEmoji" />
        <Web3Emoji
          src="/assets/unicorn-emoji.png"
          alt="image of UnicornEmoji"
        />
        <Web3Emoji src="/assets/fox-emoji.png" alt="image of FoxEmoji" />
      </Web3Emojis>
      <BentoEmoji src="/assets/bento-emoji.png" alt="image of BentoEmoji" />

      <Subtitle>
        Unicorn meat?
        <br />
        Eat everything web3 at once
      </Subtitle>
      <Title>bento 弁当</Title>
    </Container>
  );
};

const Container = styled.section`
  padding: 100px 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Web3Emojis = styled.div`
  display: flex;

  & > img:not(:last-of-type) {
    margin-right: 32px;
  }
`;
const Web3Emoji = styled.img`
  width: 115px;
  height: 115px;
`;

const BentoEmoji = styled.img`
  margin-top: 32px;
  width: 176px;
  height: 176px;
`;

const Subtitle = styled.h3`
  margin: 0;
  margin-top: 28px;

  font-family: 'Poppins';
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;

  text-align: center;
  letter-spacing: -0.05em;
  color: #000000;
`;

const Title = styled.h2`
  margin: 0;
  margin-top: 24px;

  font-family: 'ITC Avant Garde Gothic Std';
  font-style: italic;
  font-weight: 700;
  font-size: 65px;
  line-height: 78px;
  letter-spacing: -0.05em;

  color: #000000;
`;
