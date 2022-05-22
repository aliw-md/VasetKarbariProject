const position = { x: 0, y: 0 }
const rainCheck = 0;
interact('.draggable').draggable({
    startAxis: 'x',
    lockAxis: 'x',
    listeners: {
        start(event) {
            console.log(event.type, event.target)
        },
        move(event) {
            position.x += event.dx
            position.y += event.dy

            event.target.style.transform =
                `translate(${position.x}px, ${position.y}px)`
        },
    }
})
