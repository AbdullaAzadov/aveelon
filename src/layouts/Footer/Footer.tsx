import styled from 'styled-components';
import { FooterLinks, FooterAbout } from './index';
import { media } from '@utils/style-helpers';

export const Footer = () => {
  return (
    <StyledWrapper>
      <FooterLinks />
      <FooterAbout />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.footer`
  padding: 4rem 5vw;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${({ theme }) => media.between(theme, 'tablet', 'wideTablet')} {
    gap: 2rem;
  }
`;
