import { Text } from '@components/Text';
import { IInfo } from '@data/Info';
import { useScreenType } from '@hooks/useScreenType';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const InfoTemplate = ({ data }: { data: IInfo }) => {
  const { t } = useTranslation();
  const { isSmallMobile, isMobile } = useScreenType();
  return (
    <Container>
      <Text
        as={isSmallMobile ? 'h3' : isMobile ? 'h2' : 'h1'}
        className='header'
      >
        {t(data.title)}
      </Text>
      {data.desc && <Text as={isSmallMobile ? 'h4' : 'p'}>{t(data.desc)}</Text>}
      {data.items.map((item, index) => (
        <div key={index}>
          <Text as={isSmallMobile ? 'p' : isMobile ? 'h3' : 'h2'}>
            {t(item.title)}
          </Text>
          <Text
            as={isSmallMobile ? 'h4' : 'p'}
            style={{ whiteSpace: 'pre', textWrap: 'wrap' }}
          >
            {t(item.desc)}
          </Text>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: clamp(1rem, 3.1373vw + 0.2353rem, 4rem) 0;
  overflow-x: hidden;

  * {
    margin-bottom: clamp(1.5rem, 1.5686vw + 1.1176rem, 3rem);
  }
`;
