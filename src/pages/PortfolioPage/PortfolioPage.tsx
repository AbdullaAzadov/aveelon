import styled from 'styled-components';

import { ProjectsList, TabSections } from '@components/index';
import { ProjectsCategoriesData } from '@data/PortfolioPage';
import { usePortfolioPage } from '@hooks/usePortfolioPage';

export const PortfolioPage = () => {
  const { selectedIndex, projects, isLoading, onChangeCategory } =
    usePortfolioPage();
  return (
    <SContainer>
      <TabSections
        sections={ProjectsCategoriesData}
        selectedIndex={selectedIndex}
        onSelectSection={onChangeCategory}
        size='s'
        outline={false}
      />
      <ProjectsList projects={projects} isLoading={isLoading} />
    </SContainer>
  );
};

export default PortfolioPage;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.875rem, 1.9608vw + 1.3971rem, 3.75rem);
  padding: clamp(1rem, 4.183vw + -0.0196rem, 5rem) 0
    clamp(1.25rem, 5.2288vw + -0.0245rem, 6.25rem);
`;
