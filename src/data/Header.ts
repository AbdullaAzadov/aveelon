import { RouteNames } from '@routes/RouteNames';

export const headerLinks: IHeaderLink[] = [
  { name: 'it-services', link: RouteNames.SERVICES },
  { name: 'marketing', link: RouteNames.MARKETING },
  { name: 'portfolio', link: RouteNames.PORTFOLIO },
];

export interface IHeaderLink {
  name: string;
  link: string;
}
