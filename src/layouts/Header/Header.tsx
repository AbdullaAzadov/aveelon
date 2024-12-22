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
  padding: 1.875rem 0;

  ${({ theme }) => media.lessThan(theme, 'desktop')} {
    padding: 1.375rem 0;
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    padding: 1rem 0;
  }
`;
