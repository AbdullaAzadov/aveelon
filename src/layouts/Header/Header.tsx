import { useState } from 'react';
import styled from 'styled-components';

import { useScreenType } from '@hooks/useScreenType';
import { HeaderActions, HeaderActionsMobile, HeaderBurger } from './index';
import { media } from '@utils/style-helpers';

export const Header = () => {
  const [showBurger, setShowBurger] = useState<boolean>(false);
  const { isMobile } = useScreenType();

  return (
    <>
      <StyledHeaderWrapper>
        {!isMobile && <HeaderActions />}
        {isMobile && (
          <HeaderActionsMobile setIsShow={setShowBurger} isShow={showBurger} />
        )}
      </StyledHeaderWrapper>
      {isMobile && showBurger && <HeaderBurger />}
    </>
  );
};

const StyledHeaderWrapper = styled.header`
  position: fixed;
  background: ${(p) => p.theme.colors.darkLight};
  z-index: 9999;
  width: 92vw;
  padding: 1.5rem 4vw;

  ${({ theme }) => media.lessThan(theme, 'desktop')} {
    padding: 1.375rem 4vw;
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    padding: 1rem 4vw;
  }
`;
