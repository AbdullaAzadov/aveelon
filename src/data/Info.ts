export interface IInfoItem {
  title: string;
  desc: string;
}

export interface IInfo {
  title: string;
  desc?: string;
  items: IInfoItem[];
}

export const OfferData: IInfo = {
  title: 'offer-title',
  items: [
    {
      title: 'offer-1',
      desc: 'offer-1-desc',
    },
    {
      title: 'offer-2',
      desc: 'offer-2-desc',
    },
    {
      title: 'offer-3',
      desc: 'offer-3-desc',
    },
    {
      title: 'offer-4',
      desc: 'offer-4-desc',
    },
    {
      title: 'offer-5',
      desc: 'offer-5-desc',
    },
    {
      title: 'offer-6',
      desc: 'offer-6-desc',
    },
    {
      title: 'offer-7',
      desc: 'offer-7-desc',
    },
    {
      title: 'offer-8',
      desc: 'offer-8-desc',
    },
    {
      title: 'offer-9',
      desc: 'offer-9-desc',
    },
    {
      title: 'offer-10',
      desc: 'offer-10-desc',
    },
  ],
};

export const PolicyData: IInfo = {
  title: 'policy-title',
  desc: 'policy-desc',
  items: [
    {
      title: 'policy-1',
      desc: 'policy-1-desc',
    },
    {
      title: 'policy-2',
      desc: 'policy-2-desc',
    },
    {
      title: 'policy-3',
      desc: 'policy-3-desc',
    },
    {
      title: 'policy-4',
      desc: 'policy-4-desc',
    },
    {
      title: 'policy-5',
      desc: 'policy-5-desc',
    },
    {
      title: 'policy-6',
      desc: 'policy-6-desc',
    },
    {
      title: 'policy-7',
      desc: 'policy-7-desc',
    },
    {
      title: 'policy-8',
      desc: 'policy-8-desc',
    },
    {
      title: 'policy-9',
      desc: 'policy-9-desc',
    },
  ],
};
