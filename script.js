let whiteKeys = document.querySelectorAll(".white-key");
let blackKeys = document.querySelectorAll(".black-key");

// blackKeys.forEach((black,index) =>{
//     black.addEventListener('mouseenter',() =>{
//         let sound = new Audio(`./sounds/black-keys/${index}.mp3`);
//         playSound(sound);
//     });
// });
// whiteKeys.forEach((white,index) =>{
//     white.addEventListener('mouseenter',() =>{
//         let sound = new Audio(`./sounds/white-keys/${index}.mp3`);
//         playSound(sound);
//     });
// });

for(let index = 0; index < blackKeys.length; index ++){
    blackKeys[index].addEventListener('mouseenter',() =>{
        let audio = new Audio( `./sounds/black-keys/${index}.mp3`); // my strategy
        playSound(audio);
    })
}
for(let index = 0; index < whiteKeys.length; index ++){
    whiteKeys[index].addEventListener('mouseenter',() =>{
        let audio = new Audio( `./sounds/white-keys/${index}.mp3`);
        playSound(audio);
    })
}

function playSound(sound){
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}