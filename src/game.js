function createGame() {
    let key;
    const player = {
        x:Math.random()*(600-0)+0,
        y:Math.random()*(400-0)+0
    }

    const movimento = {
        ArrowUp(){
            player.y-=3
        },
        ArrowLeft(){
            player.x-=3
        },
        ArrowDown(){
            player.y+=3
        },
        ArrowRight(){
            player.x+=3
        }
    }

    function collision() {
        if (player.y < -20) {
            player.y = 420
        }
        if (player.x < -20) {
            player.x = 620
        }
        if (player.y > 420) {
            player.y = -20
        }
        if (player.x > 620) {
            player.x = -20
        }
    }

    function input() {
        addEventListener("keydown", (e)=>{key = e.key})
        let move = movimento[key]
        if (move) move()
    }

    function start() {
        input()
        collision()
    }

    return {
        start,
        player
    }
}

export default createGame