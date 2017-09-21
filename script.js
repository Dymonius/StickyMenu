var stickElement = document.querySelector(".menu");
var fixed = false;
var stickPoint = stickElement.offsetTop;

window.onscroll = function () {
    var distance = stickElement.offsetTop - window.pageYOffset;
    var offset = window.pageYOffset; //Получение текущей прокрутки сверху
    if ((distance <= 0) && !fixed) {
        stickElement.style.position = 'fixed';
        stickElement.style.top = '0px';

        fixed = true;
    } else if (fixed && (offset <= stickPoint)) {
        stickElement.style.position = 'static';
        fixed = false;
    }
};