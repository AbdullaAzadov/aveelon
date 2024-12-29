import styled from 'styled-components';
import { Text } from './Text';

export function Mail({
  value,
  label,
  useCustomLabel = false,
  children,
}: {
  value: string;
  label: string;
  useCustomLabel?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <StyledLink href={`mail:${value}`}>
      {useCustomLabel ? children : <Text className='text'>{label}</Text>}
    </StyledLink>
  );
}

const StyledLink = styled.a`
  text-decoration: none;

  .text {
    transition: all 150ms ease-in-out;
    &:hover {
      color: ${(p) => p.theme.colors.brand};
    }
  }
`;
