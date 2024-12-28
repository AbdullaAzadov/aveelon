import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProject } from './useProject';
import {
  IProjectListItem,
  ProjectsCategoriesData,
  TProjectCategories,
} from '@data/PortfolioPage';

export const usePortfolioPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProjectsByCategory, isLoading } = useProject();
  const [projects, setProjects] = useState<IProjectListItem[]>([]);
  const category = searchParams.get('category') || '';

  // fetch projects
  useEffect(() => {
    getProjectsByCategory(category).then((data) => {
      setProjects(data);
    });
  }, [category, getProjectsByCategory]);

  // set default category
  useEffect(() => {
    if (ProjectsCategoriesData.includes(category as TProjectCategories)) return;
    setSearchParams({ category: 'marketplace' });
  }, [category, setSearchParams]);

  // change category
  const onChangeCategory = (index: number) => {
    const newCategory = ProjectsCategoriesData[index];
    setSearchParams({ category: newCategory });
  };

  // get selected index
  let selectedIndex = ProjectsCategoriesData.findIndex(
    (item) => item === category
  );
  selectedIndex = selectedIndex === -1 ? 0 : selectedIndex;

  return { projects, isLoading, onChangeCategory, selectedIndex };
};
