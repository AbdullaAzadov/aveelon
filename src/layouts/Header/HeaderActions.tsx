import styled from 'styled-components';
import { HeaderNav, LanguageSelector } from './index';
import { Tel } from '@components/Tel';
import { TelegramIcon, WhatsappIcon } from '@components/icons';

export const HeaderActions = () => {
  return (
    <StyledWrapper>
      <HeaderNav />
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
