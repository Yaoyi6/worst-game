export default class Pad {
  constructor(){
    this.ready = false
    window.addEventListener('gamepadconnected', evt => {
      console.log('got a new gamepad')
      this.ready = true
    })
  }
  getAxexX(){
    if (this.ready){
      return console.log(navigator.getGamepads()[0].axes[0])
    }

    return 0
  }
  getPositionY(){
    if (this.ready){
      return console.log(navigator.getGamepads()[0].axes[1])
    }
    return 0
  }
}
