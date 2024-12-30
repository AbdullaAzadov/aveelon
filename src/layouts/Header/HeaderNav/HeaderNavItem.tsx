import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { IHeaderLink } from '@data/Header';
import { Text } from '@components/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { media } from '@utils/style-helpers';
import { scrollToTop } from '@utils/screen';
import clsx from 'clsx';

type HeaderNavProps = {
  data: IHeaderLink;
  onNavigate?: () => void;
};

export const HeaderNavItem: FC<HeaderNavProps> = ({
  data,
  onNavigate = () => {},
}) => {
  const { t } = useTranslation();
  const nav = useNavigate();
  const location = useLocation();
  const isActive = data.link === location.pathname;

  const handleClick = () => {
    scrollToTop();
    nav(data.link);
    onNavigate();
  };

  return (
    <StyledWrapper onClick={handleClick}>
      <Text as='p' className={clsx('text', isActive && 'active')}>
        {t(data.name)}
      </Text>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 0;
  width: clamp(8.75rem, 8.929vw + 0.036rem, 10.75rem);
  cursor: pointer;

  ${({ theme }) => media.between(theme, 'tablet', 'wideTablet')} {
    width: clamp(5rem, 25vw - 7rem, 9rem);
    .text {
      font-size: clamp(0.75rem, 0rem + 1.5625vw, 1rem);
    }
  }

  ${({ theme }) => media.between(theme, 'wideTablet', 'desktop')} {
    width: 9rem;
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    width: clamp(9.75rem, 47.222vw - 4.417rem, 18.25rem);
  }

  * {
    user-select: none;
  }
  .text {
    transition: all 150ms ease-in-out;
  }
  &:hover .text,
  .active {
    color: ${(p) => p.theme.colors.brand};
  }
`;
