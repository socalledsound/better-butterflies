class Wing{
    constructor(side, size, color, color2){
        this.size = size * 3
        this.skew = 1
        this.skewDirection = 1
        this.skewSpeed = 0.0001
        this.side = side === 'right' ? -1 : 1
        this.points = generateWingPoints2(this.size,  this.side, this.skew)
       // this.rightPoints = generateWingPointsShiffman(x, y, -1, this.skew)
        this.color = color
        this.color2 = color2
        this.strokeColor = butterflySettings.wingColor2
        this.numDots = 1
        // this.wingDots = Array.from({length: this.numDots}, (el, i) => {
        //     return new WingDot(this.points[i], this.size, this.color2)
        // })
        this.wingDot1 = new WingDot(this.size, this.side, 1, color2)
        this.wingDot2 = new WingDot(this.size, this.side, -1, color2)
        this.rotZValue = Math.random() * 60
        this.rotZinc = 0.1
        this.rotZDir = 1
        this.maxRotZ = 30
    }

    flap(){
        // if(this.rotZValue > this.maxRotZ){
        //     this.rotZDir *= -1
        // }
        this.rotZValue += this.rotZinc * this.rotZDir
        console.log(this.rotZValue)
    }

    render(){
        
        // console.log(this.rotZValue)
         //rotateX(this.rotZValue/100)
        beginShape()
            stroke(this.strokeColor)
            fill(this.color)
            this.points.forEach(point => vertex(point.x, point.y))
        endShape(CLOSE)
        //this.wingDots.forEach(dot => dot.render())
        //this.wingDot1.render()
        this.wingDot2.render()
        
    }

    update(){
        this.flap()
    //     if(this.skew < 0.98 || this.skew > 1.02 ){
    //         this.skewDirection *= -1
    //     }
    //     this.skew += this.skewSpeed * this.skewDirection  
        
    //     this.points = generateWingPoints2(this.x, this.y, this.size, this.side, this.skew)
    
    }
}