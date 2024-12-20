import styled from 'styled-components';
import { Text } from './Text';

export function Tel({
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
    <StyledLink href={`tel:+${value}`}>
      {useCustomLabel ? children : <Text>{label}</Text>}
    </StyledLink>
  );
}

const StyledLink = styled.a`
  text-decoration: none;
`;
