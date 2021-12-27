import createGame from './game.js'
import createDraw from './draw.js'

function createCore() {
    const game = createGame()
    const draw = createDraw()

    function loop() {
        setInterval(() => {
            game.start()
            draw.start(game.player)
        }, 1000/60)
    }
    
    function start() {
        loop()
    }

    return {
        start
    }
}

export default  createCore