import { PageHeroSectionProps } from '@pages/HeroSection';
import { IProcessStep } from './ProccesSteps';
import img_hero from '@assets/images/connection.png';
import * as icons from '@components/icons/MarketingPage/index';
import { ITabBarProps } from '@components/Tab';

export const MarketingPageHeroData: PageHeroSectionProps = {
  header: 'marketing-page-hero-header',
  paragraph: 'marketing-page-hero-paragraph',
  buttonText: 'leave-a-request',
  imageSrc: img_hero,
};

export const MarkettingProcessData: IProcessStep[] = [
  {
    tabName: 'research-and-planning',
    icon: <icons.NotebookIcon />,
    info: [
      {
        title: 'research',
        description: 'research-desc',
      },
      {
        title: 'planning',
        description: 'planning-desc',
      },
    ],
  },
  {
    tabName: 'paid-and-free-promotion',
    icon: <icons.SpeakerIcon />,
    info: [
      {
        title: 'paid-promotion',
        description: 'paid-promotion-desc',
      },
      {
        title: 'free-promotion',
        description: 'free-promotion-desc',
      },
    ],
  },
  {
    tabName: 'analytics',
    icon: <icons.DashboardIcon />,
    info: [
      {
        title: 'analytics-for-web',
        description: 'analytics-for-web-desc',
      },
      {
        title: 'e2e-analytics',
        description: 'e2e-analytics-desc',
      },
    ],
  },
  {
    tabName: 'optimization',
    icon: <icons.OptimizationIcon />,
    info: [
      {
        title: 'optimization',
        description: 'optimization-process-desc',
      },
    ],
  },
];

export const PromotionMethodsData: ITabBarProps = {
  header: 'promotion-methods',
  tabs: [
    {
      tabName: 'paid-methods',
      card: [
        {
          icon: null,
          title: {
            value: 'context-ad',
          },
          body: {
            value: 'context-ad-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'target-ad',
          },
          body: {
            value: 'target-ad-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'video-ad',
          },
          body: {
            value: 'video-ad-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'media-ad',
          },
          body: {
            value: 'media-ad-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'app-ad',
          },
          body: {
            value: 'app-ad-desc',
          },
        },
      ],
    },
    {
      tabName: 'free-methods',
      card: [
        {
          icon: null,
          title: {
            value: 'seo-promotion',
          },
          body: {
            value: 'seo-promotion-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'smm-promotion',
          },
          body: {
            value: 'smm-promotion-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'app-store-optimization',
          },
          body: {
            value: 'app-store-optimization-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'email-marketing',
          },
          body: {
            value: 'email-marketing-desc2',
          },
        },
      ],
    },
  ],
};
