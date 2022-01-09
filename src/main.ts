import "./crisp-game-lib/bundle.js";
import * as generator from "./generator";
import { stableSort, wayVectors } from "./util";

const viewSize = { x: 160, y: 160 };

(window as any).options = {
  viewSize,
  theme: "dark",
  isShowingScore: false,
  isPlayingBgm: true,
  seed: 10,
};

(window as any).characters = [
  `
ll llll

lllll l

lll lll
`,
  `
lllllll

lllllll

lllllll
`,
  `
llllll
llllll
llllll
llllll
llllll
llllll
`,
  `




 l l

`,
  `
cccc
cwcw
cccc
cccc
`,
  `
cccc
cccc
cwcw
cccc
`,
  `
cccc
wccw
cccc
cccc
`,
  `
cccc
cccc
wccw
cccc
`,
  `
cccc
wcwc
cccc
cccc
`,
  `
cccc
cccc
wcwc
cccc
`,
  `
cccc
cccc
cwcc
cwcc
`,
  `
cccc
cccc
cwcc
ccwc
`,
  `
cccc
wccw
cccc
`,
  `
  ll
   ll
llllll
llllll
   ll
  ll
`,
];

let stage: generator.Stage;
let stageCount = 1;
let nextStageCount = 2;
const offset = vec();
let boxes: { pos: Vector; way: number }[];
let undoButton: Button;
let resetButton: Button;
let solvedTicks = 0;
let boxesHistory: { pos: Vector; way: number }[][];
let pressedPos = vec();
let wasPressed = false;
let isShowingGuide = false;
let showingTripTicks = 0;
let storageStageCount: number;

(window as any).update = function () {
  if (!ticks) {
    undoButton = getButton({
      pos: vec(1, viewSize.y - 8),
      size: vec(25, 7),
      text: "UNDO",
      onClick: () => {
        undo();
      },
    });
    resetButton = getButton({
      pos: vec(viewSize.x - 32, viewSize.y - 8),
      size: vec(31, 7),
      text: "RESET",
      onClick: () => {
        setStage();
      },
    });
    initStageCount();
    setStage();
    isShowingGuide = true;
  }
  times(stage.size.x, (x) =>
    times(stage.size.y, (y) => {
      const g = stage.grid[x][y];
      if (stage.targetGrid[x][y]) {
        color("red");
        char("c", offset.x + x * 6, offset.y + y * 6);
      } else if (g === "wall") {
        color("black");
        char(
          addWithCharCode("a", (x * 3 + y * 7) % 9 === 5 ? 1 : 0),
          offset.x + x * 6,
          offset.y + y * 6
        );
      } else if (g === "empty" && (x * 11 + y * 5) % 7 === 6) {
        color("light_black");
        char("d", offset.x + x * 6, offset.y + y * 6);
      }
    })
  );
  if (solvedTicks === 0) {
    handleInput();
  }
  color("black");
  let isSolved = true;
  const p = vec();
  boxes.forEach((b) => {
    p.set(offset.x + b.pos.x * 6, offset.y + b.pos.y * 6);
    let ch;
    if (solvedTicks > 0) {
      ch = "m";
      p.y += sin(solvedTicks * 0.07) * 2;
      solvedTicks++;
    } else {
      ch = addWithCharCode("e", b.way * 2 + (floor(ticks / 30) % 2));
      if (!stage.targetGrid[b.pos.x][b.pos.y]) {
        isSolved = false;
      }
    }
    char(ch, p);
  });
  if (solvedTicks === 0 && isSolved) {
    play("powerUp");
    solvedTicks = 1;
  }
  if (
    (solvedTicks > 60 && (input.isJustPressed || keyboard.isJustPressed)) ||
    solvedTicks > 300
  ) {
    goToNextStage();
  }
  showingMessages();
  updateButton(undoButton);
  updateButton(resetButton);
};

function handleInput() {
  if (input.isJustPressed) {
    pressedPos.set(input.pos);
    wasPressed = true;
  }
  if (input.isJustReleased) {
    if (wasPressed && pressedPos.distanceTo(input.pos) > 9) {
      const a = pressedPos.angleTo(input.pos);
      const w = wrap(floor((a + PI / 4) / (PI / 2)), 0, 4);
      slipBox(w, stage.grid);
    }
    wasPressed = false;
  }
  if (
    keyboard.code.ArrowRight.isJustPressed ||
    keyboard.code.KeyD.isJustPressed
  ) {
    slipBox(0, stage.grid);
  }
  if (
    keyboard.code.ArrowDown.isJustPressed ||
    keyboard.code.KeyS.isJustPressed
  ) {
    slipBox(1, stage.grid);
  }
  if (
    keyboard.code.ArrowLeft.isJustPressed ||
    keyboard.code.KeyA.isJustPressed
  ) {
    slipBox(2, stage.grid);
  }
  if (keyboard.code.ArrowUp.isJustPressed || keyboard.code.KeyW.isJustPressed) {
    slipBox(3, stage.grid);
  }
  if (keyboard.code.KeyU.isJustPressed) {
    undo();
  }
  if (keyboard.code.KeyR.isJustPressed) {
    setStage();
  }
}

function slipBox(way, grid) {
  play("select");
  boxesHistory.push(
    boxes.map((c) => {
      return { pos: vec(c.pos), way: c.way };
    })
  );
  switch (way) {
    case 0:
      boxes = stableSort(boxes, (c1, c2) => c2.pos.x - c1.pos.x);
      break;
    case 1:
      boxes = stableSort(boxes, (c1, c2) => c2.pos.y - c1.pos.y);
      break;
    case 2:
      boxes = stableSort(boxes, (c1, c2) => c1.pos.x - c2.pos.x);
      break;
    case 3:
      boxes = stableSort(boxes, (c1, c2) => c1.pos.y - c2.pos.y);
      break;
  }
  const wv = wayVectors[way];
  boxes.forEach((b) => {
    b.way = way;
    for (let i = 0; i < 99; i++) {
      b.pos.add(wv);
      if (grid[b.pos.x][b.pos.y] === "wall" || existsBox(b)) {
        b.pos.sub(wv);
        break;
      }
    }
  });
}

function undo() {
  if (boxesHistory.length === 0) {
    return;
  }
  play("hit");
  const ch = boxesHistory.pop();
  ch.forEach((c, i) => {
    boxes[i].pos.set(c.pos);
    boxes[i].way = c.way;
  });
}

function showingMessages() {
  color("black");
  if (showingTripTicks > 0) {
    showingTripTicks--;
    const m = `TRIP ${stageCount}`;
    text(m, (viewSize.x - m.length * 6) / 2 + 3, offset.y - 9);
  }
  if (solvedTicks > 0) {
    text("Arrived!", 59, offset.y + stage.size.y * 6 + 9);
  }
  if (isShowingGuide) {
    text("[Swipe]", 40, 120);
    text("[     ] Move boxes", 40, 127);
    text("[WASD ]", 40, 134);
    text("[R]     Reset", 40, 143);
    text("[U]     Undo", 40, 150);
    times(4, (i) => {
      char("n", 46 + i * 7, 128, { rotation: i });
    });
    if (input.isJustPressed || keyboard.isJustPressed) {
      isShowingGuide = false;
    }
  }
}

function getBoxes(size, grid) {
  boxes = [];
  times(size.x, (x) =>
    times(size.y, (y) => {
      if (grid[x][y] === "box") {
        boxes.push({ pos: vec(x, y), way: 1 });
        grid[x][y] = "empty";
      }
    })
  );
}

function existsBox(b) {
  let exists = false;
  boxes.forEach((ab) => {
    if (b !== ab && b.pos.equals(ab.pos)) {
      exists = true;
    }
  });
  return exists;
}

function goToNextStage() {
  stageCount = nextStageCount;
  nextStageCount++;
  saveToStorage();
  saveAsUrl();
  setStage();
}

function setStage() {
  play("coin");
  stage = generator.createStage(stageCount);
  offset
    .set(
      (viewSize.x - stage.size.x * 6) / 2 + 3,
      (viewSize.y - stage.size.y * 6) / 2 + 3
    )
    .floor();
  getBoxes(stage.size, stage.grid);
  solvedTicks = 0;
  showingTripTicks = 180;
  boxesHistory = [];
}

const stageCountKey = "hakosan_stage_count";

function initStageCount() {
  storageStageCount = loadFromStorage();
  if (storageStageCount == null) {
    storageStageCount = 1;
  }
  const urlStageCount = loadFromUrl();
  stageCount = urlStageCount != null ? urlStageCount : storageStageCount;
  nextStageCount =
    stageCount <= storageStageCount ? stageCount + 1 : storageStageCount;
  saveAsUrl();
}

function saveToStorage() {
  if (storageStageCount != null && storageStageCount > stageCount) {
    return;
  }
  try {
    localStorage.setItem(stageCountKey, String(stageCount));
  } catch (e) {
    console.log(e);
  }
}

function loadFromStorage() {
  let stageCountStr;
  try {
    stageCountStr = localStorage.getItem(stageCountKey);
  } catch (e) {
    console.log(e);
  }
  if (stageCountStr == null) {
    return undefined;
  } else {
    const st = Math.floor(Number(stageCountStr));
    return st > 0 ? st : undefined;
  }
}

function saveAsUrl() {
  const baseUrl = window.location.href.split("?")[0];
  let url = `${baseUrl}?s=${stageCount}`;
  try {
    window.history.replaceState({}, "", url);
  } catch (e) {
    console.log(e);
  }
}

function loadFromUrl() {
  const query = window.location.search.substring(1);
  if (query == null) {
    return undefined;
  }
  let params = query.split("&");
  let stageCountStr: string;
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    const pair = param.split("=");
    if (pair[0] === "s") {
      stageCountStr = pair[1];
    }
  }
  if (stageCountStr == null) {
    return undefined;
  }
  const st = Math.floor(Number(stageCountStr));
  return st > 0 ? st : undefined;
}

declare const onLoad: any;
window.addEventListener("load", onLoad);
