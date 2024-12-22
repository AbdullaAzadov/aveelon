import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { IHeaderLink } from '@data/Header';
import { Text } from '@components/index';
import { useNavigate } from 'react-router-dom';
import { media } from '@utils/style-helpers';

type HeaderNavProps = {
  data: IHeaderLink;
};

export const HeaderNavItem: FC<HeaderNavProps> = ({ data }) => {
  const { t } = useTranslation();
  const nav = useNavigate();

  return (
    <StyledWrapper onClick={() => nav(data.link)}>
      <Text as='p' className='text'>
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
  width: clamp(5.75rem, 8.929vw + 0.036rem, 10.75rem);
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
`;
