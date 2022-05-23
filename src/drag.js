const position = { x: 0, y: 0 }
// target elements with the "draggable" class
interact('.DraggableSun').draggable({
    //startAxis: 'x',
    lockAxis: 'x',
    // enable inertial throwing

    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
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
    //startAxis: 'x',
    lockAxis: 'x',
    inertia: true,
    restrict: {
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
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
