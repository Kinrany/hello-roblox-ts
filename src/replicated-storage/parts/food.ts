import * as grid from 'replicated-storage/grid';
import Food from 'replicated-storage/rules/food';

const size = 2;
const height = 3;

export function create({position, color}: Food): Part {
  const food = new Instance('Part');
  food.Name = 'Food';
  food.Color = color;
  food.Size = new Vector3(size, size, size);
  food.Position = grid.to_workspace(position, height);
  return food;
}

export default create;
