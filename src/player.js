var direction = 'LEFT'
const player = {
    head:{
        x:Math.floor(Math.random() * width / 20) * 20,
        y:Math.floor(Math.random() * height / 20) * 20
    },
    body:[
        {
            x:-20,
            y:0
        },
        {
            x:-20,
            y:0
        },
        {
            x:-20,
            y:0
        }
    ]
}

function move() {
    const fns = {
        UP(){
            player.head.y -= 20
        },
        LEFT(){
            player.head.x -= 20
        },
        DOWN(){
            player.head.y += 20
        },
        RIGHT(){
            player.head.x += 20
        }
    }

    const func = fns[direction]
    func()
    
}

function collision_wall() {
    const up_wall = 0
    const left_wall = 0
    const down_wall = height
    const right_wall = width

    if (player.head.y < up_wall) {
        player.head.y = height-20
    }

    if (player.head.x < left_wall){
        player.head.x = width-20
    } 

    if (player.head.y >= down_wall){
        player.head.y = -20
    } 

    if (player.head.x >= right_wall){
        player.head.x = -20
    } 
}

function collision_fruit() {
    for (let index = 0; index < fruits.length; index++) {
        const fruit = fruits[index];
        
        if (player.head.x == fruit.x && player.head.y == fruit.y) {
            eat_fruit(index)
        }
    }
}

function updadeBody(){
    const body = player.body
    

    body.forEach((element, index) => {
        if (body[index+1] == undefined) {
            element.x = player.head.x
            element.y = player.head.y
        }else{
            element.x = body[index+1].x
            element.y = body[index+1].y
        }
    });
}

function create_body() {
    player.body.push({
        x: -20,
        y: -20
    })
}