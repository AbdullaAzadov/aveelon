import { FC } from 'react';
import styled from 'styled-components';

interface ProjectMockUpImageProps {
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
}

export const ProjectMockUpImage: FC<ProjectMockUpImageProps> = ({
  mobileSrc,
  tabletSrc,
  desktopSrc,
}) => {
  return (
    <StyledContainer>
      <img src={mobileSrc} loading='lazy' className='s' />
      <img src={desktopSrc} loading='lazy' className='l' />
      <img src={tabletSrc} loading='lazy' className='m' />
      <div className='bg' />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 100%;

  .bg {
    height: 24rem;
    border-radius: 0.625rem;
    background: linear-gradient(
      180deg,
      rgba(230, 21, 45, 0.7) 0%,
      rgba(35, 31, 32, 0.7) 100%
    );
  }

  svg {
    width: 100%;
    height: 100%;
  }

  img {
    position: absolute;
  }
  .s {
    width: 11%;
    top: 33.33%;
    left: 4.5%;
  }
  .m {
    width: 22%;
    left: 73.67%;
    top: 27.5%;
  }
  .l {
    width: 67.33%;
    left: 11.25%;
    top: 22%;
  }
`;
