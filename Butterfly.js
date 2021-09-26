class Butterfly {
    constructor(x, y, size, rotate, color){
        this.x = x
        this.y = y
        this.size = size
        this.rotateVal = rotate
        this.rotateSpeed = Math.random() / 40
        this.rotateDir = Math.random() > 0.5 ? 1 : -1
        this.body = new Body(this.size)
        this.head = new Head(this.size)
        this.rightWing = new Wing('right', this.size, color)
        this.leftWing = new Wing('left', this.size, color)                                     
      }

    move(x, y){
        this.x += x
        this.y += y

    }

    render(){
        push()
        translate(this.x, this.y)
        rotate(this.rotateVal)
        this.body.render()
        this.head.render()
        pop()
        push()
            translate(this.x, this.y)
            rotate(PI/2 + this.rotateVal)
            this.rightWing.render()
            this.leftWing.render()
            translate(-this.x, -this.y)
            pop()
        
    }

    rotate(){
        this.rotateVal += this.rotateSpeed * this.rotateDir
    }

    update(){
        this.rotate()
        this.head.update()

    }
}