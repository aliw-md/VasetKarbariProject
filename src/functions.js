//0:none   1:raining  2:snowing
var rainCheck = 0;
var rain = document.getElementById("rain");
var surface = document.getElementById("surface");

rain.style.display = 'none';
surface.style.display = 'none';

function myClick() {
    console.log("inesh shod");
    if (rainCheck == 0) {
        // console.log("roo avali click shode", rain);
        rain.style.display = '';
        surface.style.display = '';
        rainCheck = 1;
    } else {
        // console.log("roo dovomi click shode", rain);
        rain.style.display = 'none';
        surface.style.display = 'none';
        rainCheck = 0;
    }
}

function IsElementsOverlapping(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
        domRect1.right < domRect2.left ||
        domRect1.left > domRect2.right
    );
}
function ElementsOverlapPercentage(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
    var El1Width = domRect1.right - domRect1.left;
    var El2Width = domRect2.right - domRect2.left;

    var Overlap;
    var SmallerWidth = Math.min(El1Width, El2Width);
    if (domRect1.left < domRect2.left) {
        Overlap = Math.abs(domRect1.right - domRect2.left);
    } else {
        Overlap = Math.abs(domRect2.right - domRect1.left);
    }
    // console.log("overlap: ", Overlap);
    // console.log("El1Width: ", El1Width, "El2Width: ", El2Width);

    return (parseFloat(100 / (SmallerWidth / Overlap)));
}
function WeatherDetector() {
    var cloud = document.getElementById("cloud");
    var sun = document.getElementById("sun");
    var DraggableCloud = document.getElementById("DraggableCloud");
    var answer = document.getElementById("answer-box");


    if (sun.classList.contains("can-drop") || DraggableCloud.classList.contains("can-drop")) {


        if (IsElementsOverlapping(cloud, sun)) {
            console.log("collision baby");
            var perc = ElementsOverlapPercentage(cloud, sun);
            console.log("Overlap percentage: %", perc);

            if (perc <= 40) {
                answer.textContent = "mostly sunny";
            }
            else if (40 < perc && perc < 60) {
                answer.textContent = "half sunny";
            }
            else if (perc >= 60) {
                answer.textContent = "mostly cloudy";
            }

        } else {
            console.log("draggable fuckin cloudddd class list: ", DraggableCloud);
            console.log("has sun can-drop class? ", sun.classList.contains("can-drop"));
            console.log("has cloud can-drop class? ", DraggableCloud.classList.contains("can-drop"));

            if (sun.classList.contains("can-drop") && DraggableCloud.classList.contains("can-drop")) {
                answer.textContent = "sunny with spreaded clouds";
            } else if (sun.classList.contains("can-drop") && !DraggableCloud.classList.contains("can-drop")) {
                answer.textContent = "sunny";
            }
            else if (!sun.classList.contains("can-drop") && DraggableCloud.classList.contains("can-drop")) {
                answer.textContent = "cloudy";
            }
        }
    } else {
        answer.textContent = "Please drag atleast one element into inner box :)";
    }
}



