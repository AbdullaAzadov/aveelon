import { FC } from 'react';
import styled from 'styled-components';

interface ImageWithGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
}

export const ImageWithGlow: FC<ImageWithGlowProps> = ({ src, alt = '' }) => {
  return (
    <SWrapper>
      <SBlur />
      <img src={src} alt={alt} />
    </SWrapper>
  );
};

const SWrapper = styled.div`
  position: relative;
  width: clamp(15.25rem, 31.771vw + 0rem, 38.125rem);
  height: clamp(15.25rem, 31.771vw + 0rem, 38.125rem);

  img {
    z-index: 10;
    width: 100%;
  }
`;

const SBlur = styled.div`
  position: absolute;
  width: 45%;
  height: 45%;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: 1;

  background: #ffffff;
  filter: blur(10rem);
  mix-blend-mode: soft-light;
`;
