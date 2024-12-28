export const isObjInArr = <T>(obj: T, arr: T[]): boolean =>
  arr.some((item) => item === obj);
