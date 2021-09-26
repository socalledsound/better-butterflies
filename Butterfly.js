class Butterfly {
    constructor(x, y, size, rotate, color1, color2){
        this.x = x
        this.y = y
        this.position = createVector(x, y)
        this.velocity =  createVector(random(-1, 1), random(-1, 1))
        this.heading = rotate
        this.acceleration = createVector(0, 0)
        this.maxSpeed = 1
        this.maxForce = 0.1 
        this.size = size
        this.rotateVal = createVector(0, 0)
        this.rotateSpeed = createVector(random(-1,1), random(-1,1))
        this.rotateDir = Math.random() > 0.5 ? 1 : -1
        this.body = new Body(this.size)
        this.head = new Head(this.size)
        this.rightWing = new Wing('right', this.size, color1, color2)
        this.leftWing = new Wing('left', this.size, color1, color2)
        this.someValue = createVector(0, 0)                                     
      }

    calculateHeading(){
        const heading = createVector(random(-0.1, 0.1),(-0.1, 0.1))
        //this.rotateSpeed = createVector(random(-10,10), random(-10,10))
        heading.add(this.rotateSpeed)
        //console.log(heading)
        return heading
    }  

    checkEdges(){
            if (this.position.x < -this.size){
                this.position.x = canvasWidth + this.size
            }
            if (this.position.y < -this.size) {
                this.position.y = canvasHeight + this.size
            }
            if (this.position.x > canvasWidth + this.size) {
                this.position.x = -this.size
            }
            if (this.position.y > canvasHeight + this.size){
                this.position.y = -this.size
            }
          
    }

    move(){
        // this.x += x
        // this.y += y
        
        this.acceleration.add(this.calculateHeading().div(100,100))

    }

    render(){
        push()
        translate(this.position.x, this.position.y)
        rotate(this.rotateVal)
        rotateX(0)
        this.body.render()
        this.head.render()
        pop()
        push()
            translate(this.position.x, this.position.y)
            rotate(PI/2 + this.rotateVal)
            
            push()
            rotateX(this.rightWing.rotZValue/100)
            this.rightWing.render()
            pop()
            push()
            rotateX(this.leftWing.rotZValue)
            this.leftWing.render()
            pop()
            translate(-this.x, -this.y)
        pop()
        
    }

    rotate(){
        // const coin = Math.random()
        // if(coin > 0.5){
        //     this.rotateDir *= -1
        // }
        //this.rotateDir = coin() ? this.rotateDir : this.rotateDir *= -1
        //let theta = this.velocity.heading() + radians(90);
        //this.rotateVal += this.rotateSpeed * this.rotateDir
        this.rotateSpeed.add(random(-1,1), random(-1,1))
        this.rotateVal = this.velocity.heading() + radians(90)
    }

    update(){
        this.rotate()
        this.move()
        this.checkEdges()
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.head.update()
        this.rightWing.update()
        this.leftWing.update()

    }
}