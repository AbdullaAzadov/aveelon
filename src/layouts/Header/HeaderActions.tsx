import styled from 'styled-components';
import { HeaderNav, LanguageSelector } from './index';
import { Tel } from '@components/Tel';
import { TelegramIcon, WhatsappIcon } from '@components/icons';
import { useNavigate } from 'react-router-dom';
import { LinkedIcon, Logo } from '@components/index';
import { CONST } from '@constants/constants';
import { media } from '@utils/style-helpers';

export const HeaderActions = () => {
  const nav = useNavigate();

  return (
    <StyledWrapper>
      <StyledLogoSide>
        <StyledLogo>
          <Logo onClick={() => nav('/aveelon-showcase')} />
        </StyledLogo>
        <HeaderNav />
      </StyledLogoSide>
      <StyledActions>
        <Tel value='77008008283' label='+7 700 800 82 83' />
        <StyledLinks>
          <LinkedIcon
            renderIcon={<WhatsappIcon />}
            link={CONST.WHATSAPP_LINK}
          />
          <LinkedIcon
            renderIcon={<TelegramIcon />}
            link={CONST.TELEGRAM_LINK}
          />
        </StyledLinks>
        <LanguageSelector />
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

  ${({ theme }) => media.lessThan(theme, 'desktop')} {
    gap: 0.375rem;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  gap: 0;
  ${({ theme }) => media.moreThan(theme, 'wideTablet')} {
    gap: 0.25rem;
  }
  ${({ theme }) => media.moreThan(theme, 'desktop')} {
    gap: 1.25rem;
  }
`;

const StyledLogoSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => media.between(theme, 'tablet', 'wideTablet')} {
    gap: 0.25rem;
  }

  ${({ theme }) => media.between(theme, 'wideTablet', 'desktop')} {
    gap: 1.125rem;
  }

  ${({ theme }) => media.moreThan(theme, 'desktop')} {
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
