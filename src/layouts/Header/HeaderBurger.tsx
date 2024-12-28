import styled from 'styled-components';
import { HeaderNav } from './index';

export const HeaderBurger = ({ onNavigate }: { onNavigate: () => void }) => {
  return (
    <StyledWrapper>
      <HeaderNav onNavigate={onNavigate} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  top: clamp(5.375rem, 3.5714vw + 3.0893rem, 7.375rem);
  background-color: ${(p) => p.theme.colors.darkLight};
  position: fixed;
  z-index: 9999;
  width: 100vw;
  padding: 2.5rem 0;
`;
