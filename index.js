sprite = document.getElementById("spriteCharacter");
character = document.getElementById("character");
upKey = document.getElementById("up");
leftKey = document.getElementById("left");
downKey = document.getElementById("down");
rightKey = document.getElementById("right");

canvas = document.getElementById("canvas")

//divide by 12 to put in rem
let screenWidth = window.innerWidth/16 - 6;

let screenHeight = window.innerHeight/16 - 8;

let x = 0;
let y = 0;

console.log(character);

moveUp = function () {
    console.log("Up key is connected");
    sprite.classList.add("face-up");
    sprite.classList.remove("face-down", "face-right", "face-left");
    y = (y - 1);
};

moveRight = function () {
    console.log("Right key is connected");
    sprite.classList.add("face-right");
    sprite.classList.remove("face-down", "face-left", "face-up");
    x = (x + 1);
    console.log(x)
};

moveLeft = function () {
    console.log("Left key is connected");
    sprite.classList.add("face-left");
    sprite.classList.remove("face-down", "face-right", "face-up");
    x = (x - 1);
};

moveDown = function () {
    console.log("Down key is connected");
    sprite.classList.add("face-down");
    sprite.classList.remove("face-right", "face-left", "face-up");
    y = (y + 1);
};

keyboardAnimate = function () {
    sprite.classList.add("Character_animation")
    if (event.keyCode == "38" || event.keyCode == "87") {
        moveUp();
    } else if (event.keyCode == "39" || event.keyCode == "68") {
        moveRight();
    } else if (event.keyCode == "37" || event.keyCode == "65") {
        moveLeft();
    } else if (event.keyCode == "40" || event.keyCode == "83") {
        moveDown();
    }
};


walls = function () {
    if (x < 0) {
        sprite.classList.remove("Character_animation")
        x = 0;
    } else if (x > screenWidth) {
        sprite.classList.remove("Character_animation")
        x = screenWidth;
    } else if (y < 0) {
        sprite.classList.remove("Character_animation")
        y = 0;
    } else if (y > screenHeight) {
        sprite.classList.remove("Character_animation")
        y = screenHeight;
    }
}

document.addEventListener('keydown', function () {
    //animate
    keyboardAnimate();
    //check if overboard
    walls();

    character.style.left = x + "rem";
    character.style.top = y + "rem";
});

upKey.addEventListener('click', function () {
    moveUp()
    walls();
    character.style.left = x + "rem";
    character.style.top = y + "rem";
});

leftKey.addEventListener('click', function () {
    moveLeft()
    walls();
    character.style.left = x + "rem";
    character.style.top = y + "rem";
});

downKey.addEventListener('click', function () {
    moveDown()
    walls();
    character.style.left = x + "rem";
    character.style.top = y + "rem";
});

rightKey.addEventListener('click', function () {
    moveRight()
    walls();
    character.style.left = x + "rem";
    character.style.top = y + "rem";
});

//when arrow keys are released, stops animation
document.addEventListener('keyup', function () {
    sprite.classList.remove("Character_animation")
})
