class Wing{
    constructor(side, size, color){
        this.size = size * 3
        this.skew = 1
        this.skewDirection = 1
        this.skewSpeed = 0.0001
        this.side = side === 'right' ? -1 : 1
        this.points = generateWingPoints2(this.size,  this.side, this.skew)
       // this.rightPoints = generateWingPointsShiffman(x, y, -1, this.skew)
        this.color = color
        this.strokeColor = butterflySettings.wingColor2
    }


    move(x, y){
        this.x += x
        this.y += y 
    }

    render(){
  
        beginShape()
            stroke(this.strokeColor)
            fill(this.color)
            this.points.forEach(point => vertex(point.x, point.y))
        endShape(CLOSE)
        
    }

    update(){
        if(this.skew < 0.98 || this.skew > 1.02 ){
            this.skewDirection *= -1
        }
        this.skew += this.skewSpeed * this.skewDirection  
        
        this.points = generateWingPoints2(this.x, this.y, this.size, this.side, this.skew)
    }
}