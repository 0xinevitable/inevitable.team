import styled from 'styled-components';

export const Footer = () => {
  return (
    <Container>
      <CopyrightText>© 2021. Inevt.</CopyrightText>
    </Container>
  );
};

const Container = styled.footer`
  padding-top: 86px;
  padding-bottom: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const CopyrightText = styled.span`
  font-family: 'ITC Avant Garde Gothic Std';
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  line-height: 90%;
  color: #000000;
`;
