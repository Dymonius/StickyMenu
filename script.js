var stickElement = document.querySelector(".menu");
var stuck = false;
var stickHeight = getHeight();
var stickPoint = getDistance();



function getHeight() {
    var height = stickElement.offsetHeight;
    return height;

}

function getDistance() {
    var topDist = stickElement.offsetTop;
    return topDist;
}

window.onscroll = function (e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    if ((distance <= 0) && !stuck) {
        stickElement.style.position = 'fixed';
        stickElement.style.top = '0px';

        stuck = true;
    } else if (stuck && (offset <= stickPoint)) {
        stickElement.style.position = 'static';
        stuck = false;
    }
}