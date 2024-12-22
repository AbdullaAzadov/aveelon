import { TScreenType } from '@context/ScreenContext';

export const getCurrentScreen = (): TScreenType => {
  const windowWidth = window.innerWidth;
  return {
    isDesktop: windowWidth > 1280,
    isTablet: windowWidth <= 1280 && windowWidth > 768,
    isMobile: windowWidth <= 768,
    isSmallMobile: windowWidth <= 480,
    windowWidth,
  };
};
