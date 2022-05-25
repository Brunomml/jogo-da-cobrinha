function updade() {
    updadeBody()
    move()
    collision_wall()
    collision_fruit()
}

create_fruit()
setInterval(()=>{
    updade()
}, 1000/5)