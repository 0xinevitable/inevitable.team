import { motion } from 'framer-motion';
import styled from 'styled-components';

const COLORS = ['#000', '#fe1f4b', '#000', '#2a2424'];
const GRADIENT_URL = `https://gradientgen.vercel.app?colors=${COLORS.map((v) =>
  v.replace('#', ''),
).join(',')}`;

export const Gradient: React.FC = () => {
  return (
    <GradientWrapper>
      <motion.iframe
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        src={GRADIENT_URL}
        style={{ border: 'none', overflow: 'hidden' }}
      />
    </GradientWrapper>
  );
};

const GradientWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;

  &,
  * {
    user-select: none;
    -webkit-user-drag: none;
  }

  &,
  & > iframe {
    width: 100%;
    height: 100vh;
  }
`;
