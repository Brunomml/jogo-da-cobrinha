ctx = document.querySelector('.canvas').getContext('2d')

function draw_head() {
    ctx.fillRect(player.head.x, player.head.y, 20, 20)
}

function draw_body() {
    const body = player.body
    body.forEach(({x, y}) => {
        ctx.fillRect(x, y, 20, 20)
    })
}

function draw_fruits() {
    fruits.forEach(({x, y}) =>{
        ctx.fillStyle = "#ff0000"
        ctx.fillRect(x, y, 20, 20)
    })
}

function draw() {
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    ctx.fillStyle = "#000"

    draw_head()
    draw_body()

    draw_fruits()
}

const FPS = 60 // 15 frames por segundo
setInterval(()=>{
    draw()
}, 1000/FPS)// 1000ms == 1s