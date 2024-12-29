import { PageHeroSectionProps } from '@pages/HeroSection';
import * as icons from '@components/icons/index';
import { ITabBarProps } from '@components/Tab';
import { IProcessStep } from './ProccesSteps';
import { IStackShowcase } from './StackShowcase';

export const ServicesPageHeroData: PageHeroSectionProps = {
  header: 'services-page-hero-header',
  paragraph: 'services-page-hero-paragraph',
  buttonText: 'leave-a-request',
  imageSrc: '/aveelon-showcase/images/phone.webp',
};

export const ITServicesData: ITabBarProps = {
  header: 'it-services',
  tabs: [
    {
      tabName: '',
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
  ],
};

export const DevProcessData: IProcessStep[] = [
  {
    tabName: 'research-and-planning',
    icon: <icons.PapersIcon />,
    info: [
      {
        title: 'research',
        description: 'research-desc',
      },
      {
        title: 'analyze',
        description: 'analyze-desc',
      },
    ],
  },
  {
    tabName: 'projecting-and-prototyping',
    icon: <icons.ProjectingIcon />,
    info: [
      {
        title: 'projecting',
        description: 'projecting-desc',
      },
      {
        title: 'prototyping',
        description: 'prototyping-desc',
      },
    ],
  },
  {
    tabName: 'dev-and-testing',
    icon: <icons.DevIcon />,
    info: [
      {
        title: 'dev',
        description: 'dev-desc',
      },
      {
        title: 'testing',
        description: 'testing-desc',
      },
    ],
  },
  {
    tabName: 'launch-and-support',
    icon: <icons.RocketIcon />,
    info: [
      {
        title: 'launch',
        description: 'launch-desc',
      },
      {
        title: 'support',
        description: 'support-desc',
      },
    ],
  },
];

export const DevStepsData: ITabBarProps = {
  header: 'dev-app',
  tabs: [
    {
      tabName: 'plannig-step',
      card: [
        {
          icon: null,
          title: {
            value: 'research-and-analyze',
          },
          body: {
            value: 'research-and-analyze-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'generate-tasks',
          },
          body: {
            value: 'generate-tasks-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'projecting-ui',
          },
          body: {
            value: 'projecting-ui-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'prototyping',
          },
          body: {
            value: 'prototyping-desc-2',
          },
        },
        {
          icon: null,
          title: {
            value: 'planning-resources',
          },
          body: {
            value: 'planning-resources-desc',
          },
        },
      ],
    },
    {
      tabName: 'dev-step',
      card: [
        {
          icon: null,
          title: {
            value: 'coding',
          },
          body: {
            value: 'coding-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'testing',
          },
          body: {
            value: 'testing-desc-2',
          },
        },
        {
          icon: null,
          title: {
            value: 'optimization',
          },
          body: {
            value: 'optimization-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'running',
          },
          body: {
            value: 'running-desc',
          },
        },
        {
          icon: null,
          title: {
            value: 'support-and-updating',
          },
          body: {
            value: 'support-and-updating-desc',
          },
        },
      ],
    },
  ],
};

export const TechStackData: IStackShowcase = {
  title: 'tech-capabilities',
  desc: 'tech-capabilities-desc',
  stack: [
    {
      title: 'Front-End',
      tab: [
        {
          items: [
            {
              name: 'HTML',
              icon: <icons.HTMLIcon />,
            },
            {
              name: 'CSS',
              icon: <icons.CSSIcon />,
            },
            {
              name: 'JavaScript',
              icon: <icons.JSIcon />,
            },
            {
              name: 'TypeScript',
              icon: <icons.TSIcon />,
            },
            {
              name: 'React',
              icon: <icons.ReactIcon />,
            },
            {
              name: 'Angular',
              icon: <icons.AngularIcon />,
            },
            {
              name: 'Vue',
              icon: <icons.VueIcon />,
            },
          ],
        },
      ],
    },
    {
      title: 'Back-End',
      tab: [
        {
          items: [
            {
              name: 'Spring',
              icon: <icons.SpringIcon />,
            },
            {
              name: 'Laravel',
              icon: <icons.LaravelIcon />,
            },
            {
              name: 'Golang',
              icon: <icons.GolangIcon />,
            },
            {
              name: 'Node.js',
              icon: <icons.NodeJSIcon />,
            },
            {
              name: 'Django',
              icon: <icons.DjangoIcon />,
            },
          ],
        },
      ],
    },
    {
      title: 'mobile-apps',
      tab: [
        {
          items: [
            {
              name: 'Swift',
              icon: <icons.SwiftIcon />,
            },
            {
              name: 'Kotlin',
              icon: <icons.KotlinIcon />,
            },
            {
              name: 'Flutter',
              icon: <icons.FlutterIcon />,
            },
          ],
        },
      ],
    },
    {
      title: 'database',
      tab: [
        {
          items: [
            {
              name: 'AWS',
              icon: <icons.AWSIcon />,
            },
            {
              name: 'PostgreSQL',
              icon: <icons.PostgresIcon />,
            },
            {
              name: 'MySQL',
              icon: <icons.MySQLIcon />,
            },
            {
              name: 'Mongo',
              icon: <icons.MongoIcon />,
            },
            {
              name: 'Firebase',
              icon: <icons.FirebaseIcon />,
            },
          ],
        },
      ],
    },
  ],
};
