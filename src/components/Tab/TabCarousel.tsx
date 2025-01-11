import { FC, LegacyRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  Card,
  TabCarouselDots,
  TabCarouselProgressDots,
  TabSections,
  TCardProps,
  Text,
} from '../index';
import { AnimatePresence } from 'framer-motion';
import { useScreenType } from '@hooks/useScreenType';
import { media } from '@utils/style-helpers';

export interface ITabCarouselContent {
  tabName?: string;
  card: TCardProps[];
}

export interface ITabCarouselProps {
  header: string;
  tabs: ITabCarouselContent[];
}

export interface IScroll {
  scrollLeft: number;
  scrollWidth: number;
}

export const TabCarousel: FC<ITabCarouselProps> = ({ header, tabs }) => {
  const { t } = useTranslation();
  const { isMobile } = useScreenType();
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const scrollRef = useRef<HTMLElement>(null);

  const tabSections = tabs
    .map((tab) => tab.tabName)
    .filter((name): name is string => name !== undefined);
  const currentTab = tabs[currentTabIndex];
  const currentTabCards = currentTab?.card;

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.2;
    el.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    setCurrentCardIndex(
      Math.round(
        (e.target as HTMLElement).scrollLeft /
          (e.target as HTMLElement)?.offsetWidth
      )
    );
  };

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
              size={isMobile ? 's' : 'm'}
            />
          </div>
        )}
      </div>

      <AnimatePresence mode='wait'>
        <div
          className='card-wrapper'
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          ref={scrollRef as LegacyRef<HTMLDivElement>}
          key={currentTabIndex}
        >
          {currentTabCards.map((card, index) => (
            <Card
              key={index}
              index={index}
              icon={card.icon}
              title={card.title}
              body={card.body}
              className={'card-item'}
            />
          ))}
        </div>
      </AnimatePresence>
      {isMobile ? (
        <TabCarouselDots
          onDotClick={handleSetCardIndex}
          activeIndex={currentCardIndex}
          totalDots={currentTabCards.length}
        />
      ) : (
        <TabCarouselProgressDots
          totalDots={currentTabCards.length}
          ref={scrollRef}
        />
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .heading {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;

    ${({ theme }) => media.lessThan(theme, 'desktop')} {
      align-items: center;
      text-align: center;
    }
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
    cursor: pointer;
    ${({ theme }) => media.lessThan(theme, 'tablet')} {
      scroll-snap-type: x mandatory;
    }
    mask-image: linear-gradient(
      to right,
      transparent,
      black 1%,
      black 99%,
      transparent
    );
    padding: 0 1rem;
  }

  .card-item {
    min-width: 20.5vw;
    ${({ theme }) => media.lessThan(theme, 'desktop')} {
      min-width: 41vw;
    }
    ${({ theme }) => media.lessThan(theme, 'tablet')} {
      min-width: 82vw;
    }
    scroll-snap-align: center;
    * {
      user-select: none;
    }
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
