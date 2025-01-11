import { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

interface TabCarouselDotsProps {
  totalDots: number;
  ref: React.RefObject<HTMLElement>;
}

export const TabCarouselProgressDots = forwardRef<
  HTMLElement,
  TabCarouselDotsProps
>(({ totalDots }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const el = (ref as React.MutableRefObject<HTMLElement | null>).current;

  useEffect(() => {
    if (!el) return;
    const handleScroll = () => {
      const right = el?.scrollWidth - el?.offsetWidth;
      const index = Math.min(
        Math.floor((el.scrollLeft / right) * totalDots),
        totalDots - 1
      );
      setActiveIndex(index);
    };
    el.addEventListener('scroll', handleScroll);
    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, [el, totalDots]);

  const onDotClick = (index: number) => {
    if (!el) return;
    const right = el?.scrollWidth - el?.offsetWidth;
    const scrollLeft = (right / (totalDots - 1)) * index;
    el.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  return (
    <StyledDots>
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          className={clsx('dot', index === activeIndex && 'active')}
          onClick={() => onDotClick(index)}
        />
      ))}
    </StyledDots>
  );
});

const StyledDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.625rem;

  .dot {
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
