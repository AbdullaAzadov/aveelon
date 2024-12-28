import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSS_Skeleton } from '@components/css/skeleton';
import { removeDomain } from '@utils/string';

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
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;
    const img = imgRef.current as HTMLImageElement;
    const imgSrc = removeDomain(img.src);
    setIsLoading(src !== imgSrc);
  }, [src, imgRef]);

  return (
    <StyledContainer className={clsx(usage, skeleton && 'skeleton')}>
      {skeleton && <CSS_Skeleton $absolute />}
      <div className='img-wrapper'>
        {isLoading && <div className='loader'></div>}
        <img
          src={src}
          key={src}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          ref={imgRef}
          className={clsx(isLoading && 'hidden')}
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
