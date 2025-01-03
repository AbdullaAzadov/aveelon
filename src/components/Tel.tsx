import styled from 'styled-components';
import { Text } from './Text';
import { useScreenType } from '@hooks/useScreenType';

export function Tel({
  value,
  label,
  useCustomLabel = false,
  children,
  className = '',
}: {
  value: string;
  label: string;
  useCustomLabel?: boolean;
  children?: React.ReactNode;
  className?: string;
}) {
  const { isUltraSmall } = useScreenType();

  return (
    <StyledLink href={`tel:+${value}`} className={className}>
      {useCustomLabel ? (
        children
      ) : (
        <Text as={isUltraSmall ? 'h4' : 'p'} className='text'>
          {label}
        </Text>
      )}
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
