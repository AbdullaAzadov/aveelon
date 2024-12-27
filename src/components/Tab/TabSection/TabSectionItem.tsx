import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Text } from '../../Text';
import clsx from 'clsx';
import { useScreenType } from '@hooks/useScreenType';

interface TabSectionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  active?: boolean;
  children?: string;
}

export const TabSectionItem: React.FC<TabSectionItemProps> = ({
  active = false,
  size = 'm',
  children = '',
  onClick,
  className,
}) => {
  const { t } = useTranslation();
  const { isDesktop } = useScreenType();
  return (
    <StyledDefault
      className={clsx(className, active && 'active', size)}
      onClick={onClick}
    >
      <Text as={size === 'l' && !isDesktop ? 'h4' : 'p'} className='text'>
        {t(children)}
      </Text>
    </StyledDefault>
  );
};

const StyledDefault = styled.div`
  cursor: pointer;
  color: ${(p) => p.theme.colors.white};
  border: 1px solid transparent;
  border-radius: 0.375rem;
  transition: all 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  &.s,
  &.m,
  &.l {
    &:not(.active) {
      border-color: ${(p) => p.theme.colors.white};
    }
    &.no-outline {
      border-color: transparent;
    }
  }

  &.s {
    padding: 0.375rem 0.5rem;
    .text {
      text-wrap: nowrap;
    }
  }

  &.m {
    border-radius: 0.625rem;
    padding: 1.125rem 2.75rem;
    text-align: center;
  }

  &.l {
    flex: 1;
    border-radius: 1.25rem;
    height: clamp(3.5rem, 3.5714vw + 1.2143rem, 5.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .text {
      width: 73%;
    }
  }

  &:hover:not(.active, .no-outline) {
    background-color: transparent;
    border-color: ${(p) => p.theme.colors.brand};
  }

  &.active,
  &:active {
    background-color: ${(p) => p.theme.colors.brandDark};
    border-color: 1px solid ${(p) => p.theme.colors.brand};
  }
`;
