import { useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ProjectMockUpImage } from '@components/index';
import { IProjectListItem, TProjectCategories } from '@data/ProtfolioPage';
import { useProject } from '@hooks/useProject';

export const ProjectPage = () => {
  const nav = useNavigate();
  const [project, setProject] = useState<IProjectListItem | null>(null);
  const { getProjectById } = useProject();
  const params = useParams();
  const category = params.category || '';
  const id = params.id || '';

  useLayoutEffect(() => {
    getProjectById(id, category as TProjectCategories).then((p) => {
      if (!p) return nav('/');
      setProject(p);
    });
  }, [id, category]);

  if (project) console.log(project);

  return (
    <SWrapper>
      <ProjectMockUpImage src={''} usage='details' />
    </SWrapper>
  );
};

const SWrapper = styled.div``;
