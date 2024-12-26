export interface IProjectListItem {
  id: string | number;
  imgSrc: {
    tablet: string;
    mobile: string;
    desktop: string;
  };
  name: string;
  desc: string;
  category: TProjectCategories;
}

export type TProjectCategories =
  | 'Marketplace'
  | 'E-commerce'
  | 'Business'
  | 'Beauty & Health'
  | 'Education'
  | 'Medicine';

export const ProjectsMarketplaceListData: IProjectListItem[] = [
  {
    id: 1,
    imgSrc: {
      mobile: '/images/projects/OpenSooq/s.png',
      tablet: '/images/projects/OpenSooq/m.png',
      desktop: '/images/projects/OpenSooq/l.png',
    },
    name: 'OpenSooq',
    desc: 'open-sooq-desc',
    category: 'Marketplace',
  },
  {
    id: 2,
    imgSrc: {
      mobile: '/images/projects/Konga/s.png',
      tablet: '/images/projects/Konga/m.png',
      desktop: '/images/projects/Konga/l.png',
    },
    name: 'Konga',
    desc: 'konga-desc',
    category: 'Marketplace',
  },
  {
    id: 3,
    imgSrc: {
      mobile: '/images/projects/IqCars/s.png',
      tablet: '/images/projects/IqCars/m.png',
      desktop: '/images/projects/IqCars/l.png',
    },
    name: 'IQCars',
    desc: 'iq-cars-desc',
    category: 'Marketplace',
  },
  {
    id: 4,
    imgSrc: {
      mobile: '/images/projects/CitiesStore/s.png',
      tablet: '/images/projects/CitiesStore/m.png',
      desktop: '/images/projects/CitiesStore/l.png',
    },
    name: 'Cities Store',
    desc: 'cities-store-desc',
    category: 'Marketplace',
  },
];
export const ProjectsECommerceListData: IProjectListItem[] = [
  {
    id: 1,
    imgSrc: {
      mobile: '/images/projects/Ziskejte/s.png',
      tablet: '/images/projects/Ziskejte/m.png',
      desktop: '/images/projects/Ziskejte/l.png',
    },
    name: 'Ziskejte.cz',
    desc: 'ziskejte-desc',
    category: 'E-commerce',
  },
  {
    id: 2,
    imgSrc: {
      mobile: '/images/projects/Grocery/s.png',
      tablet: '/images/projects/Grocery/m.png',
      desktop: '/images/projects/Grocery/l.png',
    },
    name: 'GROCERY',
    desc: 'grocery-desc',
    category: 'E-commerce',
  },
  {
    id: 3,
    imgSrc: {
      mobile: '/images/projects/Elitestore/s.png',
      tablet: '/images/projects/Elitestore/m.png',
      desktop: '/images/projects/Elitestore/l.png',
    },
    name: 'Elitestore',
    desc: 'elitestore-desc',
    category: 'E-commerce',
  },
  {
    id: 4,
    imgSrc: {
      mobile: '/images/projects/Zahar/s.png',
      tablet: '/images/projects/Zahar/m.png',
      desktop: '/images/projects/Zahar/l.png',
    },
    name: 'Zahar',
    desc: 'zahar-desc',
    category: 'E-commerce',
  },
];

export const ProjectsBusinessListData: IProjectListItem[] = [
  {
    id: 1,
    imgSrc: {
      mobile: '/images/projects/Sanedpartners/s.png',
      tablet: '/images/projects/Sanedpartners/m.png',
      desktop: '/images/projects/Sanedpartners/l.png',
    },
    name: 'Sanedpartners',
    desc: 'sanedpartners-desc',
    category: 'Business',
  },
  {
    id: 2,
    imgSrc: {
      mobile: '/images/projects/CDS-MC/s.png',
      tablet: '/images/projects/CDS-MC/m.png',
      desktop: '/images/projects/CDS-MC/l.png',
    },
    name: 'CDS-MC',
    desc: 'cds-mc-desc',
    category: 'Business',
  },
  {
    id: 3,
    imgSrc: {
      mobile: '/images/projects/Rootsgroupuk/s.png',
      tablet: '/images/projects/Rootsgroupuk/m.png',
      desktop: '/images/projects/Rootsgroupuk/l.png',
    },
    name: 'Rootsgroupuk',
    desc: 'rootsgroupuk-desc',
    category: 'Business',
  },
  {
    id: 4,
    imgSrc: {
      mobile: '/images/projects/Reisebuero-schwarz/s.png',
      tablet: '/images/projects/Reisebuero-schwarz/m.png',
      desktop: '/images/projects/Reisebuero-schwarz/l.png',
    },
    name: 'Reisebuero-schwarz',
    desc: 'reisebuero-schwarz-desc',
    category: 'Business',
  },
  {
    id: 5,
    imgSrc: {
      mobile: '/images/projects/Exact/s.png',
      tablet: '/images/projects/Exact/m.png',
      desktop: '/images/projects/Exact/l.png',
    },
    name: 'Exact',
    desc: 'exact-desc',
    category: 'Business',
  },
  {
    id: 6,
    imgSrc: {
      mobile: '/images/projects/Coldwell-rica/s.png',
      tablet: '/images/projects/Coldwell-rica/m.png',
      desktop: '/images/projects/Coldwell-rica/l.png',
    },
    name: 'Coldwell Banker Costa Rica',
    desc: 'coldwell-rica-desc',
    category: 'Business',
  },
  {
    id: 7,
    imgSrc: {
      mobile: '/images/projects/Coldwell-samara/s.png',
      tablet: '/images/projects/Coldwell-samara/m.png',
      desktop: '/images/projects/Coldwell-samara/l.png',
    },
    name: 'Coldwell Banker Samara',
    desc: 'coldwell-samara-desc',
    category: 'Business',
  },
  {
    id: 8,
    imgSrc: {
      mobile: '/images/projects/Coldwell-cr/s.png',
      tablet: '/images/projects/Coldwell-cr/m.png',
      desktop: '/images/projects/Coldwell-cr/l.png',
    },
    name: 'Coldwell Banker CR',
    desc: 'coldwell-cr-desc',
    category: 'Business',
  },
  {
    id: 9,
    imgSrc: {
      mobile: '/images/projects/Atticus/s.png',
      tablet: '/images/projects/Atticus/m.png',
      desktop: '/images/projects/Atticus/l.png',
    },
    name: 'Atticus',
    desc: 'atticus-desc',
    category: 'Business',
  },
];
export const ProjectsBeautyListData: IProjectListItem[] = [
  {
    id: 1,
    imgSrc: {
      mobile: '/images/projects/Startlivingright-net/s.png',
      tablet: '/images/projects/Startlivingright-net/m.png',
      desktop: '/images/projects/Startlivingright-net/l.png',
    },
    name: 'Startlivingright.net',
    desc: 'startlivingright-net-desc',
    category: 'Beauty & Health',
  },
  {
    id: 2,
    imgSrc: {
      mobile: '/images/projects/startlivingright-com/s.png',
      tablet: '/images/projects/startlivingright-com/m.png',
      desktop: '/images/projects/startlivingright-com/l.png',
    },
    name: 'Startlivingright.com',
    desc: 'startlivingright-com-desc',
    category: 'Beauty & Health',
  },
  {
    id: 3,
    imgSrc: {
      mobile: '/images/projects/OrganicsMillets/s.png',
      tablet: '/images/projects/OrganicsMillets/m.png',
      desktop: '/images/projects/OrganicsMillets/l.png',
    },
    name: 'Organics Millets',
    desc: 'Oorganics-millets-desc',
    category: 'Beauty & Health',
  },
  {
    id: 4,
    imgSrc: {
      mobile: '/images/projects/Honey/s.png',
      tablet: '/images/projects/Honey/m.png',
      desktop: '/images/projects/Honey/l.png',
    },
    name: 'Honey',
    desc: 'honey-desc',
    category: 'Beauty & Health',
  },
];
export const ProjectsEducationListData: IProjectListItem[] = [
  {
    id: 1,
    imgSrc: {
      mobile: '/images/projects/Ustudy/s.png',
      tablet: '/images/projects/Ustudy/m.png',
      desktop: '/images/projects/Ustudy/l.png',
    },
    name: 'Ustudy',
    desc: 'ustudy-desc',
    category: 'Education',
  },
  {
    id: 2,
    imgSrc: {
      mobile: '/images/projects/Growth/s.png',
      tablet: '/images/projects/Growth/m.png',
      desktop: '/images/projects/Growth/l.png',
    },
    name: 'Growth in Motion',
    desc: 'growth-desc',
    category: 'Education',
  },
];
export const ProjectsMedicineListData: IProjectListItem[] = [
  {
    id: 1,
    imgSrc: {
      mobile: '/images/projects/Tanzmed/s.png',
      tablet: '/images/projects/Tanzmed/m.png',
      desktop: '/images/projects/Tanzmed/l.png',
    },
    name: 'Tanzmed',
    desc: 'tanzmed-desc',
    category: 'Medicine',
  },
];
