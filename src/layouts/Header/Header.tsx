import { useState } from 'react';
import styled from 'styled-components';

import { useScreenType } from '@hooks/useScreenType';
import { HeaderActions, HeaderActionsMobile, HeaderBurger } from './index';

export const Header = () => {
  const [showBurger, setShowBurger] = useState<boolean>(false);
  const { isMobile, isSmallMobile } = useScreenType();

  return (
    <>
      <StyledHeaderWrapper>
        {!isMobile && !isSmallMobile ? (
          <HeaderActions />
        ) : (
          <HeaderActionsMobile setIsShow={setShowBurger} isShow={showBurger} />
        )}
      </StyledHeaderWrapper>
      {(isMobile || isSmallMobile) && showBurger && <HeaderBurger />}
    </>
  );
};

const StyledHeaderWrapper = styled.header`
  background-color: ${(p) => p.theme.colors.darkLight};

  @media (max-width: ${(p) => p.theme.breakpoints.wideTablet}) {
    padding: 1.25rem 1vw;
  }
  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding: 1.25rem 5vw;
  }
  @media (min-width: ${(p) => p.theme.breakpoints.wideTablet}) {
    padding: 1.25rem 5vw;
  }
`;