import { IProjectListItem, TProjectCategories } from '@data/ProtfolioPage';
import { createContext } from 'react';

export type TProjectContext = {
  projects: Record<string, IProjectListItem[]>;
  isLoading: boolean;
  error: string | null;
  getProjectsByCategory: (
    category: TProjectCategories
  ) => Promise<IProjectListItem[]>;
  getProjectById: (
    id: string | number,
    category: TProjectCategories
  ) => Promise<IProjectListItem | undefined>;
};

const initialState = {
  projects: {},
  isLoading: false,
  error: null,
  getProjectsByCategory: async () => [],
  getProjectById: async () => ({} as IProjectListItem),
};

export const ProjectContext = createContext<TProjectContext>(initialState);
