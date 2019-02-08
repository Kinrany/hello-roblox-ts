import * as grid from './grid';

const tile_width = 10;

export interface Params {
  pos: grid.Position;
  color: Color3;
}

export function create({pos, color}: Params, parent?: Instance): Part {
  const tile = new Instance('Part');
  tile.Name = 'Tile';
  tile.Color = color;
  tile.Size = new Vector3(grid.grid_scale, 10, grid.grid_scale);
  tile.Anchored = true;
  tile.Position = grid.to_workspace(pos);
  return tile;
}

export default create;
