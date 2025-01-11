import { FC, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Card, TabSections, TCardProps, Text } from '../index';
import { media } from '@utils/style-helpers';
import { AnimatePresence } from 'framer-motion';

export interface ITabBarContent {
  tabName?: string;
  card: TCardProps[];
}

export interface ITabBarProps {
  header: string;
  tabs: ITabBarContent[];
  tabSize?: 's' | 'm';
}

export const TabBar: FC<ITabBarProps> = ({ header, tabs, tabSize = 'm' }) => {
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
      <AnimatePresence mode='wait'>
        <Grid key={selectedIndex}>
          {currentTab.card.map((card, index) => (
            <Card
              key={index}
              index={index}
              icon={card.icon}
              title={card.title}
              body={card.body}
            />
          ))}
        </Grid>
      </AnimatePresence>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
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

const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: clamp(0.25rem, -0.1538rem + 1.7949vw, 2rem);

  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  }
`;
