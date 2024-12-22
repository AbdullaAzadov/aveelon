import styled from 'styled-components';
import { FooterLinks, FooterAbout, FooterLinksMobile } from './index';
import { media } from '@utils/style-helpers';
import { useScreenType } from '@hooks/useScreenType';

export const Footer = () => {
  const { isMobile } = useScreenType();
  return (
    <StyledWrapper>
      {isMobile ? <FooterLinksMobile /> : <FooterLinks />}
      <FooterAbout />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.footer`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${({ theme }) => media.lessThan(theme, 'wideTablet')} {
    gap: 2rem;
  }

  ${({ theme }) => media.lessThan(theme, 'desktop')} {
    padding: 3.25rem 0;
  }
  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    padding: 2.5rem 0;
  }
`;
