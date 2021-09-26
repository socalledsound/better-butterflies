const coin = () => Math.random() > 0.5 ? true : false

const generateRandomColor = () => `#${Math.floor(Math.random() *2 **24).toString(16)}`
const generateRandomColor2 = () => Array.from({length: 4}, (el, i) => {
    if(i < 3){
        return Math.floor(Math.random() * 255)
    }else{
        return Math.floor(Math.random() * 122) + 100
    }
    
})

const generateRandomColor3 = () => `rgba(${Math.random()*255},
                                            ${Math.random()*255},
                                            ${Math.random()*255},
                                            ${Math.random()},)`

const generateWingPoints2 = (size, dir, skew) =>{
    
    const points = []
    const inc = PI/80
    const start = (PI/2) * dir
    const end = dir < 0 ? PI/2 : 3 * PI /2
    //for (var a = PI / 2; a <= 3 * PI / 2; a += da)
    for (let a = start ; a <= end; a += inc) {
        
        const r = sin(2 * a) * size
        const x = r * cos(a * skew) 
        const y = r * sin(a * skew) + size/16 * dir * -1
        
        points.push({x, y})
    
      }
    return points
}

// const generateTopWingPoints = (bodyX, bodyY, size, side) => {
//     const dir = side === 'right' ? 1 : -1
    
//     const points = Array.from({length: butterflySettings.numPoints}, (el, idx) => {
//         const theta = idx/360 * Math.PI * 2
//         const x = bodyX + (size * Math.sin(theta)) * dir
//         const y = bodyY + (size * Math.cos(theta)) * dir
//         return {x, y}
//     })

//     return points
// }

// const generateBottomWingPoints = (bodyX, bodyY, size, side) => {
//     const dir = side === 'right' ? 1 : -1
    
//     const points = Array.from({length: butterflySettings.numPoints}, (el, idx) => {
//         const theta = idx/360
//         const x = bodyX + (size * Math.sin(theta)) * dir
//         const y = bodyY + (size * Math.cos(theta)) * dir
//         return {x, y}
//     })

//     return points
// }