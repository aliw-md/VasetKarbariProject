const position = { x: 0, y: 0 }
interact('.DraggableSun').draggable({
    startAxis: 'x',
    lockAxis: 'x',
    listeners: {
        start(event) {
            console.log("I am Sun: ", event.type, event.target)
        },
        move(event) {
            position.x += event.dx
            position.y += event.dy

            event.target.style.transform =
                `translate(${position.x}px, ${position.y}px)`
        },
    }
});
interact('.DraggableCloud').draggable({
    startAxis: 'x',
    lockAxis: 'x',
    listeners: {
        start(event) {
            console.log("I am cloud: ", event.type, event.target)
        },
        move(event) {
            position.x += event.dx
            position.y += event.dy

            event.target.style.transform =
                `translate(${position.x}px, ${position.y}px)`
        },
    }
});
