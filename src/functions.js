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
    var BiggerWidth = Math.max(El1Width, El2Width);
    if (domRect1.left < domRect2.left) {
        Overlap = Math.abs(domRect1.right - domRect2.left);
    } else {
        Overlap = Math.abs(domRect2.right - domRect1.left);
    }
    console.log("overlap: ", Overlap);
    console.log("El1Width: ", El1Width, "El2Width: ", El2Width);

    console.log(parseFloat(100 / (BiggerWidth / Overlap)));
}



