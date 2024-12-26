import { createContext } from 'react';
import { getCurrentScreen } from '@utils/screen';

export type TScreenType = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isSmallMobile: boolean;
  isUltraSmall: boolean;
  isLessThanWideTablet: boolean;
  windowWidth: number;
};

export const ScreenContext = createContext<TScreenType>(getCurrentScreen());
