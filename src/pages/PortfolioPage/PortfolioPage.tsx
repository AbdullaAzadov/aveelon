import styled from 'styled-components';

import { ProjectsList, TabSections } from '@components/index';
import { ProjectsCategoriesData } from '@data/ProtfolioPage';
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

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.875rem, 1.9608vw + 1.3971rem, 3.75rem);
  padding: 5rem 0 6.25rem;
`;

//   <Text style={{ whiteSpace: 'pre', textWrap: 'wrap' }}>{t('temp')}</Text>
