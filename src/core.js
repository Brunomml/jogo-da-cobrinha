import createGame from './game.js'
import createDraw from './draw.js'

function createCore() {
    const game = createGame()
    const draw = createDraw() 
    
    function start() {
        
    }

    return {
        start
    }
}

export default  createCore