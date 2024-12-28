import { IProjectListItem } from '@data/ProtfolioPage';
import { createContext } from 'react';

export type TProjectContext = {
  projects: Record<string, IProjectListItem[]>;
  isLoading: boolean;
  error: string | null;
  getProjectsByCategory: (category: string) => Promise<IProjectListItem[]>;
};

const initialState = {
  projects: {},
  isLoading: false,
  error: null,
  getProjectsByCategory: async () => [],
};

export const ProjectContext = createContext<TProjectContext>(initialState);
