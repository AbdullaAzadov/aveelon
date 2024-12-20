import { useEffect, useState } from 'react';

export const useScreenType = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDesktop = windowWidth > 1280;
  const isTablet = windowWidth <= 1280 && windowWidth > 768;
  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { isTablet, isMobile, isDesktop, isSmallMobile, windowWidth };
};
