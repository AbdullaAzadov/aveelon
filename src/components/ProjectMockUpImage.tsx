import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Skeleton } from '@components/index';

interface ProjectMockUpImageProps {
  src?: string;
  skeleton?: boolean;
  usage?: 'list' | 'details';
}

export const ProjectMockUpImage: FC<ProjectMockUpImageProps> = ({
  src = '',
  usage = 'list',
  skeleton = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!src) return;
    setIsLoading(true);
    if (imgRef.current?.complete) handleImgLoaded();
  }, [src]);

  const handleImgLoaded = () => {
    setIsLoading(false);
  };

  const isImgLoading = !src || isLoading;

  return (
    <StyledContainer className={clsx(usage, skeleton && 'skeleton')}>
      {skeleton && <Skeleton $absolute />}
      <div className='img-wrapper'>
        {isLoading && <div className='loader'></div>}
        <img
          src={src}
          key={src}
          onLoad={handleImgLoaded}
          ref={imgRef}
          className={clsx(isImgLoading && 'hidden')}
          alt='project mockup'
        />
      </div>
      <div className='bg' />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(230, 21, 45, 0.7) 0%,
    rgba(35, 31, 32, 0.7) 100%
  );

  &.list {
    border-radius: 0.625rem;
    padding: 4.875rem 0;
  }
  &.details {
    padding: clamp(1.125rem, 14.5089vw + -8.1607rem, 9.25rem) 0
      clamp(2.5rem, 9.8214vw + -3.7857rem, 8rem);
    border-radius: 1.25rem;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .img-wrapper {
    position: relative;
    width: 90%;
    padding-top: 40%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      object-fit: cover;
      transition: all 0.3s ease;

      &.hidden {
        opacity: 0;
      }
    }
    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 15%;
      padding: 2.5%;
      aspect-ratio: 1;
      border-radius: 50%;
      background: #ddd;
      --_m: conic-gradient(#0000 10%, #000),
        linear-gradient(#000 0 0) content-box;
      -webkit-mask: var(--_m);
      mask: var(--_m);
      -webkit-mask-composite: source-out;
      mask-composite: subtract;
      animation: l3 1s infinite linear;
    }
    @keyframes l3 {
      to {
        transform: rotate(1turn);
      }
    }
  }
`;
