let buttons = document.getElementsByClassName('sidebar-dates-item');

document.addEventListener('DOMContentLoaded', function () {
    let startIndex = 2;
    buttons[startIndex].classList.add('active');
    document.body.style.backgroundImage = `url(../images/${buttons[startIndex].dataset.id}.webp)`;
});
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        //remove the active class from all buttons
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('active');
        }
        //add the active class to the button that was clicked
        this.classList.add('active');
        document.body.style.backgroundImage = `url(../images/${this.dataset.id}.webp)`;
        document.body.style.transition = 'opacity .7s ease-in-out';
    });
}
