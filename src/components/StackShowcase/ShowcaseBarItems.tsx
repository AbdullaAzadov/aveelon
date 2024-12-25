import styled from 'styled-components';
import { IStackTabItem } from '@data/StackShowcase';
import { Text } from '@components/index';
import { useTranslation } from 'react-i18next';
import { media } from '@utils/style-helpers';

type props = {
  data: IStackTabItem;
};

export const ShowcaseBarItems: React.FC<props> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Container>
      {data.title && (
        <Text as='h3' className='text'>
          {t(data.title)}
        </Text>
      )}
      <div className='items'>
        {data.items.map((item, index) => (
          <div className='item' key={index}>
            {item.icon}
            <Text>{t(item.name)}</Text>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;

  .text {
    margin-bottom: 1.875rem;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(3, clamp(14rem, 6.875vw + 8.5rem, 16.75rem));
    gap: 1.875rem;
    ${({ theme }) => media.lessThan(theme, 'desktop')} {
      grid-template-columns: repeat(
        2,
        clamp(14rem, 6.875vw + 8.5rem, 16.75rem)
      );
      gap: 0.75rem;
    }

    .item {
      display: flex;
      align-items: center;
      min-height: 5rem;
      padding: 0 1rem;
      gap: 1rem;
      background-color: #292c2e;
      border-radius: 0.5rem;
    }
  }
`;
