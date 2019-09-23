export default class Mouse {
  constructor() {
    window.addEventListener('mousemove', ({x,y}) =>{
      this.x = x
      this.y = y
      }
    )
  }
  getPosition() {
    return {x: this.x, y: this.y}
  }
}
