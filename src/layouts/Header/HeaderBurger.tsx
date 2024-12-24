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
  padding-top: 2rem;
  background-color: ${(p) => p.theme.colors.darkLight};
`;
