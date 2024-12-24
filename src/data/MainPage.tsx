import { PageHeroSectionProps } from '@pages/HeroSection';
import img_hero from '@assets/images/computer-solutions.png';
import { ITabBarProps } from '@components/Tab/TabBar';
import * as icons from '@components/icons/MainPage/index';

export const MainPageHeroData: PageHeroSectionProps = {
  header: 'main-page-hero-header',
  paragraph: 'main-page-hero-paragraph',
  buttonText: 'leave-a-request',
  imageSrc: img_hero,
};

export const AboutUsData: ITabBarProps = {
  header: 'about-us-in-digits',
  tabs: [
    {
      tabName: '',
      card: [
        {
          icon: null,
          title: {
            value: '12+',
            color: 'brand',
            as: 'h1',
          },
          body: {
            value: 'years-of-experience',
          },
        },
        {
          icon: null,
          title: {
            value: '200+',
            color: 'brand',
            as: 'h1',
          },
          body: {
            value: 'projects-in-portfolio',
          },
        },
        {
          icon: null,
          title: {
            value: '15-mln-plus',
            color: 'brand',
            as: 'h1',
          },
          body: {
            value: 'app-downloads',
          },
        },
        {
          icon: null,
          title: {
            value: '100+',
            color: 'brand',
            as: 'h1',
          },
          body: {
            value: 'of-employees',
          },
        },
      ],
    },
  ],
};

export const allServicesData: ITabBarProps = {
  header: 'what-we-offer',
  tabs: [
    {
      tabName: 'it-services',
      card: [
        {
          icon: <icons.CodeIcon />,
          title: {
            value: 'design-and-development',
          },
          body: {
            value: 'design-and-development-desc',
          },
        },
        {
          icon: <icons.IntegrationIcon />,
          title: {
            value: 'integration-and-support',
          },
          body: {
            value: 'integration-and-support-desc',
          },
        },
        {
          icon: <icons.CRMIcon />,
          title: {
            value: 'developing-crm',
          },
          body: {
            value: 'developing-crm-desc',
          },
        },
        {
          icon: <icons.ERMIcon />,
          title: {
            value: 'developing-erm',
          },
          body: {
            value: 'developing-erm-desc',
          },
        },
        {
          icon: <icons.SupportIcon />,
          title: {
            value: 'tech-support',
          },
          body: {
            value: 'tech-support-desc',
          },
        },
      ],
    },
    {
      tabName: 'marketing',
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
