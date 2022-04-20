export const drawRect =(detections, ctx) =>{
    detections.forEach(prediction => {

        // go and get the prediction of our detected images 
        const [x,y, width, height] = prediction['bbox'];
        const text = prediction['class']

         const color = "blue"
        // '#' + Math.floor(Math.random()*167787596).toString()
        ctx.strokeSylt = color
        ctx.font ='18px Arial'

        ctx.fillStyle = color

        //  draw rectangle ad text

        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
        
    });


}