import clsx from 'clsx';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type ImageStackProps = {
  images: string[];
};

export const ImageStack: FC<ImageStackProps> = ({ images }) => {
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current) return;
      setWidth(ref.current.offsetWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <Wrapper>
      <Container ref={ref}>
        {images.map((src, index) => (
          <StyledImage
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            $position={index}
            $count={images.length}
            $width={width}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={clsx({ open: isHovered })}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  position: relative;
  min-width: 100%;
`;

const StyledImage = styled.img<{
  $position: number;
  $count: number;
  $width: number;
}>`
  cursor: pointer;
  position: absolute;
  height: 100%;
  width: ${({ $count, $width }) => $width / $count}px;
  object-fit: cover;

  transition: left 0.5s ease-out;

  left: ${({ $position, $count, $width }) => {
    let pos = ($position * $width) / $count;
    const middle = Math.floor($count / 2);
    const isOdd = $count % 2 === 1;

    if (isOdd) {
      if ($position < middle) {
        pos += $width * 0.125;
      } else if ($position > middle) {
        pos -= $width * 0.125;
      }
    }
    return pos;
  }}px;

  &.open {
    left: ${({ $position, $count, $width }) => ($position * $width) / $count}px;
  }
`;
