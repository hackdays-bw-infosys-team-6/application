export type Comparator<X> = (a: X, b: X) => number

export function compare<X>(a: X, b: X): number {
  if (a > b) {
    return 1
  }
  return a < b ? -1 : 0
}

export function compareBoolean(a: boolean, b: boolean) {
  if (a == b) {
    return 0
  }
  return a ? 1 : -1;
}

export function sortByComparators<X>(fns: Comparator<X>[]): Comparator<X> {
  return (a, b) => {
    for (const c of fns) {
      const ret = c(a, b)
      if (ret != 0) {
        return ret
      }
    }
    return 0
  }
}
