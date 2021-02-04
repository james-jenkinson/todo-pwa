export const arrayToObject = <T1, T2>(
  array: T1[],
  keyMapper: (item: T1) => string,
  valueMapper: (item: T1) => T2
): Record<string, T2> => {
  return array.reduce((previous, current) => {
    const key = keyMapper(current)
    const value = valueMapper(current)
    return Object.assign(previous, { [key]: value })
  }, {})
}
