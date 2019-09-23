export default class Ui {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
  }

  drawGrid(length, cols, rows) {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++){
        this.ctx.rect(row*length,col*length,length,length)
      }
    }
    this.ctx.stroke()
  }

}
