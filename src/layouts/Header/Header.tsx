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
      {isMobile && showBurger && (
        <HeaderBurger onNavigate={() => setShowBurger(false)} />
      )}
    </>
  );
};

const StyledHeaderWrapper = styled.header`
  position: fixed;
  background: ${(p) => p.theme.colors.darkLight};
  z-index: 9999;
  width: 92vw;
  padding: clamp(1.5rem, -0.2232vw + 1.6429rem, 1.375rem) 4vw;

  -webkit-box-shadow: 0px 0.5rem 1.5rem -0.5rem ${(p) => p.theme.colors.dark};
  -moz-box-shadow: 0px 0.5rem 1.5rem -0.5rem ${(p) => p.theme.colors.dark};
  box-shadow: 0px 0.5rem 1.5rem -0.5rem ${(p) => p.theme.colors.dark};

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    padding: clamp(0.125rem, 3.7037vw + -0.7778rem, 1rem) 4vw;
  }
`;
