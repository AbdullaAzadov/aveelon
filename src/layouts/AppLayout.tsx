import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer, Header } from './index';

export default function AppLayout() {
  return (
    <StyledMainContainer>
      <Header />
      <main style={{ minHeight: '70vh', backgroundColor: '#fff' }}>
        <Outlet />
      </main>
      <Footer />
    </StyledMainContainer>
  );
}

const StyledMainContainer = styled.div`
  background-color: ${(p) => p.theme.colors.darkLight};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
