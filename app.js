let buttons = document.getElementsByClassName('sidebar-dates-item');
let sidebarDatesContainer = document.querySelector('.sidebar-dates-container');

document.addEventListener('DOMContentLoaded', function () {
    let startIndex = 2;
    buttons[startIndex].classList.add('active');
    document.body.style.backgroundImage = `url(../images/${buttons[startIndex].dataset.id}.webp)`;
    sidebarDatesContainer.scrollTop = 56;
});
// Code for scroll on sidebardates container
// sidebarDatesContainer.addEventListener('scroll', function (e) {
//     let scrollTop = sidebarDatesContainer.scrollTop;
//     let scrollHeight = sidebarDatesContainer.scrollHeight;
//     let clientHeight = sidebarDatesContainer.clientHeight;
//     let scrolled = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100);
//     let activeIndex = Math.floor(scrolled / (100 / buttons.length));
//     if (activeIndex < 0) {
//         activeIndex = 0;
//     }
//     if (activeIndex > buttons.length - 1) {
//         activeIndex = buttons.length - 1;
//     }
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].classList.remove('active');
//     }
//     buttons[activeIndex].classList.add('active');
//     document.body.style.backgroundImage = `url(../images/${buttons[activeIndex].dataset.id}.webp)`;
//     document.body.style.transition = 'background-image .7s ease-in-out';
// });

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('active');
        }
        //add the active class to the button that was clicked
        this.classList.add('active');
        document.body.style.backgroundImage = `url(../images/${this.dataset.id}.webp)`;
        document.body.style.transition = 'background-image .7s ease-in-out';
    });
}
