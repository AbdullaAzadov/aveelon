import { useContext } from 'react';
import { ScreenContext, TScreenType } from '@context/ScreenContext';

export const useScreenType = (): TScreenType => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }
  return context;
};
