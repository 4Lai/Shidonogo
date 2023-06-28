export const sortByInt = <T>(
  array: T[],
  property: keyof T,
  reverse: boolean = false
) => {
  let dataSort = array.sort((a, b) => {
    return (b[property] as number) - (a[property] as number);
  });
  if (reverse) {
    return dataSort.reverse();
  }
  return dataSort;
};
