let fruits = []

function create_fruit(){
    while (fruits.length < 3) {
        const fruit = {
            x:Math.floor(Math.random() * width / 20) * 20,
            y:Math.floor(Math.random() * height / 20) * 20
        }

        fruits.push(fruit)
    }
}

function remove_fruit(index) {
    fruits.splice(index, 1)
}

function eat_fruit(index) {
    remove_fruit(index)
    create_fruit()
    create_body()
}