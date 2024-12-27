export interface IProjectListItem {
  id: string | number;
  imageSrc: string;
  name: string;
  desc: string;
  category: TProjectCategories;
}

export type TProjectCategories =
  | 'marketplace'
  | 'e-commerce'
  | 'business'
  | 'beauty-health'
  | 'education'
  | 'medicine';

export const ProjectsCategoriesData: TProjectCategories[] = [
  'marketplace',
  'e-commerce',
  'business',
  'beauty-health',
  'education',
  'medicine',
];
