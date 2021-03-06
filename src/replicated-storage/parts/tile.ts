import * as grid from 'replicated-storage/grid';
import Tile from 'replicated-storage/rules/tile';

const part_height = 2;
const grid_height = 0;

export function create({position, color}: Tile): Part {
  const tile = new Instance('Part');
  tile.Name = 'Tile';
  tile.Color = color;
  tile.Size = new Vector3(grid.unit, part_height, grid.unit);
  tile.Anchored = true;
  tile.Position = grid.to_workspace(position, grid_height);
  return tile;
}

export default create;
