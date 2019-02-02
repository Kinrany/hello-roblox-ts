export function range(min: number, max: number, step: number = 1): number[] {
  const arr = [];
  for (let i = min; i < max; i += step) {
    arr.push(i);
  }
  return arr;
}

export default range;
