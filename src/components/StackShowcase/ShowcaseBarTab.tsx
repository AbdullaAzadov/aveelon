import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ArrowRightIcon, Text } from '@components/index';

interface ShowcaseBarTabProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
  children?: string;
}

export const ShowcaseBarTab: React.FC<ShowcaseBarTabProps> = ({
  isActive,
  children = '',
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <SContainer
      className={clsx(isActive && 'active', props.className)}
      {...props}
    >
      <Text as='h2' className='text'>
        {t(children)}
      </Text>
      <div className='icon'>
        <ArrowRightIcon />
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  cursor: pointer;
  gap: 1rem;

  .icon {
    display: flex;
    align-items: center;
    svg {
      margin-top: 2px;
      width: 1.125rem;
      height: 1.125rem;
      transition: all 0.3s ease;

      path {
        stroke: #d4c8c8;
      }
    }
  }

  .text {
    color: #d4c8c8;
    transition: all 0.3s ease;
  }
  &.active {
    .icon svg path {
      stroke: ${(p) => p.theme.colors.brand};
    }
    .text {
      color: ${(p) => p.theme.colors.brand};
    }
  }
`;
