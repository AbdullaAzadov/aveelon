import { FC } from 'react';
import { Tel } from '@components/Tel';
import { IconButton, LinkedIcon, Logo } from '@components/index';
import {
  BurgerIcon,
  CloseIcon,
  TelegramIcon,
  WhatsappIcon,
} from '@components/icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';
import CONST from '@constants/constants';

type props = {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderActionsMobile: FC<props> = ({ isShow, setIsShow }) => {
  const nav = useNavigate();
  return (
    <>
      <StyledWrapper>
        <IconButton size='1.75rem' className='SIcon'>
          {isShow && <CloseIcon onClick={() => setIsShow(false)} />}
          {!isShow && <BurgerIcon onClick={() => setIsShow(true)} />}
        </IconButton>
        <StyledLogo>
          <Logo onClick={() => nav('/aveelon-showcase')} />
        </StyledLogo>
        <LanguageSelector />
      </StyledWrapper>
      <StyledAdditive>
        <Tel
          value='77008008283'
          label='+7 700 800 82 83'
          className='phoneLink'
        />

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
      </StyledAdditive>
    </>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0.375rem 0;

  .SIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
  }
`;

const StyledLogo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  cursor: pointer;
  display: flex;
  * {
    flex-shrink: 0;
  }
`;

const StyledAdditive = styled.div`
  display: flex;
  justify-content: right;
  padding: 0.5rem 0;
  align-items: center;
  position: relative;

  .phoneLink {
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
  }
`;
const StyledLinks = styled.div`
  display: flex;
  gap: 0.625rem;
`;
