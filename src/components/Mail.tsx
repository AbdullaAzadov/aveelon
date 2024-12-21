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
      {useCustomLabel ? children : <Text>{label}</Text>}
    </StyledLink>
  );
}

const StyledLink = styled.a`
  text-decoration: none;
`;
