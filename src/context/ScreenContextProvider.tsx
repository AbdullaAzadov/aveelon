import { useEffect, useMemo, useState } from 'react';
import { ScreenContext } from './ScreenContext';

export const ScreenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const value = useMemo(
    () => ({
      isDesktop: windowWidth > 1280,
      isTablet: windowWidth <= 1280 && windowWidth > 768,
      isMobile: windowWidth <= 768,
      isSmallMobile: windowWidth <= 480,
      windowWidth,
    }),
    [windowWidth]
  );

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
};
