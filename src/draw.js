function createDraw() {
    const cnv = window.document.querySelector(".canvas")
    const ctx = cnv.getContext("2d")
    let player;

    function draw() {
        ctx.clearRect(0,0,600,400)
        ctx.fillRect(player.x, player.y, 20, 20)
    }

    function start(aplayer) {
        player = aplayer
        draw()
    }
    
    return {
        start
    }
}

export default createDraw