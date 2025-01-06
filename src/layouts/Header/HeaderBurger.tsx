import React from 'react';
import styled from 'styled-components';
import { HeaderNav } from './index';
import { motion } from 'framer-motion';

export const HeaderBurger = React.forwardRef<
  HTMLDivElement,
  { onNavigate: () => void }
>(({ onNavigate }, ref) => {
  return (
    <StyledWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={ref}
    >
      <HeaderNav onNavigate={onNavigate} />
    </StyledWrapper>
  );
});

const StyledWrapper = motion.create(styled.div`
  top: clamp(5.625rem, 3.5714vw + 3.0893rem, 7.375rem);
  background-color: ${(p) => p.theme.colors.darkLight};
  position: fixed;
  z-index: 99999;
  width: 100vw;
  padding: 2.5rem 0;
`);
