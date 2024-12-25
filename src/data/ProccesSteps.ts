export interface IProcessStepInfo {
  title: string;
  description: string;
}

export interface IProcessStep {
  tabName: string;
  icon: React.ReactNode;
  info: IProcessStepInfo[];
}
