export const generateYearsArr = (start: number, end: number): string[] => {
  const yearsArr = [];
  for (let year = end; year >= start; year--) {
    yearsArr.push(year.toString());
  }
  return yearsArr;
};
