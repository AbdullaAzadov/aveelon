export interface IStack {
  icon: React.ReactNode;
  name: string;
}

export interface IStackTabItem {
  title?: string | undefined;
  items: IStack[];
}

export interface IStackTab {
  title: string;
  tab: IStackTabItem[];
}

export interface IStackShowcase {
  title: string;
  desc: string;
  stack: IStackTab[];
}
