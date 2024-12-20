import styled from 'styled-components';
import { HeaderNav, LanguageSelector } from './index';
import { TelegramIcon, WhatsappIcon } from '@components/icons';

export const HeaderBurger = () => {
  return (
    <StyledWrapper>
      <HeaderNav />
      <StyledActions>
        <LanguageSelector />
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
  padding-top: 2rem;
  background-color: ${(p) => p.theme.colors.darkLight};
`;

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 1.25rem 2rem;
`;
const StyledLinks = styled.div`
  display: flex;
  gap: 1.25rem;
`;
