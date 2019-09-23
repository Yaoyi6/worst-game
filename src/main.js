import Mouse from "./entites/Mouse";
import Pad from "./entites/pad";
import Ui from "./entites/Ui";

const canvas = document.getElementById('board');


//EX O2
// const ui = new Ui(canvas)
// ui.drawGrid(40,10,10)
// canvas.addEventListener('click', (event)=>{
//   console.log(event.clientX/40,event.clientY/40)
//   let x = Math.floor(event.clientX/40)
//   let y = Math.floor(event.clientY/40)
//   if(x<10&&y<10){
//     const c = canvas.getContext("2d");
//     const color = ['red','pink','yellow','black','blue','green']
//     c.fillStyle = color[Math.floor(Math.random()*color.length)]
//     c.fillRect(x*40,y*40,40,40)
//   }
// })


//EX O1
// const CONFIG = {
//   board: {
//     dimensions: {
//       x: 800,
//       y: 600
//     }
//   }
// }
//
// class Cursor {
//   constructor() { // append later
//     this.position = {
//       x: Math.floor(CONFIG.board.dimensions.x/ 4 + Math.random()*CONFIG.board.dimensions.x * 1 / 2),
//       y: Math.floor(CONFIG.board.dimensions.y/ 4 + Math.random()*CONFIG.board.dimensions.y * 1 / 2)
//     }
//   }
//
//   // direction: 'x' | 'y'
//   move(direction, distance){
//     this.position[direction] += distance;
//   }
//
//   set(position){
//     this.position = position;
//   }
//
//   get() {
//     return this.position;
//   }
// }

// ctx.lineWidth = 10
// ctx.fillStyle = 'blue'
// ctx.strokeStyle = 'orange'
// ctx.rect(10, 10, 50, 50)
// ctx.stroke()
// ctx.arc(100, 35, 25, 0, 2 * Math.PI)
// ctx.fill()


// const cursor = new Cursor();
// const mouse = new Mouse();

// const cursorSprite = new Image();
// cursorSprite.src = '/assets/smile.png';
//
// cursor.get()
// function gameLoop(event) {
//   ctx.fillStyle = 'green';
//   ctx.fillRect(0, 0, CONFIG.board.dimensions.x, CONFIG.board.dimensions.y);
//   cursor.set(mouse.getPosition())
//   const {x, y} = cursor.get();
//
//
//   //cursor.move('x', pad.getAxexX()*10)
//   //cursor.move('y', pad.getAxexY()*10)
//   cursor.move('x', x)
//   cursor.move('y', y)
//   ctx.drawImage(cursorSprite, x, y)
//
//   window.requestAnimationFrame(gameLoop)
// }
//
// gameLoop();
//
// const moveLeftBtn = document.getElementById('move_left')
// moveLeftBtn.addEventListener('click', () => {
//   cursor.move('x', -10)
// });

