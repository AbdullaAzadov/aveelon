import {
  IProjectListItem,
  ProjectsCategoriesData,
  TProjectCategories,
} from '@data/PortfolioPage';
import { useState } from 'react';
import { ProjectContext } from './ProjectContext';
import { isObjInArr } from '@utils/array';

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cache, setCache] = useState<Record<string, IProjectListItem[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProjectById = async (
    id: string | number,
    category: TProjectCategories
  ): Promise<IProjectListItem | undefined> => {
    const startTime = performance.now();
    // check cache for category and if it's not in cache, load
    let res: IProjectListItem | undefined = undefined;
    if (!cache[category]) {
      const newCategory = await getProjectsByCategory(category);
      res = findProjectInCategory(id, newCategory);
    } else {
      res = findProjectInCategory(id, cache[category]);
    }

    const elapsedTime = performance.now() - startTime;
    const remainingDelay = Math.max(0, 150 - elapsedTime);
    await new Promise((resolve) => setTimeout(resolve, remainingDelay)); // Исскуственная задержка
    return res;
  };

  const findProjectInCategory = (
    id: string | number,
    data: IProjectListItem[]
  ): IProjectListItem | undefined => {
    return data?.find((p) => p.id === id);
  };

  const getProjectsByCategory = async (
    category: string
  ): Promise<IProjectListItem[]> => {
    // check cache

    if (cache[category]) {
      return cache[category];
    }
    // if category is valid and not in cache, load
    if (isObjInArr(category, ProjectsCategoriesData))
      return await fetchCategory(category as TProjectCategories);
    const defaultCategory = ProjectsCategoriesData[0];
    const defaultData = cache[defaultCategory];
    if (defaultData) return defaultData;
    return await fetchCategory(defaultCategory as TProjectCategories);
  };

  const fetchCategory = async (category: TProjectCategories) => {
    setIsLoading(true);
    setError(null);

    const startTime = performance.now();
    try {
      const data = await import(`./../data/projects/${category}.json`);
      const projects = data.default;
      setCache((prev) => ({ ...prev, [category]: projects }));

      const elapsedTime = performance.now() - startTime;
      const remainingDelay = Math.max(0, 200 - elapsedTime);
      await new Promise((resolve) => setTimeout(resolve, remainingDelay)); // Исскуственная задержка

      return projects;
    } catch (err) {
      setError(`Failed to load projects for category: ${category}`);
      console.error(err);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: cache,
        getProjectsByCategory,
        getProjectById,
        isLoading,
        error,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
