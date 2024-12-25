import clsx from 'clsx';
import { FC, useState } from 'react';
import styled from 'styled-components';

type ImageStackProps = {
  images: string[];
};

export const ImageStack: FC<ImageStackProps> = ({ images }) => {
  const [isCollided, setIsCollided] = useState(true);

  return (
    <Wrapper>
      <Container className={clsx({ open: isCollided })}>
        {images.map((src, index) => (
          <StyledImage
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            $position={index}
            $count={images.length}
            onMouseEnter={() => setIsCollided(false)}
            onMouseLeave={() => setIsCollided(true)}
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

  transition: min-width 0.5s ease-out;
  &.open {
    min-width: 55%;
  }
`;

const StyledImage = styled.img<{ $position: number; $count: number }>`
  cursor: pointer;
  position: absolute;
  height: 100%;
  width: ${({ $count }) => 100 / $count}%;
  left: ${({ $position, $count }) => ($position * 100) / $count}%;

  overflow-x: visible;
  object-fit: cover;
`;
