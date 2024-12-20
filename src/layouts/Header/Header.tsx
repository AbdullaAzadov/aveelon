import { Logo } from '@components/index';
import { useScreenType } from '@hooks/useScreenType';
import styled from 'styled-components';
import { HeaderActions } from './HeaderActions';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { isMobile, isSmallMobile, isDesktop } = useScreenType();
  const logoSize = isSmallMobile ? 'small' : isMobile ? 'medium' : 'large';
  const nav = useNavigate();

  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <Logo size={logoSize} onClick={() => nav('/')} />
        {isDesktop && <HeaderActions />}
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

const StyledHeaderWrapper = styled.header`
  background-color: ${(p) => p.theme.colors.darkLight};
  padding: 1.875rem 5vw;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 1.25rem 5vw;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    gap: 2.5rem;
  }
`;
