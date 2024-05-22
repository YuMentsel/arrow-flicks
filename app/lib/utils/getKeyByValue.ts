export const getKeyByValue = (object: SortByOptions, value: string): string | null =>
  Object.keys(object).find((key) => object[key] === value) ?? null;
