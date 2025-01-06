import { motion, useInView } from 'framer-motion';
import { FC, useRef } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    imgRef.current.style.transform = `perspective(320px) rotateX(${
      (y - rect.width / 2) / -120
    }deg) rotateY(${(x - rect.height / 2) / -90}deg)`;
  };

  return (
    <SWrapper
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      ref={ref}
    >
      {!hideGlow && (
        <SBlur
          initial={{ opacity: 0.9, scale: 1 }}
          animate={
            isInView
              ? {
                  opacity: [0.7, 0.8, 0.7],
                  scale: [0.9, 1, 0.9],
                }
              : { opacity: 0.7, scale: 0.9 }
          }
          transition={{
            duration: 10,
            repeat: isInView ? Infinity : 0,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      )}
      <SImage src={src} alt={alt} {...props} ref={imgRef} />
    </SWrapper>
  );
};

const SWrapper = motion.create(styled.div`
  position: relative;
  height: 100%;

  img {
    z-index: 10;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`);

const SBlur = motion.create(styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: 1;
  will-change: transform, scale;

  background: #ffffff;
  opacity: 0.9;
  filter: blur(clamp(6rem, 6.6667vw + 4rem, 12rem));
  mix-blend-mode: soft-light;
`);

const SImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.1s ease-out;
  will-change: transform;
  z-index: 10;
`;
