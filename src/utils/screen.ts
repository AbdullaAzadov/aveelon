import { TScreenType } from '@context/ScreenContext';

export const getCurrentScreen = (): TScreenType => {
  const windowWidth = window.innerWidth;
  return {
    isDesktop: windowWidth > 1280,
    isTablet: windowWidth <= 1280 && windowWidth > 768,
    isMobile: windowWidth <= 768,
    isMobileExcluded: windowWidth < 768,
    isSmallMobile: windowWidth <= 480,
    isUltraSmall: windowWidth <= 375,
    isLessThanWideTablet: windowWidth <= 1024,
    windowWidth,
  };
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
