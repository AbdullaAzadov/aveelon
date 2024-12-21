import { headerLinks } from '@data/Header';
import { HeaderNavItem } from './HeaderNavItem';
import styled from 'styled-components';
import { media } from '@utils/style-helpers';

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
  flex-direction: row;
  gap: 1.25rem;

  ${({ theme }) => media.between(theme, 'wideTablet', 'desktop')} {
    gap: 0.25rem;
  }
  ${({ theme }) => media.lessThan(theme, 'wideTablet')} {
    gap: 2px;
  }
  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    flex-direction: column;
    gap: 1.25rem;
  }
`;
