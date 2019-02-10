import { Workspace } from 'rbx-services';
import * as grid from 'replicated-storage/grid';
import tile_part from 'replicated-storage/parts/tile';
import Tile from 'replicated-storage/rules/tile';
import { random, range } from 'replicated-storage/utils';

const folder = new Instance('Folder');
folder.Name = 'Tiles';
folder.Parent = Workspace;

const rng = new Random();

const tiles: Tile[] = [];
const grid_size = 40;
range(-grid_size/2, grid_size/2).forEach(x => {
  range(-grid_size/2, grid_size/2).forEach(y => {
    const position = grid.position(x, y);
    const color = random.color3(rng);
    tiles.push({position, color});
  });
});

tiles.forEach(tile => {
  const part = tile_part(tile);
  part.Parent = folder;
});
