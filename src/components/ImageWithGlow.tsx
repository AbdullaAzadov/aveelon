import { FC } from 'react';
import styled from 'styled-components';

interface ImageWithGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  hideGlow?: boolean;
}

export const ImageWithGlow: FC<ImageWithGlowProps> = ({
  src,
  alt = '',
  hideGlow = false,
  ...props
}) => {
  return (
    <SWrapper>
      {!hideGlow && <SBlur />}
      <img src={src} alt={alt} {...props} />
    </SWrapper>
  );
};

const SWrapper = styled.div`
  position: relative;

  img {
    z-index: 10;
    width: 100%;
  }
`;

const SBlur = styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: 1;

  background: #ffffff;
  opacity: 0.9;
  filter: blur(clamp(6rem, 6.6667vw + 4rem, 12rem));
  mix-blend-mode: soft-light;
`;
