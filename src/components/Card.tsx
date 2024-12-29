import { theme } from '@styles/theme';
import { FC } from 'react';
import styled from 'styled-components';
import { Text } from './index';
import { useTranslation } from 'react-i18next';
import { media } from '@utils/style-helpers';

export type TCardProps = {
  icon: React.ReactNode | null;
  title: {
    as?: keyof JSX.IntrinsicElements;
    value: string;
    color?: keyof typeof theme.colors;
  };
  body: {
    as?: keyof JSX.IntrinsicElements;
    value: string;
    color?: keyof typeof theme.colors;
  };
};

interface ICardProps extends TCardProps {
  className?: string;
}

export const Card: FC<ICardProps> = ({
  icon = null,
  title,
  body,
  className = '',
}) => {
  const { t } = useTranslation();
  return (
    <StyledCard className={className}>
      {icon && <div className='icon'>{icon}</div>}
      <Text
        as={title.as || 'h2'}
        color={title.color || 'white'}
        className='title'
      >
        {t(title.value)}
      </Text>
      <Text as={body.as || 'p'} color={body.color || 'white'} className='body'>
        {t(body.value)}
      </Text>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  flex: 0;
  padding: 3.125rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-radius: 1.25rem;
  background-color: ${(p) => p.theme.colors.gray};

  .icon svg {
    height: 4rem;
    ${({ theme }) => media.lessThan(theme, 'tablet')} {
      height: 2.5rem;
    }
  }

  &.normal {
    max-width: 29rem;
    min-width: 29rem;

    ${({ theme }) => media.between(theme, 'tablet', 'desktop')} {
      min-width: 15rem;
      width: clamp(15rem, 43.75vw - 6rem, 29rem);
    }
    ${({ theme }) => media.lessThan(theme, 'tablet')} {
      min-width: 14rem;
    }
  }

  &.small {
    max-width: 19.75rem;
    min-width: 19.75rem;

    ${({ theme }) => media.between(theme, 'tablet', 'wideTablet')} {
      min-width: 15rem;
      width: clamp(15rem, 6.597vw + 11.833rem, 19.75rem);
    }
    ${({ theme }) => media.between(theme, 'smallMobile', 'tablet')} {
      min-width: 8rem;
      width: clamp(8rem, 22.222vw + 1.333rem, 12rem);
    }
    ${({ theme }) => media.lessThan(theme, 'smallMobile')} {
      min-width: 7rem;
    }
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    padding: 2.5rem 1.25rem;
  }

  .title {
    height: 40%;
  }
  .body {
    height: 50%;
  }
`;
