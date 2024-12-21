interface IBreakpoints {
  breakpoints: {
    [key: string]: string;
  };
}

type Tprop = IBreakpoints;

export const media = {
  between: (theme: Tprop, min: string, max: string) => {
    const left = theme.breakpoints[`${min}`];
    const right = theme.breakpoints[`${max}`];
    return `@media (min-width: ${left}) and (max-width:${right})`;
  },
  lessThan: (theme: Tprop, value: string) =>
    `@media (max-width: ${theme.breakpoints[`${value}`]})`,
  moreThan: (theme: Tprop, value: string) =>
    `@media (min-width: ${theme.breakpoints[`${value}`]})`,
};
