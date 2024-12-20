import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { IHeaderLink } from '@data/Header';
import { Text } from '@components/index';
import { useNavigate } from 'react-router-dom';

type HeaderNavProps = {
  data: IHeaderLink;
};

export const HeaderNavItem: FC<HeaderNavProps> = ({ data }) => {
  const { t } = useTranslation();
  const nav = useNavigate();

  return (
    <StyledWrapper onClick={() => nav(data.link)}>
      <Text as='p'>{t(data.name)}</Text>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.dark};
  width: 10.75rem;
  text-align: center;
  padding: 0.625rem 0;
  cursor: pointer;

  @media (max-width: ${(p) => p.theme.breakpoints.wideTablet}) {
    width: 6.5rem;
    min-width: 6.5rem;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    width: 40vw;
    min-width: 9.5rem;
  }

  * {
    user-select: none;
  }
`;