import { FC, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Card, TCardProps, Text } from './index';
import { media } from '@utils/style-helpers';

export interface ITabBarContent {
  tabName?: string;
  card: TCardProps[];
}

export interface ITabBarProps {
  header: string;
  tabs: ITabBarContent[];
  cardSize?: 'small' | 'normal';
}

export const TabBar: FC<ITabBarProps> = ({
  header,
  tabs,
  cardSize = 'normal',
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <Text as='h1' className='header-text'>
        {t(header)}
      </Text>
      <Grid $count={tabs[selectedTab].card.length} $cols={4}>
        {tabs[selectedTab].card.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            body={card.body}
            className={cardSize}
          />
        ))}
      </Grid>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .header-text {
    margin-bottom: 5rem;
    ${({ theme }) => media.lessThan(theme, 'desktop')} {
      margin-bottom: 2rem;
      text-align: center;
    }
  }
`;

const Grid = styled.div<{ $count: number; $cols: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  ${({ theme }) => media.lessThan(theme, 'wideTablet')} {
    gap: 1rem;
  }
  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    gap: 0.5rem;
  }
`;
