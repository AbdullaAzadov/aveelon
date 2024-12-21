import styled from 'styled-components';
import { FooterLinks, FooterAbout } from './index';

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
`;
