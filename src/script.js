const CONFIG = {
  board: {
    dimensions: {
      x: 800,
      y: 600
    }
  }
}

class Script {
  constructor() { // append later
    this.position = {
      x: Math.floor(CONFIG.board.dimensions.x / 4 + Math.random() * CONFIG.board.dimensions.x * 1 / 2),
      y: Math.floor(CONFIG.board.dimensions.y / 4 + Math.random() * CONFIG.board.dimensions.y * 1 / 2)
    }
  }

  // direction: 'x' | 'y'
  move(direction, distance) {
    this.position[direction] += distance;
  }

  get() {
    return this.position;
  }
}

const cursor = new Script();
cursor.get()

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const cursorSprite = new Image();
cursorSprite.src = '/assets/smile.png';

function gameLoop() {
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, CONFIG.board.dimensions.x, CONFIG.board.dimensions.y);
  const {x, y} = cursor.get();
  ctx.drawImage(cursorSprite, x, y)

  window.requestAnimationFrame(gameLoop)
}

gameLoop();

const moveLeftBtn = document.getElementById('move_left')
moveLeftBtn.addEventListener('click', () => {
  cursor.move('x', -10)
});

export Script
