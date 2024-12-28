import { FC, LegacyRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Card, TabSections, TCardProps, Text } from '../index';
import clsx from 'clsx';

export interface ITabCarouselContent {
  tabName?: string;
  card: TCardProps[];
}

export interface ITabCarouselProps {
  header: string;
  tabs: ITabCarouselContent[];
  cardSize?: 'small' | 'normal';
  tabSize?: 's' | 'm';
}

export const TabCarousel: FC<ITabCarouselProps> = ({
  header,
  tabs,
  cardSize = 'normal',
  tabSize = 's',
}) => {
  const { t } = useTranslation();
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const scrollRef = useRef<HTMLElement>(null);

  const currentTab = tabs[currentTabIndex];
  const tabSections = tabs
    .map((tab) => tab.tabName)
    .filter((name): name is string => name !== undefined);

  const handleScroll = (e: React.UIEvent<HTMLElement>) =>
    setCurrentCardIndex(
      Math.floor(
        (e.target as HTMLElement).scrollLeft /
          (e.target as HTMLElement)?.offsetWidth
      )
    );

  const handleSetCardIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return null;
    el.scrollLeft = el.offsetWidth * index;
    setCurrentCardIndex(index);
  };

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
              selectedIndex={currentTabIndex}
              onSelectSection={setCurrentTabIndex}
              size={tabSize}
            />
          </div>
        )}
      </div>
      <div
        className='card-wrapper'
        onScroll={handleScroll}
        ref={scrollRef as LegacyRef<HTMLDivElement>}
      >
        {currentTab.card.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            body={card.body}
            className={clsx('card-item', cardSize)}
          />
        ))}
      </div>
      <div className='card-indicator'>
        {currentTab.card.map((_, index) => (
          <div
            key={index}
            className={clsx('card-dot', index === currentCardIndex && 'active')}
            onClick={() => handleSetCardIndex(index)}
          />
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .tabs {
    display: flex;
    align-items: center;
    gap: 2rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
    svg:hover {
      cursor: pointer;
      path {
        stroke: ${(p) => p.theme.colors.brand};
      }
    }
  }

  .card-wrapper {
    display: flex;
    gap: 2rem;
    width: 90vw;
    margin-bottom: 1.25rem;
    overflow-y: hidden;
    overflow-x: scroll;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
  }

  .card-item {
    min-width: 82vw;
    scroll-snap-align: center;
  }

  .card-indicator {
    display: flex;
    justify-content: center;
    gap: 0.625rem;
  }

  .card-dot {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.white};
    transition: all 0.3s ease;
    cursor: pointer;

    &.active {
      background-color: ${(p) => p.theme.colors.brand};
    }
  }
`;
