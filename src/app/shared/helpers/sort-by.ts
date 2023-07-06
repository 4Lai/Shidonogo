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

export const sortByInte = <T>(
  array: T[],
  property: keyof T,
  property2: any,
  reverse: boolean = false
) => {
  let dataSort = array.sort((a, b) => {
    return (
      (b[property][property2] as number) - (a[property][property2] as number)
    );
  });
  if (reverse) {
    return dataSort.reverse();
  }
  return dataSort;
};
