import "./crisp-game-lib/bundle.js";
import * as generator from "./generator";
import { stableSort, wayVectors } from "./util";

(window as any).options = {
  viewSize: { x: 200, y: 200 },
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
llll
lwlw
llll
llll
`,
  `
llll
llll
lwlw
llll
`,
  `
llll
wllw
llll
llll
`,
  `
llll
llll
wllw
llll
`,
  `
llll
wlwl
llll
llll
`,
  `
llll
llll
wlwl
llll
`,
  `
llll
llll
lwll
lwll
`,
  `
llll
llll
lwll
llwl
`,
  `
llll
wllw
llll
`,
];

let stage;
let stageCount = 1;
const offset = vec();
let crates: { pos: Vector; way: number }[];
let undoButton;
let resetButton;
let solvedTicks;
let cratesHistory: { pos: Vector; way: number }[][];

(window as any).update = function () {
  if (!ticks) {
    undoButton = getButton({
      pos: vec(1, 192),
      size: vec(25, 7),
      text: "UNDO",
      onClick: () => {
        undo();
      },
    });
    resetButton = getButton({
      pos: vec(168, 192),
      size: vec(31, 7),
      text: "RESET",
      onClick: () => {
        setStage();
      },
    });
    setStage();
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
  crates.forEach((c) => {
    p.set(offset.x + c.pos.x * 6, offset.y + c.pos.y * 6);
    let ch;
    if (solvedTicks > 0) {
      ch = "m";
      p.y += sin(solvedTicks * 0.07) * 2;
      solvedTicks++;
    } else {
      ch = addWithCharCode("e", c.way * 2 + (floor(ticks / 30) % 2));
      if (!stage.targetGrid[c.pos.x][c.pos.y]) {
        isSolved = false;
      }
    }
    char(ch, p);
  });
  if (solvedTicks === 0 && isSolved) {
    play("powerUp");
    solvedTicks = 1;
  }
  if ((solvedTicks > 60 && keyboard.isJustPressed) || solvedTicks > 300) {
    stageCount++;
    setStage();
  }
  updateButton(undoButton);
  updateButton(resetButton);
};

function handleInput() {
  if (keyboard.code.ArrowRight.isJustPressed) {
    slipCrate(0, stage.grid);
  }
  if (keyboard.code.ArrowDown.isJustPressed) {
    slipCrate(1, stage.grid);
  }
  if (keyboard.code.ArrowLeft.isJustPressed) {
    slipCrate(2, stage.grid);
  }
  if (keyboard.code.ArrowUp.isJustPressed) {
    slipCrate(3, stage.grid);
  }
  if (keyboard.code.KeyU.isJustPressed) {
    undo();
  }
  if (keyboard.code.KeyR.isJustPressed) {
    setStage();
  }
}

function slipCrate(way, grid) {
  play("select");
  cratesHistory.push(
    crates.map((c) => {
      return { pos: vec(c.pos), way: c.way };
    })
  );
  switch (way) {
    case 0:
      crates = stableSort(crates, (c1, c2) => c2.pos.x - c1.pos.x);
      break;
    case 1:
      crates = stableSort(crates, (c1, c2) => c2.pos.y - c1.pos.y);
      break;
    case 2:
      crates = stableSort(crates, (c1, c2) => c1.pos.x - c2.pos.x);
      break;
    case 3:
      crates = stableSort(crates, (c1, c2) => c1.pos.y - c2.pos.y);
      break;
  }
  const wv = wayVectors[way];
  crates.forEach((c) => {
    c.way = way;
    for (let i = 0; i < 99; i++) {
      c.pos.add(wv);
      if (grid[c.pos.x][c.pos.y] === "wall" || existsCrate(c)) {
        c.pos.sub(wv);
        break;
      }
    }
  });
}

function undo() {
  if (cratesHistory.length === 0) {
    return;
  }
  play("hit");
  const ch = cratesHistory.pop();
  ch.forEach((c, i) => {
    crates[i].pos.set(c.pos);
    crates[i].way = c.way;
  });
}

function getCrates(size, grid) {
  crates = [];
  times(size.x, (x) =>
    times(size.y, (y) => {
      if (grid[x][y] === "crate") {
        crates.push({ pos: vec(x, y), way: 1 });
        grid[x][y] = "empty";
      }
    })
  );
}

function existsCrate(c) {
  let exists = false;
  crates.forEach((ac) => {
    if (c !== ac && c.pos.equals(ac.pos)) {
      exists = true;
    }
  });
  return exists;
}

function setStage() {
  play("coin");
  stage = generator.createStage(stageCount);
  offset
    .set((200 - stage.size.x * 6) / 2 + 3, (200 - stage.size.y * 6) / 2 + 3)
    .floor();
  getCrates(stage.size, stage.grid);
  solvedTicks = 0;
  cratesHistory = [];
}

declare const onLoad: any;
window.addEventListener("load", onLoad);
