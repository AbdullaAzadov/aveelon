import { ShowcaseBar, ShowcaseBarMobile, Text } from '@components/index';
import { IStackShowcase } from '@data/StackShowcase';
import { useScreenType } from '@hooks/useScreenType';
import { media } from '@utils/style-helpers';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

type props = {
  data: IStackShowcase;
};

export const StackShowcase = ({ data }: props) => {
  const { t } = useTranslation();
  const { isDesktop } = useScreenType();
  return (
    <SContainer>
      <Text as='h1' className='header'>
        {t(data.title)}
      </Text>
      <Text className='desc'>{t(data.desc)}</Text>
      {isDesktop && <ShowcaseBar data={data.stack} />}
      {!isDesktop && <ShowcaseBarMobile data={data.stack} />}
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 6.25rem 0;
  width: 100%;

  .header {
    margin-bottom: 2.25rem;
  }

  .desc {
    margin-bottom: clamp(1.875rem, 3.268vw + 1.0784rem, 5rem);
  }

  ${({ theme }) => media.lessThan(theme, 'desktop')} {
    .desc {
      margin-bottom: 1.875rem;
    }
  }
`;
