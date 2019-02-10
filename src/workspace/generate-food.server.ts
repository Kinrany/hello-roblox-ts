import { Workspace } from 'rbx-services';
import * as grid from 'replicated-storage/grid';
import food_part from 'replicated-storage/parts/food';
import Food from 'replicated-storage/rules/food';
import { random, range } from 'replicated-storage/utils';

const folder = new Instance('Folder');
folder.Name = 'Foods';
folder.Parent = Workspace;

const rng = new Random();

const foods: Food[] = [];

const grid_size = 40;
range(-grid_size/2, grid_size/2).forEach(x => {
  range(-grid_size/2, grid_size/2).forEach(y => {
    const position = grid.position(x, y);
    const color = random.color3(rng);
    foods.push({position, color});
  });
});

foods.forEach(food => {
  const part = food_part(food);
  part.Parent = folder;
});
