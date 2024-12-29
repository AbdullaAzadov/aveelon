import { PageHeroSectionProps } from '@pages/HeroSection';
import { IProcessStep } from './ProccesSteps';
import * as icons from '@components/icons/index';
import { ITabBarProps } from '@components/Tab';
import { IStackShowcase } from './StackShowcase';

export const MarketingPageHeroData: PageHeroSectionProps = {
  header: 'marketing-page-hero-header',
  paragraph: 'marketing-page-hero-paragraph',
  buttonText: 'leave-a-request',
  imageSrc: '/aveelon-showcase/images/connection.webp',
};

export const MarketingServicesData: ITabBarProps = {
  header: 'marketing-services',
  tabs: [
    {
      tabName: '',
      card: [
        {
          icon: <icons.MarketingContentIcon />,
          title: {
            value: 'content-marketing',
          },
          body: {
            value: 'content-marketing-desc',
          },
        },
        {
          icon: <icons.SEOIcon />,
          title: {
            value: 'seo-optimization',
          },
          body: {
            value: 'seo-optimization-desc',
          },
        },
        {
          icon: <icons.SMMIcon />,
          title: {
            value: 'socials-and-smm',
          },
          body: {
            value: 'socials-and-smm-desc',
          },
        },
        {
          icon: <icons.EmailMarketingIcon />,
          title: {
            value: 'email-marketing',
          },
          body: {
            value: 'email-marketing-desc',
          },
        },
        {
          icon: <icons.AnalyzeMarketingIcon />,
          title: {
            value: 'analyzing-and-optimization-marketing',
          },
          body: {
            value: 'analyzing-and-optimization-marketing-desc',
          },
        },
      ],
    },
  ],
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

export const MarketingStackData: IStackShowcase = {
  title: 'tech-capabilities',
  desc: 'tech-capabilities-desc',
  stack: [
    {
      title: 'marketing',
      tab: [
        {
          items: [
            {
              name: 'Google',
              icon: <icons.GoogleIcon />,
            },
            {
              name: 'Sendpulse',
              icon: <icons.SendpulseIcon />,
            },
            {
              name: 'Mailchimp',
              icon: <icons.MailchimpIcon />,
            },
            {
              name: 'Yandex',
              icon: <icons.YandexIcon />,
            },
            {
              name: 'LinkedIn',
              icon: <icons.LinkedInIcon />,
            },
            {
              name: 'Twitter',
              icon: <icons.TwitterIcon />,
            },
            {
              name: 'Facebook',
              icon: <icons.FacebookIcon />,
            },
            {
              name: 'TikTok',
              icon: <icons.TikTokIcon />,
            },
            {
              name: 'Getresponse',
              icon: <icons.GetresponseIcon />,
            },
          ],
        },
      ],
    },
    {
      title: 'analytics',
      tab: [
        {
          title: 'analytics-for-web',
          items: [
            {
              name: 'Yandex Metrica',
              icon: <icons.YandexMetricaIcon />,
            },
            {
              name: 'Google Analytics',
              icon: <icons.GoogleAnalyticsIcon />,
            },
            {
              name: 'Excel',
              icon: <icons.ExcelIcon />,
            },
            {
              name: 'Power BI',
              icon: <icons.PowerBIIcon />,
            },
            {
              name: 'Python',
              icon: <icons.PythonIcon />,
            },
            {
              name: 'SQL',
              icon: <icons.SQLIcon />,
            },
            {
              name: 'Tableau',
              icon: <icons.TableauIcon />,
            },
            {
              name: 'AppsFlyer',
              icon: <icons.AppsFlyerIcon />,
            },
            {
              name: 'Amplitude',
              icon: <icons.AmplitudeIcon />,
            },
          ],
        },
        {
          title: 'e2e-analytics',
          items: [
            {
              name: 'Roistat',
              icon: <icons.RoistatIcon />,
            },
            {
              name: 'Power BI',
              icon: <icons.PowerBIIcon />,
            },
          ],
        },
      ],
    },
  ],
};
