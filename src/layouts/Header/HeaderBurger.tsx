import styled from 'styled-components';
import { HeaderNav } from './index';

export const HeaderBurger = () => {
  return (
    <StyledWrapper>
      <HeaderNav />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  top: 7.5rem;
  background-color: ${(p) => p.theme.colors.darkLight};
  position: fixed;
  z-index: 9999;
  width: 100vw;
  padding: 2.5rem 0;
`;
