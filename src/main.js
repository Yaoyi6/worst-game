import Mouse from "./entites/Mouse";
import Pad from "./entites/pad";

const CONFIG = {
  board: {
    dimensions: {
      x: 800,
      y: 600
    }
  }
}

class Cursor {
  constructor() { // append later
    this.position = {
      x: Math.floor(CONFIG.board.dimensions.x/ 4 + Math.random()*CONFIG.board.dimensions.x * 1 / 2),
      y: Math.floor(CONFIG.board.dimensions.y/ 4 + Math.random()*CONFIG.board.dimensions.y * 1 / 2)
    }
  }

  // direction: 'x' | 'y'
  move(direction, distance){
    this.position[direction] += distance;
  }

  set(position){
    this.position = position;
  }

  get() {
    return this.position;
  }
}


const cursor = new Cursor();
const mouse = new Mouse();

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const cursorSprite = new Image();
cursorSprite.src = '/assets/smile.png';

cursor.get()
function gameLoop(event) {
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, CONFIG.board.dimensions.x, CONFIG.board.dimensions.y);
  cursor.set(mouse.getPosition())
  const {x, y} = cursor.get();


  //cursor.move('x', pad.getAxexX()*10)
  //cursor.move('y', pad.getAxexY()*10)
  cursor.move('x', x)
  cursor.move('y', y)
  ctx.drawImage(cursorSprite, x, y)

  window.requestAnimationFrame(gameLoop)
}

gameLoop();

const moveLeftBtn = document.getElementById('move_left')
moveLeftBtn.addEventListener('click', () => {
  cursor.move('x', -10)
});

