import { theme } from '@styles/theme';
import { FC } from 'react';
import styled from 'styled-components';
import { Text } from './index';
import { useTranslation } from 'react-i18next';
import { media } from '@utils/style-helpers';
import { motion } from 'framer-motion';

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
  index: number;
}

export const Card: FC<ICardProps> = ({
  icon = null,
  title,
  body,
  className = '',
  index = 1,
}) => {
  const { t } = useTranslation();
  return (
    <StyledCard
      as={motion.div}
      key={index}
      className={className}
      initial={{ y: 20, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
    >
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
  padding: clamp(2.5rem, 2.0833rem + 0.8681vw, 3.125rem);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-radius: 1.25rem;
  background-color: ${(p) => p.theme.colors.gray};

  @media screen and (max-width: 1576px) {
    .title {
      font-size: clamp(1.5rem, 0.0743rem + 2.9703vw, 3rem);
    }
  }

  .icon svg {
    height: 4rem;
    ${({ theme }) => media.lessThan(theme, 'tablet')} {
      height: 2.5rem;
    }
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    padding: 2.5rem 1.25rem;
  }
`;
