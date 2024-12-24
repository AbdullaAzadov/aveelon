interface IBreakpoints {
  breakpoints: {
    [key: string]: string;
  };
}

type Tprop = IBreakpoints;

type Tmedia = {
  between: (
    theme: Tprop,
    min: string,
    max: string,
    minInclusive?: boolean,
    maxInclusive?: boolean
  ) => string;
  lessThan: (theme: Tprop, value: string) => string;
  moreThan: (theme: Tprop, value: string) => string;
};

export const media: Tmedia = {
  between: (theme, min, max, minInclusive = true, maxInclusive = true) => {
    let left = theme.breakpoints[min];
    let right = theme.breakpoints[max];

    if (!minInclusive) left = addToPx(left, 1);
    if (!maxInclusive) right = addToPx(right, -1);

    return `@media (min-width: ${left}) and (max-width:${right})`;
  },
  lessThan: (theme: Tprop, value) =>
    `@media (max-width: ${theme.breakpoints[`${value}`]})`,
  moreThan: (theme: Tprop, value) =>
    `@media (min-width: ${theme.breakpoints[`${value}`]})`,
};

export function percentageClamp(
  minWidth: number,
  maxWidth: number,
  minPercent: number,
  maxPercent: number
) {
  return `clamp(
    ${minPercent}%,
    calc(${minPercent}% + (${maxPercent}% - ${minPercent}%) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))),
    ${maxPercent}%
  )`;
}

function addToPx(target: string, value: number) {
  return `${Number(target.replace('px', '')) + value}px`;
}
