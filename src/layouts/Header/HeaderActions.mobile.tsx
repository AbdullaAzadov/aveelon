import React, { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { IconButton, LinkedIcon, Logo, Tel } from '@components/index';
import {
  BurgerIcon,
  CloseIcon,
  TelegramIcon,
  WhatsappIcon,
} from '@components/icons';
import { LanguageSelector } from './LanguageSelector';
import CONST from '@constants/constants';

type props = {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  hideBurger: () => void;
};

export const HeaderActionsMobile: FC<props> = ({
  isShow,
  setIsShow,
  hideBurger,
}) => {
  const nav = useNavigate();
  const handleClickLogo = () => {
    nav('/');
    hideBurger();
  };

  return (
    <>
      <StyledWrapper>
        <IconButton size='1.75rem' className='SIcon'>
          {isShow ? (
            <HeaderBurgerAnimation keyMotion='close'>
              <CloseIcon onClick={() => setIsShow(false)} />
            </HeaderBurgerAnimation>
          ) : (
            <HeaderBurgerAnimation keyMotion='burger'>
              <BurgerIcon onClick={() => setIsShow(true)} />
            </HeaderBurgerAnimation>
          )}
        </IconButton>
        <StyledLogo>
          <Logo onClick={handleClickLogo} />
        </StyledLogo>
        <LanguageSelector onToggle={hideBurger} />
      </StyledWrapper>
      <StyledAdditive>
        <Tel
          value='77008008283'
          label='+7 700 800 82 83'
          className='phoneLink'
          onClick={hideBurger}
        />

        <StyledLinks>
          <LinkedIcon
            renderIcon={<WhatsappIcon />}
            link={CONST.WHATSAPP_LINK}
            onClick={hideBurger}
          />
          <LinkedIcon
            renderIcon={<TelegramIcon />}
            link={CONST.TELEGRAM_LINK}
            onClick={hideBurger}
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

const HeaderBurgerAnimation = ({
  children,
  keyMotion,
}: {
  children: React.ReactNode;
  keyMotion: string;
}) => {
  return (
    <motion.div
      key={keyMotion}
      initial={{ opacity: 0, rotate: -45 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
