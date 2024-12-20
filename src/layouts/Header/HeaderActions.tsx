import styled from 'styled-components';
import { HeaderNav, LanguageSelector } from './index';
import { Tel } from '@components/Tel';
import { TelegramIcon, WhatsappIcon } from '@components/icons';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@components/index';
import { useScreenType } from '@hooks/useScreenType';

export const HeaderActions = () => {
  const { isMobile, isSmallMobile } = useScreenType();
  const logoSize = isSmallMobile ? 'small' : isMobile ? 'medium' : 'large';
  const nav = useNavigate();

  return (
    <StyledWrapper>
      <StyledLogoSide>
        <StyledLogo>
          <Logo size={logoSize} onClick={() => nav('/')} />
        </StyledLogo>
        <HeaderNav />
      </StyledLogoSide>
      <StyledActions>
        <LanguageSelector />
        <Tel value='77008008283' label='+7 700 800 82 83' />
        <StyledLinks>
          <a
            href='http://t.me/aveelon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <WhatsappIcon />
          </a>
          <a
            href='http://t.me/aveelon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TelegramIcon />
          </a>
        </StyledLinks>
      </StyledActions>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: ${(p) => p.theme.breakpoints.desktop}) {
    gap: 0.375rem;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  gap: 0;
  @media (min-width: ${(p) => p.theme.breakpoints.wideTablet}) {
    gap: 1.25rem;
  }
`;

const StyledLogoSide = styled.div`
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
