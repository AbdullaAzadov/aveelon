import { useContext } from 'react';
import { ProjectContext, TProjectContext } from '@context/ProjectContext';

export const useProject = (): TProjectContext => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
