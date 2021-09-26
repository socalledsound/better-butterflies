class WingDot{
    constructor(size, side, top, color){
        this.x = size * 0.4 * side
        this.y = size * 0.4 * side * top
        this.width = size/6
        this.height = size/6
        this.color = color
    }

    render(){
       
        fill(this.color)
        ellipse(this.x, this.y, this.width, this.height)
    }
}