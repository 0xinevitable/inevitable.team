import React from 'react';
import styled from 'styled-components';

import { Footer } from './components/Footer';
import { BentoSection } from './sections/BentoSection';
import { FutureSection } from './sections/FutureSection';
import { HeaderSection } from './sections/HeaderSection';
import { ODVWSection } from './sections/ODVWSection';

const LandingPage = () => {
  return (
    <Container>
      <HeaderSection />
      <BentoSection />
      <FutureSection />
      <ODVWSection />
      <Footer />
    </Container>
  );
};

export default LandingPage;

const Container = styled.header`
  min-height: 100vh;
  background-color: white;
  position: relative;
`;
