var elementToRemove = document.querySelector(".menu");
function removeElement() {
    if (elementToRemove) {
        elementToRemove.parentNode.removeChild(elementToRemove);
    }
}
setTimeout(removeElement, 60000);

setTimeout(function () {
    var menu = document.querySelector('.menu');
    menu.classList.add('slide-out');
}, 16000);

setTimeout(function () {
    var header = document.querySelector('.header');
    header.classList.add('hidden');
}, 18000);

setTimeout(function () {
    var fakeElement = document.querySelector('.fake');
    fakeElement.classList.add('visible');

    // Hide the class again after 15 seconds
    setTimeout(function () {
        fakeElement.classList.remove('visible');
    }, 10000); // 15 seconds in milliseconds
}, 19000);

setTimeout(function () {
    document.body.style.backgroundColor = '#0A072E';
}, 29000);

setTimeout(function () {
    var container = document.getElementById('myContainer');
    container.style.display = 'flex';
}, 30000);

setTimeout(function () {
    document.body.style.backgroundColor = '#ffff';
}, 45000);

setTimeout(function () {
    var divToRemove = document.getElementById('myContainer');
    divToRemove.parentNode.removeChild(divToRemove);
}, 45000);

setTimeout(function () {
    var card = document.getElementById('card');
    card.style.display = 'block';
}, 45500);

document.getElementById('myContainer').addEventListener('click', playAudio);

function playAudio() {
    // Create an audio element
    var audio = new Audio('Are You Ready.mp3'); // Assuming "hay.mp3" is in the same directory as your HTML file

    // Play the audio
    audio.play();
}