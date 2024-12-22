import { PageHeroSectionProps } from '@pages/HeroSection';
import img_hero from '@assets/images/computer-solutions.png';
import { ITabBarProps } from '@components/TabBar';
import {
  CodeIcon,
  CRMIcon,
  ERMIcon,
  IntegrationIcon,
  SupportIcon,
} from '@components/icons';

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
          icon: <CodeIcon />,
          title: {
            value: 'design-and-development',
          },
          body: {
            value: 'design-and-development-desc',
          },
        },
        {
          icon: <IntegrationIcon />,
          title: {
            value: 'integration-and-support',
          },
          body: {
            value: 'integration-and-support-desc',
          },
        },
        {
          icon: <CRMIcon />,
          title: {
            value: 'developing-crm',
          },
          body: {
            value: 'developing-crm-desc',
          },
        },
        {
          icon: <ERMIcon />,
          title: {
            value: 'developing-erm',
          },
          body: {
            value: 'developing-erm-desc',
          },
        },
        {
          icon: <SupportIcon />,
          title: {
            value: 'tech-support',
          },
          body: {
            value: 'tech-support-desc',
          },
        },
      ],
    },
  ],
};
