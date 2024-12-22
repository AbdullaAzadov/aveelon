import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer, Header } from './index';
import { media } from '@utils/style-helpers';

export default function AppLayout() {
  return (
    <StyledContainer>
      <StyledContent>
        <Header />
        <StyledMain>
          <Outlet />
        </StyledMain>
        <Footer />
      </StyledContent>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: ${(p) => p.theme.colors.darkLight};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const StyledContent = styled.div`
  margin: 0 auto;
  max-width: 110rem;
  min-width: 44rem;
  width: clamp(44rem, 91.667vw + 0rem, 110rem);

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    max-width: 44rem;
    min-width: 18rem;
    width: clamp(18rem, 92.857vw - 0.571rem, 44rem);
  }
`;

const StyledMain = styled.main`
  min-height: 60vh;
`;
