import { FC } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

interface TabCarouselDotsProps {
  totalDots: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

export const TabCarouselDots: FC<TabCarouselDotsProps> = ({
  totalDots,
  activeIndex,
  onDotClick,
}) => {
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
};

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
