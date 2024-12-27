import { FC } from 'react';
import styled from 'styled-components';

interface ProjectMockUpImageProps {
  src: string;
  usage?: 'list' | 'details';
}

export const ProjectMockUpImage: FC<ProjectMockUpImageProps> = ({
  src,
  usage = 'list',
}) => {
  return (
    <StyledContainer className={usage}>
      <img src={src} loading='lazy' className='image' />
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

  .image {
    width: 90%;
  }
`;
