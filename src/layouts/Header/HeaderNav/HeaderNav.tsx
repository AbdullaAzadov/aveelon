import { headerLinks } from '@data/Header';
import { HeaderNavItem } from './HeaderNavItem';
import styled from 'styled-components';

export const HeaderNav = () => {
  return (
    <StyledWrapper>
      {headerLinks.map((link) => (
        <HeaderNavItem key={link.name} data={link} />
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: ${(p) => p.theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: 1px;
  }
  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;
