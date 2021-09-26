let butterflies

function setup(){
    createCanvas(canvasWidth, canvasHeight, WEBGL)
    
    butterflies = Array.from({ length: 30}, () => {
        return new Butterfly(Math.random() * canvasWidth, 
                            Math.random() * canvasHeight, 
                            Math.random() * 100, 
                            Math.random() * 6, 
                            generateRandomColor2(),
                            generateRandomColor2(),
                            )
    })
    console.log(butterflies[0])
    // x, y, size
    //butterfly = new Butterfly(canvasWidth/2, canvasHeight/2 - 20, 100)    
}

function draw(){
    background(20,20,200)
    // butterfly.move(0, -1)
    // butterfly.rotate(0.1)
    translate(- canvasWidth/2, -canvasHeight/2)
    butterflies.forEach( butterfly => {
        butterfly.update()
        butterfly.render()    
    })
    
    
}