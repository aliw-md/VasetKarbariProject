const position = { x: 0, y: 0 }
// target elements with the "draggable" class
interact('.DraggableSun').draggable({
  //startAxis: 'x',
  lockAxis: 'x',
  // enable inertial throwing

  inertia: true,
  // keep the element within the area of it's parent
  restrict: {
    restriction: "#outer-box",
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

})
interact('.DraggableCloud').draggable({
  //startAxis: 'x',
  lockAxis: 'x',
  inertia: true,
  restrict: {
    restriction: "#outer-box",
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
})











/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '.sun , .cloud',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
    console.log("drop active");

  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
    //   draggableElement.textContent = 'Dragged in'
    console.log("dragged in");
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
    //event.relatedTarget.textContent = 'Dragged out'
    console.log("dragged out");

  },
  ondrop: function (event) {
    console.log("dropped");

    var cloud = document.getElementById("cloud");
    var sun = document.getElementById("sun");

    if(IsElementsOverlapping(cloud, sun)){
      console.log("collision baby");
      var perc = ElementsOverlapPercentage(cloud, sun);
      //console.log(perc);
    }




  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
    console.log("on drop active");
    // var cloud = document.getElementById('cloud');
    // var sun = document.getElementById('sun');
    // console.log("this is sun object: ",sun);
    // console.log("this is cloud object: ",cloud);
    console.log(event);
  }
})


