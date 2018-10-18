/**
 * @param {CanvasRenderingContext2D} ctx
 */
function draw (ctx) {
    ctx.beginPath()
    ctx.moveTo(90, 110)
    ctx.lineTo(410, 90)
    ctx.lineTo(400, 310)
    ctx.lineTo(100, 300)
    ctx.closePath()
    ctx.stroke()
}

function labelAxis (ctx) {
    ctx.font = '12px sans';
    ctx.fillText('(0, 0)', 6, 14)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(4, 4)
    ctx.stroke()
    for (let y = 100; y <= 300; y += 100) {
        ctx.fillText(`(0, ${y})`, 6, y + 3)
        ctx.beginPath()
        ctx.moveTo(0, y - 0.5)
        ctx.lineTo(4, y - 0.5)
        ctx.stroke()
    }
    for (let x = 100; x <= 400; x += 100) {
        ctx.fillText(`(${x}, 0)`, x, 14)
        ctx.beginPath()
        ctx.moveTo(x - 0.5, 0)
        ctx.lineTo(x - 0.5, 4)
        ctx.stroke()
    }


}

window.addEventListener("load", e => {
    var canvas = document.getElementById('canvas')
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d')
        labelAxis(ctx)
        draw(ctx)
    }
})
