import styled, { css } from 'styled-components';
import { Text } from './index';
import clsx from 'clsx';
import { media } from '@utils/style-helpers';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TBtnVariant;
  children?: React.ReactNode;
  outlined?: boolean;
  active?: boolean;
  className?: string;
}

type TBtnVariant = 'primary' | 'secondary';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  outlined = false,
  active = false,
  className = '',
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      className={clsx(className, outlined && 'outlined', active && 'active')}
      {...props}
    >
      <Text as={variant === 'primary' ? 'h3' : 'p'}>{children}</Text>
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $variant: TBtnVariant }>`
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  ${(p) => p.$variant === 'primary' && SPrimary}
  ${(p) => p.$variant === 'secondary' && SSecondary}
`;

const SPrimary = css`
  background: ${(p) => p.theme.colors.brand};
  border-radius: 0.625rem;
  padding: 1.25rem 3.75rem;

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    padding: 0.625rem 1rem;
  }
  ${({ theme }) => media.between(theme, 'tablet', 'wideTablet')} {
    padding: 0.75rem 1.5rem;
  }
  ${({ theme }) => media.between(theme, 'wideTablet', 'desktop')} {
    padding: 0.875rem 2rem;
  }

  * {
    color: ${(p) => p.theme.colors.white};
  }
  &:hover {
    background: ${(p) => p.theme.colors.white};
    * {
      color: ${(p) => p.theme.colors.brand};
    }
  }

  &.outlined {
    background: transparent;
    border: 2px solid ${(p) => p.theme.colors.white};
    * {
      color: ${(p) => p.theme.colors.white};
    }

    &:hover {
      background: ${(p) => p.theme.colors.white};
      * {
        color: ${(p) => p.theme.colors.brand};
      }
    }
  }
`;
const SSecondary = css`
  background: ${(p) => p.theme.colors.white};
  border-radius: 0.25rem;
  padding: 0.625rem 1rem;
  * {
    color: ${(p) => p.theme.colors.dark};
  }

  &:hover,
  &.active {
    background: ${(p) => p.theme.colors.brand};
    * {
      color: ${(p) => p.theme.colors.white};
    }
  }
`;
