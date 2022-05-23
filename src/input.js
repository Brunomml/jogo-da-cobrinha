function check(key) {
    if (direction == "UP" && key == "s") {
        return false
    }

    if (direction == "LEFT" && key == "d") {
        return false
    }

    if (direction == "DOWN" && key == "w") {
        return false
    }

    if (direction == "RIGHT" && key == "a") {
        return false
    }

    return true
}

addEventListener('keydown', (event)=>{
    const key = event.key
    if (check(key) == false) 
        return

    const fns = {
        w(){
            direction = 'UP'
        },
        a(){
            direction = 'LEFT'
        },
        s(){
            direction = 'DOWN'
        },
        d(){
            direction = 'RIGHT'
        }
    }


    const func = fns[key]
    if (func == undefined) return
    
    func()
})