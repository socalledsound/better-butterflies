class Antenna{
    constructor(size, dir){
        this.size = size
        this.dir = dir
        this.offsetX = size/2 * this.dir
        this.initOffsetX = size/2 * this.dir
        this.offsetY = size
        this.color = 'black'
        this.range = 20
        this.speed = Math.random() * 10
    }


    changeSpeed(){
        const coin = Math.random()
        if(coin > 0.7){
            this.speed = Math.random() * 2
        }
    }


    render(){
        console.log(this.offsetX, this.offsetY, this.color, this.size)
        fill(this.color)
        stroke(this.color)
        strokeWeight(this.size/60)
        line(0, 0, 0 - this.offsetX, 0 - this.offsetY)
    }

   


    update(){
        this.changeSpeed()
        
        if(this.offsetX < this.initOffsetX - this.range){
            this.dir *= -1
        } else if(this.offsetX > this.initOffsetX + this.range){
            this.dir *= -1
        }
       
        this.offsetX += (this.dir * this.speed)  
    }
}