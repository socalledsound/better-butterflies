class Body{
    constructor(size){
        this.width = size / 3
        this.height = size * 1.5
        this.fillColor = butterflySettings.bodyColor
    }

    render(){
        
        fill(this.fillColor)
        ellipse(0, 0, this.width, this.height)
    }

    update(){
       
    }
}