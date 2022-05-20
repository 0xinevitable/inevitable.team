import styled from 'styled-components';

export const FutureSection = () => {
  return (
    <Container>
      <Title>
        Future:
        <br />
        Forget Transactions
        <br />
        Chat with{' '}
        <WorldList>
          <span>Humans</span>
          <span>Contracts</span>
          <span>ENS</span>
          <span>History</span>
        </WorldList>
      </Title>{' '}
    </Container>
  );
};

const Container = styled.section`
  padding: 180px 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    transform: scale(0.8);
  }
`;

const Title = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 100%;
  letter-spacing: -0.05em;

  color: #000000;
`;

const WorldList = styled.span`
  display: inline-flex;
  flex-direction: column;

  & > span:not(:first-of-type) {
    color: rgba(0, 0, 0, 0.33);
  }
`;
