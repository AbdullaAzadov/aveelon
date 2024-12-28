import { IProjectListItem } from '@data/ProtfolioPage';
import { useState } from 'react';
import { ProjectContext } from './ProjectContext';

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cache, setCache] = useState<Record<string, IProjectListItem[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProjectsByCategory = async (
    category: string
  ): Promise<IProjectListItem[]> => {
    if (cache[category]) {
      return cache[category];
    }

    setIsLoading(true);
    setError(null);

    const startTime = performance.now();
    try {
      const data = await import(`./../data/projects/${category}.json`);
      const projects = data.default;
      setCache((prev) => ({ ...prev, [category]: projects }));

      const elapsedTime = performance.now() - startTime;
      const remainingDelay = Math.max(0, 300 - elapsedTime);
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
      value={{ projects: cache, getProjectsByCategory, isLoading, error }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
