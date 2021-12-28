function createDraw() {
    const cnv = window.document.querySelector(".canvas")
    const ctx = cnv.getContext("2d")
    let player
    let frutas

    function draw() {
        ctx.clearRect(0,0,600,400)
        
        //player
        ctx.fillStyle = 'black'
        ctx.fillRect(player[0].x, player[0].y, 20, 20)

        for (let i = 0; i < player.length; i++) {
            if (i>0) {
                ctx.fillRect(player[i].x, player[i].y, 20, 20)
            }
        }
        
        //frutas
        for (let i = 0; i < frutas.length; i++) {
            ctx.fillStyle = '#FF0000'
            ctx.fillRect(frutas[i].x, frutas[i].y, 20,20)
        }
    }

    function start(aplayer, afrutas) {
        player = aplayer
        frutas = afrutas
        draw()
    }
    
    return {
        start
    }
}

export default createDraw