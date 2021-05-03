sprite = document.getElementById("spriteCharacter");
character = document.getElementById("character");
let x = 0;
let y = 0;

console.log('hello');
console.log(character);

animate = function () {
    sprite.classList.add("Character_animation")
    if (event.keyCode == "38") {
        console.log("Up key is connected");
        sprite.classList.add("face-up");
        sprite.classList.remove("face-down", "face-right", "face-left");
        y = (y - 1);
    } else if (event.keyCode == "39") {
        console.log("Right key is connected");
        sprite.classList.add("face-right");
        sprite.classList.remove("face-down", "face-left", "face-up");
        x = (x + 1);
    } else if (event.keyCode == "37") {
        console.log("Left key is connected");
        sprite.classList.add("face-left");
        sprite.classList.remove("face-down", "face-right", "face-up");
        x = (x - 1);
    } else if (event.keyCode == "40") {
        console.log("Down key is connected");
        sprite.classList.add("face-down");
        sprite.classList.remove("face-right", "face-left", "face-up");
        y = (y + 1);
    }
};

walls = function () {
    if (x < 0) {
        sprite.classList.remove("Character_animation")
        x = 0;
    } else if (x > 48) {
        sprite.classList.remove("Character_animation")
        x = 48;
    } else if (y < 0) {
        sprite.classList.remove("Character_animation")
        y = 0;
    } else if (y > 45) {
        sprite.classList.remove("Character_animation")
        y = 45;
    }
}

document.addEventListener('keydown', function () {
    //animate
    animate();
    //check if overboard
    walls();

    character.style.left = x + "rem";
    character.style.top = y + "rem";
})

document.addEventListener('keyup', function () {
    sprite.classList.remove("Character_animation")
})
