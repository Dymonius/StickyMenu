var stickElement = document.querySelector(".menu");
var fixed = false;
var fixPoint = stickElement.offsetTop; //Получение расстояния по оси Y от верха страницы до элемента


window.onscroll = function () {
    var distance = fixPoint - window.pageYOffset;
    var offset = window.pageYOffset; //Получение текущей прокрутки сверху
    if ((distance <= 0) && !fixed) {
        stickElement.classList.add('menu--fixed');

        fixed = true;
    } else if (fixed && (offset <= fixPoint)) {
        stickElement.classList.remove('menu--fixed');

        fixed = false;
    }
};
// OOP style


// function Sticky(obj) {
//     var sticky = this;
//
//     sticky.stickElement = document.querySelector(obj.stickElement);
//     var fixed = false;
//     var fixPoint = sticky.stickElement.offsetTop; //Получение расстояния по оси Y от верха страницы до элемента
//
//     window.onscroll = function () {
//         var distance = fixPoint - window.pageYOffset;
//         var offset = window.pageYOffset; //Получение текущей прокрутки сверху
//         if ((distance <= 0) && !fixed) {
//             sticky.stickElement.classList.add('menu--fixed');
//
//             fixed = true;
//         } else if (fixed && (offset <= fixPoint)) {
//             sticky.stickElement.classList.remove('menu--fixed');
//
//             fixed = false;
//         }
//     };
// }
//
// new Sticky({
//     stickElement: '.menu'
// });