import { RouteNames } from '@routes/RouteNames';

export interface IFooterLinkSection {
  header: string;
  links: IFooterLinkItem[];
}

export interface IFooterLinkItem {
  name: string;
  link: keyof typeof RouteNames | string;
}

export const footerLinks: IFooterLinkSection[] = [
  {
    header: 'our-services',
    links: [
      { name: 'it-services', link: RouteNames.SERVICES },
      { name: 'marketing', link: RouteNames.MARKETING },
    ],
  },
  {
    header: 'our-works',
    links: [{ name: 'portfolio', link: RouteNames.PORTFOLIO }],
  },
  {
    header: 'information',
    links: [
      { name: 'public-offer', link: RouteNames.PUBLIC_OFFER },
      { name: 'privacy-policy', link: RouteNames.PRIVACY_POLICY },
    ],
  },
];
