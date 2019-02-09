import { Workspace } from 'rbx-services';
import create_tile from 'replicated-storage/tile';
import { range } from 'replicated-storage/utils';
import * as grid from 'replicated-storage/grid';

const folder = new Instance('Folder');
folder.Name = 'Tiles';
folder.Parent = Workspace;

const rng = new Random();

const tile_grid: Part[] = [];
const grid_size = 40;
range(-grid_size/2, grid_size/2).forEach(x => {
  range(-grid_size/2, grid_size/2).forEach(y => {
    const r = rng.NextInteger(0, 2);
    const g = rng.NextInteger(0, 2);
    const b = rng.NextInteger(0, 2);

    tile_grid.push(create_tile({
      pos: grid.position(x, y),
      color: new Color3(r, g, b),
    }));
  });
});

tile_grid.forEach(tile => {
  tile.Parent = folder;
});
