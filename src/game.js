function createGame() {
    let key;
    let frutas = []
    let NumeroMaximoDeFrutas = 1

    const player = [{
        x:Math.random()*(550-0)+0,
        y:Math.random()*(350-0)+0
    }]

    function collision() {
        //colisão com paredes :)

        if (player[0].y < -20) {
            player[0].y = 420
        }
        if (player[0].x < -20) {
            player[0].x = 620
        }
        if (player[0].y > 420) {
            player[0].y = -20
        }
        if (player[0].x > 620) {
            player[0].x = -20
        }
        //colisão com as frutas :)

        for (let i = 0; i<frutas.length; i++) {
            if (player[0].y >= frutas[i].y-20 && player[0].y <= frutas[i].y+20) {
                if (player[0].x >= frutas[i].x-20 && player[0].x <= frutas[i].x+20) {
                    sleep(1000)
                    deletarFruta(i)
                }
            }
        }
    }

    function mover() {
        const movimento = {
            ArrowUp(){
                player[0].y-=19
            },
            ArrowLeft(){
                player[0].x-=19
            },
            ArrowDown(){
                player[0].y+=19
            },
            ArrowRight(){
                player[0].x+=19
            }
        }
        
        addEventListener("keydown", (e)=>{key = e.key})
        let move = movimento[key]
        if (move) moverCorpo(), move()
    }
    
    function moverCorpo() {
        if (player.length == 1) return
        for (let i = player.length; i > 0; i--) {
            if (i-2<0) return
            player[i-1].x = player[i-2].x
            player[i-1].y = player[i-2].y
        }
    }

    function criarCorpo() {
        let pos = {
            x:player[player.length-1].x,
            y:player[player.length-1].y
        }
        player.push(pos)
    }
    
    function criarFruta() {
        while(frutas.length < NumeroMaximoDeFrutas) {
            let pos = {
                x:Math.random()*(550-0)+0,
                y:Math.random()*(350-0)+0
            }
            frutas.push(pos)
        }
    }

    function deletarFruta(i) {
        frutas.pop(frutas[i])
        criarCorpo()
    }

    function sleep(time) {
        setTimeout(()=>{},time)
        return
    }

    function start() {
        mover()
        collision()
        criarFruta()
    }

    return {
        start,
        player,
        frutas
    }
}

export default createGame