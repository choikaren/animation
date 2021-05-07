sprite = document.getElementById("spriteCharacter");
character = document.getElementById("character");
upKey = document.getElementById("up");
leftKey = document.getElementById("left");
downKey = document.getElementById("down");
rightKey = document.getElementById("right");
let screenWidth;
let screenHeight;

let x = 0;
let y = 0;

findScreenSize = function () {
    console.log("resize")
    //divide by 6 to put in rem
    //6 bc width of sprite is 6
    screenWidth = window.innerWidth / 16 - 6;
    //8 bc height of sprite is 8
    screenHeight = window.innerHeight / 16 - 8;
};
findScreenSize();
window.onresize = findScreenSize;

addAnimation = function () {
    sprite.classList.add("Character_animation");
};

removeAnimation = function () {
    sprite.classList.remove("Character_animation");
};

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
    addAnimation();
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

updateSpritePosition = function () {
    character.style.left = x + "rem";
    character.style.top = y + "rem";
}

document.addEventListener('keydown', function () {
    //animate
    keyboardAnimate();
    //check if overboard
    walls();
    updateSpritePosition();
});

//when arrow keys are released, stops animation
document.addEventListener('keyup', function () {
    removeAnimation();
})

keypadArray = [
    {
        key: upKey,
        keyfunction: function () {
            console.log("Up key is connected");
            sprite.classList.add("face-up");
            sprite.classList.remove("face-down", "face-right", "face-left");
            y = (y - 1);
        }
    },
    {
        key: leftKey,
        keyfunction: function () {
            console.log("Left key is connected");
            sprite.classList.add("face-left");
            sprite.classList.remove("face-down", "face-right", "face-up");
            x = (x - 1);
        }
    },
    {
        key: downKey,
        keyfunction: function () {
            console.log("Down key is connected");
            sprite.classList.add("face-down");
            sprite.classList.remove("face-right", "face-left", "face-up");
            y = (y + 1);
        }
    },
    { 
        key: rightKey,
        keyfunction: function () {
            console.log("Right key is connected");
            sprite.classList.add("face-right");
            sprite.classList.remove("face-down", "face-left", "face-up");
            x = (x + 1);
            console.log(x)
        }
    }
]

keypadArray.forEach(keypad => {
    keypad.key.addEventListener('mousedown', function () {
        addAnimation();
        interval = setInterval(function () {
            keypad.keyfunction();
            walls();
            updateSpritePosition();
        }, 100)
    });
    keypad.key.addEventListener('mouseup', function () {
        removeAnimation();
        clearInterval(interval);
    });
});

// upKey.addEventListener('mousedown', function () {
//     addAnimation();
//     interval = setInterval(function () {
//         moveUp()
//         walls();
//         updateSpritePosition();
//     }, 100)
// })

// upKey.addEventListener('mouseup', function () {
//     removeAnimation();
//     clearInterval(interval);
// })

// leftKey.addEventListener('mousedown', function () {
//     moveLeft()
//     walls();
//     updateSpritePosition();
// });

// downKey.addEventListener('mousedown', function () {
//     moveDown()
//     walls();
//     updateSpritePosition();
// });

// rightKey.addEventListener('mousedown', function () {
//     moveRight()
//     walls();
//     updateSpritePosition();
// });
