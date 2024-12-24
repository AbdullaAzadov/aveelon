import styled from 'styled-components';

type IconButtonProps = {
  children: React.ReactNode;
  size?: string;
  className?: string;
};

export const IconButton = ({
  children,
  size = 'fit-content',
  className = '',
}: IconButtonProps) => {
  return (
    <StyledWrapper size={size} className={className}>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.size};
`;
