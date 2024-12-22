import { useState } from 'react';
import styled from 'styled-components';

import { useScreenType } from '@hooks/useScreenType';
import { HeaderActions, HeaderActionsMobile, HeaderBurger } from './index';

export const Header = () => {
  const [showBurger, setShowBurger] = useState<boolean>(false);
  const { isMobile } = useScreenType();

  return (
    <>
      <StyledHeaderWrapper>
        {!isMobile ? (
          <HeaderActions />
        ) : (
          <HeaderActionsMobile setIsShow={setShowBurger} isShow={showBurger} />
        )}
      </StyledHeaderWrapper>
      {isMobile && showBurger && <HeaderBurger />}
    </>
  );
};

const StyledHeaderWrapper = styled.header`
  background-color: ${(p) => p.theme.colors.darkLight};
`;
