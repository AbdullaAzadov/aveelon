import { FC } from 'react';
import { Tel } from '@components/Tel';
import { IconButton, Logo } from '@components/index';
import { BurgerIcon, CloseIcon } from '@components/icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type props = {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderActionsMobile: FC<props> = ({ isShow, setIsShow }) => {
  const nav = useNavigate();
  return (
    <StyledWrapper>
      <StyledLogo>
        <Logo onClick={() => nav('/')} />
      </StyledLogo>
      <Tel value='77008008283' label='+7 700 800 82 83' />
      <IconButton size='1.75rem'>
        {isShow ? (
          <CloseIcon onClick={() => setIsShow(false)} />
        ) : (
          <BurgerIcon onClick={() => setIsShow(true)} />
        )}
      </IconButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.div`
  cursor: pointer;
  display: flex;
  * {
    flex-shrink: 0;
  }
`;
