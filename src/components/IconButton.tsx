import styled from 'styled-components';

type IconButtonProps = {
  children: React.ReactNode;
  size?: string;
};

export const IconButton = ({
  children,
  size = 'fit-content',
}: IconButtonProps) => {
  return <StyledWrapper size={size}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div<{ size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.size};
`;
