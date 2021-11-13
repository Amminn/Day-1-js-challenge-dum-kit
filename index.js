let keys = document.getElementsByClassName("key")
let sounds = document.querySelectorAll('audio')

for (let i = 0; i < sounds.length; i++) {
    document.addEventListener("keydown", function(event) {
        if (event.keyCode == sounds[i].getAttribute('data-key')) {
            keys[i].classList.add('playing');
            sounds[i].play()
            setTimeout(function() {
                keys[i].classList.remove('playing');
            }, 100);
        }
    })
}
