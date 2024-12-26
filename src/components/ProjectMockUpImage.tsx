import { FC } from 'react';
import styled from 'styled-components';
import { ProjectMockupIcon } from '@components/index';

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
      <ProjectMockupIcon />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 100%;

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
