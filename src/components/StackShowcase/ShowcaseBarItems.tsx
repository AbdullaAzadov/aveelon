import styled from 'styled-components';
import { IStackTabItem } from '@data/StackShowcase';
import { Text } from '@components/index';
import { useTranslation } from 'react-i18next';
import { media } from '@utils/style-helpers';
import { AnimatePresence, motion } from 'framer-motion';

type props = {
  data: IStackTabItem;
  index: number;
};

export const ShowcaseBarItems: React.FC<props> = ({ data, index }) => {
  const { t } = useTranslation();
  return (
    <AnimatePresence mode='popLayout'>
      <Container
        as={motion.div}
        key={(index + 1) * Math.random()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
    </AnimatePresence>
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

      ${({ theme }) => media.lessThan(theme, 'tablet')} {
        min-height: 4rem;
        svg {
          width: 2rem;
          height: 2rem;
        }
      }
      ${({ theme }) => media.lessThan(theme, 'smallMobile')} {
        min-height: 3.25rem;
        gap: 0.125rem;
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }

  ${({ theme }) => media.lessThan(theme, 'wideTablet')} {
    padding: 0 1rem;
    width: 90%;
    .text {
      margin-bottom: 1.25rem;
    }

    .items {
      width: 95%;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    padding: 0 0.125rem;
    .items {
      gap: 0.25rem;
    }
  }
  ${({ theme }) => media.lessThan(theme, 'smallMobile')} {
    padding: 0;
    .items {
      gap: 0.125rem;
    }
  }
`;
