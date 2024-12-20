import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './index';

export default function AppLayout() {
  return (
    <StyledMainContainer>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
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
