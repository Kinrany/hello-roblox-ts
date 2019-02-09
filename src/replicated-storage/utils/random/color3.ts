export default function color(rng: Random): Color3 {
  const r = rng.NextInteger(0, 2);
  const g = rng.NextInteger(0, 2);
  const b = rng.NextInteger(0, 2);
  return new Color3(r, g, b);
}
