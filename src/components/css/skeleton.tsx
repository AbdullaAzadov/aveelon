import styled from 'styled-components';

export const CSS_Skeleton = styled.div<{
  $absolute?: boolean;
  $borderRadius?: string;
}>`
  position: ${(p) => (p.$absolute ? 'absolute' : 'relative')};
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: ${(p) => p.$borderRadius};
  color: transparent;
  user-select: none;
  z-index: 3;

  *,
  button {
    cursor: auto;
    z-index: 0;
    opacity: 0;
    color: transparent;
    user-select: none;
  }

  background: linear-gradient(
      90deg,
      #53535311 33%,
      #24242454 50%,
      #53535311 66%
    )
    #a5a5a5;
  background-size: 300% 100%;
  animation: l1 1s infinite linear;

  @keyframes l1 {
    0% {
      background-position: right;
    }
  }
`;
CSS_Skeleton.defaultProps = {
  $absolute: false,
  $borderRadius: '0.625rem',
};
