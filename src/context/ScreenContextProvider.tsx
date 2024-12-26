import { useEffect, useMemo, useState } from 'react';
import { ScreenContext } from './ScreenContext';
import { getCurrentScreen } from '@utils/screen';

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

  const value = useMemo(() => getCurrentScreen(), [windowWidth]);

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
};
