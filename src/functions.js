var rainCheck = 0;
var rain = document.getElementById("rain");
var surface = document.getElementById("surface");

rain.style.display = 'none';
surface.style.display = 'none';

function myClick() {
    console.log("inesh shod");
    if (rainCheck == 0) {
        console.log("roo avali click shode", rain);
        rain.style.display = '';
        surface.style.display = '';
        rainCheck = 1;
    } else {
        console.log("roo dovomi click shode", rain);
        rain.style.display = 'none';
        surface.style.display = 'none';
        rainCheck = 0;
    }
}

function IsElementsOverlapping(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    );
}


