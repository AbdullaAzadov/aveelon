import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { AppleIcon, PlayStoreIcon, Text } from '@components/index';

type Tprops = {
  store: 'app-store' | 'play-store';
  link: string;
};

const stores = { 'app-store': 'App Store', 'play-store': 'Google Play' };

export const AvailableOn: React.FC<Tprops> = ({ store, link }) => {
  const { t } = useTranslation();

  return (
    <Container onClick={() => window.open(link, '_blank')}>
      {store === 'app-store' && <AppleIcon />}
      {store === 'play-store' && <PlayStoreIcon />}
      <div className='text-content'>
        <Text className='available'>{t('available-on')}</Text>
        <Text className='store'>{stores[store]}</Text>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 7.75rem;
  padding: 0.75rem 0.625rem;
  display: flex;
  gap: 0.375rem;
  border-radius: 0.375rem;
  background-color: ${(p) => p.theme.colors.dark};
  cursor: pointer;

  .available {
    font-size: 0.5rem;
  }
  .store {
    font-size: 0.875rem;
  }
`;
