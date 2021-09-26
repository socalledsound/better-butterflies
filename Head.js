class Head{
    constructor(size){
        this.yOffset = -size/1.5
        this.width = size/4
        this.height = size/4
        this.fillColor = butterflySettings.headColor
        this.leftAntenna = new Antenna(size, -1)
        this.rightAntenna = new Antenna(size, 1)
        //this.leftAntenna = new Antenna(this.x, this.y, 
        //                                 this.x - butterflySettings.antenna.length/2,
        //                                 this.y - butterflySettings.antenna.length, -1)
        // this.rightAntenna = new Antenna(this.x, this.y, 
        //     this.x + butterflySettings.antenna.length/2,
        //     this.y - butterflySettings.antenna.length, 1)
    }


    render(){
        push()
        translate(0, this.yOffset)
        fill(this.fillColor)
        ellipse(0, 0, this.width, this.height)
        this.leftAntenna.render()
        this.rightAntenna.render()
        pop()
    }

    update(){
        this.leftAntenna.update()
        this.rightAntenna.update()
    }
}