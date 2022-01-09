import { Random } from "./random";
import { stableSort, wayVectors } from "./util";

export type Stage = {
  size: Vector;
  grid: ("empty" | "wall" | "wallOrEmpty" | "box")[][];
  targetGrid: boolean[][];
  stepCount: number;
};

const random = new Random();

export function createStage(stageCount): Stage {
  random.setSeed((stageCount + 1) * 7);
  let stages: Stage[] = [];
  for (let i = 0; i < clamp(stageCount, 9, 99); i++) {
    const s = tryToCreateStage(stageCount);
    if (s != null) {
      stages.push(s);
    }
  }
  if (stages.length === 0) {
    random.setSeed(0);
    return tryToCreateStage(0);
  }
  stages = stableSort(stages, (s1, s2) => s2.stepCount - s1.stepCount);
  return stages[0];
}

function tryToCreateStage(stageCount): Stage {
  const gs = clamp(
    7 + random.getInt(ceil(sqrt(stageCount)), ceil(sqrt(stageCount) * 2)),
    7,
    24
  );
  const size = vec(gs, random.getInt(ceil(gs * 0.5), gs + 1));
  if (random.get() < 0.5) {
    size.swapXy();
  }
  const grid: ("empty" | "wall" | "wallOrEmpty" | "box")[][] = times(
    size.x,
    () => times(size.y, () => "wallOrEmpty")
  );
  const targetGrid = times(size.x, () => times(size.y, () => false));
  setAroundWalls(size, grid, targetGrid);
  setBoxes(size, 3, grid, targetGrid);
  const startPoss = [
    vec(size.x - 2, 1),
    vec(1, size.y - 2),
    vec(1, 1),
    vec(1, 1),
  ];
  const nextOffsets = [vec(0, 1), vec(1, 0), vec(0, 1), vec(1, 0)];
  const overEdgeOffsets = [vec(-1, 0), vec(0, -1), vec(1, 0), vec(0, 1)];
  let way = random.getInt(0, 4);
  const p = vec();
  const pv = vec();
  const opv = vec();
  let stepCount = 0;
  for (let i = 0; i < clamp(9 + sqrt(stageCount) * 3, 9, 49); i++) {
    way = random.getInt(0, 2) * 2 + (1 - (way % 2));
    let isAbleToSlip = true;
    getBoxes(size, grid).forEach((c) => {
      if (!checkReverseSlipBox(c, way, grid)) {
        isAbleToSlip = false;
      }
    });
    if (!isAbleToSlip) {
      way++;
      continue;
    }
    stepCount++;
    p.set(startPoss[way]);
    pv.set(nextOffsets[way]);
    opv.set(overEdgeOffsets[way]);
    for (;;) {
      if (grid[p.x][p.y] === "box") {
        reverseSlipBox(p, way, grid);
      }
      p.add(pv);
      if (p.x >= size.x - 1) {
        p.x = 1;
        p.y += opv.y;
      } else if (p.y >= size.y - 1) {
        p.y = 1;
        p.x += opv.x;
      }
      if (!p.isInRect(1, 1, size.x - 2, size.y - 2)) {
        break;
      }
    }
  }
  removeEmptyRowsAndColumns(size, grid, targetGrid);
  times(Math.floor((size.x * size.y) / 3), () => {
    addWall(size, grid);
  });
  if (!checkIsValidStage(size, grid, targetGrid)) {
    return undefined;
  }
  return { size, grid, targetGrid, stepCount };
}

function setAroundWalls(size: Vector, grid, targetGrid) {
  times(size.x, (wx) => {
    grid[wx][0] = grid[wx][size.y - 1] = "wall";
    targetGrid[wx][0] = targetGrid[wx][size.y - 1] = false;
  });
  times(size.y - 2, (y) => {
    const wy = y + 1;
    grid[0][wy] = grid[size.x - 1][wy] = "wall";
    targetGrid[0][wy] = targetGrid[size.x - 1][wy] = false;
  });
}

function setBoxes(size: Vector, bc: number, grid, targetGrid) {
  let bx = -1;
  let by = -1;
  let c = 0;
  times(bc, () => {
    while (
      bx <= 0 ||
      bx >= size.x - 1 ||
      by <= 0 ||
      by >= size.y - 1 ||
      random.get() < 0.5 ||
      targetGrid[bx][by]
    ) {
      bx = random.getInt(floor(size.x * 0.2), ceil(size.x * 0.8));
      by = random.getInt(floor(size.y * 0.2), ceil(size.y * 0.8));
      c++;
      if (c > 999) {
        return;
      }
    }
    grid[bx][by] = "box";
    targetGrid[bx][by] = true;
    const wv = random.select(wayVectors);
    bx += wv.x;
    by += wv.y;
  });
}

function checkReverseSlipBox(ocp: Vector, way: number, grid) {
  const wv = wayVectors[way];
  return grid[ocp.x - wv.x][ocp.y - wv.y] !== "empty";
}

function reverseSlipBox(obp: Vector, way: number, grid) {
  const wv = wayVectors[way];
  let bp = vec(obp);
  let lc = 0;
  const lcs: number[] = [];
  for (;;) {
    bp.add(wv);
    const g = grid[bp.x][bp.y];
    if (g === "wall" || g === "box") {
      break;
    }
    lc++;
    times(ceil((countAroundWalls(bp, grid) * 3) / lc), () => {
      lcs.push(lc);
    });
    if (lc > 3) {
      break;
    }
  }
  if (grid[obp.x - wv.x][obp.y - wv.y] === "wallOrEmpty") {
    grid[obp.x - wv.x][obp.y - wv.y] = "wall";
  }
  if (lc === 0) {
    return;
  }
  if (lcs.length > 0) {
    lc = random.select(lcs);
  } else {
    lc = random.getInt(1, lc + 1);
  }
  bp = vec(obp);
  times(lc, () => {
    grid[bp.x][bp.y] = "empty";
    bp.add(wv);
  });
  grid[bp.x][bp.y] = "box";
}

function countAroundWalls(p: Vector, grid) {
  let wallCount = 0;
  wayVectors.forEach((wv) => {
    if (grid[p.x + wv.x][p.y + wv.y] === "wallOrEmpty") {
      wallCount++;
    }
  });
  return wallCount;
}

function removeEmptyRowsAndColumns(size: Vector, grid, targetGrid) {
  let sx = null;
  let ex = null;
  times(size.x, (x) => {
    if (sx == null && !checkEmptyColumn(size, x, grid, targetGrid)) {
      sx = x;
    }
    if (
      ex == null &&
      !checkEmptyColumn(size, size.x - 1 - x, grid, targetGrid)
    ) {
      ex = size.x - 1 - x;
    }
  });
  let sy = null,
    ey = null;
  times(size.y, (y) => {
    if (sy == null && !checkEmptyRow(size, y, grid, targetGrid)) {
      sy = y;
    }
    if (ey == null && !checkEmptyRow(size, size.y - 1 - y, grid, targetGrid)) {
      ey = size.y - 1 - y;
    }
  });
  size.x = ex - sx + 1;
  size.y = ey - sy + 1;
  times(size.x, (x) =>
    times(size.y, (y) => {
      let g = grid[x + sx][y + sy];
      g = g === "emptyOrWall" ? "empty" : g;
      grid[x + 1][y + 1] = g;
      targetGrid[x + 1][y + 1] = targetGrid[x + sx][y + sy];
    })
  );
  size.x += 2;
  size.y += 2;
  setAroundWalls(size, grid, targetGrid);
}

function checkEmptyColumn(size: Vector, x: number, grid, targetGrid) {
  let result = true;
  times(size.y, (y) => {
    const g = grid[x][y];
    const tg = targetGrid[x][y];
    if (g === "empty" || g === "box" || tg) {
      result = false;
      return false;
    }
  });
  return result;
}

function checkEmptyRow(size: Vector, y: number, grid, targetGrid) {
  let result = true;
  times(size.x, (x) => {
    const g = grid[x][y];
    const tg = targetGrid[x][y];
    if (g === "empty" || g === "box" || tg) {
      result = false;
      return false;
    }
  });
  return result;
}

function addWall(size: Vector, grid) {
  const gx = random.getInt(1, size.x - 1);
  const gy = random.getInt(1, size.y - 1);
  let g = grid[gx][gy];
  if (g !== "wallOrEmpty") {
    return;
  }
  let hasWall = false;
  wayVectors.forEach((wv) => {
    const g = grid[gx + wv.x][gy + wv.y];
    if (g === "wall" || g === "box") {
      hasWall = true;
    }
  });
  if (hasWall) {
    grid[gx][gy] = "wall";
  }
}

function checkIsValidStage(size, grid, targetGrid) {
  let isValid = false;
  getBoxes(size, grid).forEach((bp) => {
    if (!targetGrid[bp.x][bp.y]) {
      isValid = true;
    }
  });
  return isValid;
}

function getBoxes(size, grid) {
  const poss: Vector[] = [];
  times(size.x, (x) =>
    times(size.y, (y) => {
      if (grid[x][y] === "box") {
        poss.push(vec(x, y));
      }
    })
  );
  return poss;
}
