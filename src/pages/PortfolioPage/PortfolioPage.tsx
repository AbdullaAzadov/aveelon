import { ProjectsList, TabSections } from '@components/index';
import { loadProjectsByCategory } from '@data/projects';
import { IProjectListItem, ProjectsCategoriesData } from '@data/ProtfolioPage';
import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

export const PortfolioPage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [projects, setProjects] = useState<IProjectListItem[]>([]);
  const category = ProjectsCategoriesData[selectedTabIndex];

  useLayoutEffect(() => {
    loadProjectsByCategory(category).then((data) => setProjects(data));
  }, [category]);

  return (
    <SContainer>
      <TabSections
        sections={ProjectsCategoriesData}
        selectedIndex={selectedTabIndex}
        onSelectSection={setSelectedTabIndex}
        size='s'
        outline={false}
      />
      <ProjectsList projects={projects} />
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
