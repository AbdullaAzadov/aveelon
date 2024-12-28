import { FC, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Card, TabSections, TCardProps, Text } from '../index';
import { media } from '@utils/style-helpers';

export interface ITabBarContent {
  tabName?: string;
  card: TCardProps[];
}

export interface ITabBarProps {
  header: string;
  tabs: ITabBarContent[];
  cardSize?: 'small' | 'normal';
  tabSize?: 's' | 'm';
}

export const TabBar: FC<ITabBarProps> = ({
  header,
  tabs,
  cardSize = 'normal',
  tabSize = 'm',
}) => {
  const tabSections = tabs
    .map((tab) => tab.tabName)
    .filter((name): name is string => name !== undefined);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentTab = tabs[selectedIndex];

  const { t } = useTranslation();

  if (!currentTab) return null;
  return (
    <StyledWrapper>
      <div className='heading'>
        <Text as='h1' className='header-text'>
          {t(header)}
        </Text>
        {tabSections.length > 1 && (
          <div className='tabs'>
            <TabSections
              sections={tabSections}
              selectedIndex={selectedIndex}
              onSelectSection={setSelectedIndex}
              size={tabSize}
            />
          </div>
        )}
      </div>
      <Grid $count={currentTab.card.length} $cols={4}>
        {currentTab.card.map((card, index) => (
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
  .heading {
    margin-bottom: 3.75rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    ${({ theme }) => media.lessThan(theme, 'desktop')} {
      gap: 2rem;
      align-items: center;
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
