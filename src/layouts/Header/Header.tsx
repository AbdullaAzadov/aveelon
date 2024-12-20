import { Logo } from '@components/index';
import { useScreenType } from '@hooks/useScreenType';
import styled from 'styled-components';
import { HeaderActions } from './HeaderActions';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { isMobile, isSmallMobile } = useScreenType();
  const logoSize = isSmallMobile ? 'small' : isMobile ? 'medium' : 'large';
  const nav = useNavigate();

  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyledLogo>
          <Logo size={logoSize} onClick={() => nav('/')} />
        </StyledLogo>
        {!isMobile && !isSmallMobile && <HeaderActions />}
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

const StyledHeaderWrapper = styled.header`
  background-color: ${(p) => p.theme.colors.darkLight};
  padding: 1.25rem 5vw;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding: 1.25rem 1vw;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.wideTablet}) {
    padding: 1.25rem 5vw;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    gap: 1rem;
  }
  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    gap: 2.5rem;
  }
`;

const StyledLogo = styled.div`
  cursor: pointer;
  display: flex;
  * {
    flex-shrink: 0;
  }
`;
