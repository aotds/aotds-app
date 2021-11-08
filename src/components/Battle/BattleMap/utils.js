export const MAP_SCALE = 38;
export const map_scale = (x) => MAP_SCALE * x;
export const coords2map = ([x, y]) => [x, -y].map((x) => MAP_SCALE * x);
