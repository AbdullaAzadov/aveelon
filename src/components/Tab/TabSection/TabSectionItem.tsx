import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Text } from '../../Text';
import clsx from 'clsx';

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
  return (
    <StyledDefault
      className={clsx(className, active && 'active', size)}
      onClick={onClick}
    >
      <Text className='text'>{t(children)}</Text>
    </StyledDefault>
  );
};

const StyledDefault = styled.div`
  cursor: pointer;
  color: ${(p) => p.theme.colors.white};
  border: 1px solid transparent;
  border-radius: 0.375rem;
  transition: all 0.3s ease;

  &.m:not(.active),
  &.s:not(.active) {
    border-color: ${(p) => p.theme.colors.white};
  }

  &.s {
    padding: 0.375rem 0.75rem;
  }

  &.m {
    border-radius: 0.625rem;
    padding: 1.125rem 3rem;
    text-align: center;
  }

  &:hover:not(.active) {
    background-color: transparent;
    border-color: ${(p) => p.theme.colors.white};
  }

  &.active,
  &:active {
    background-color: ${(p) => p.theme.colors.brandDark};
    border-color: 1px solid ${(p) => p.theme.colors.brand};
  }

  .text {
    width: clamp(5rem, 7.8125vw + 1.25rem, 10.625rem);
  }
`;
