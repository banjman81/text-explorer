const prompt = require('prompt-sync')();

let input = prompt('Your coordinates are (0, 0). Would you like to go "up", "right", "down", or "left"? ')

let x = 0;
let y = 0;


// if(input !== "up" ||input !== "down" ||input !== "left" ||input !== "right"){
//     console.log('error')
//     input = prompt(`Your coordinates are (${x}, ${y}). Would you like to go "up", "right", "down", or "left"? `)
// }
while(input === "up" ||input === "down" ||input === "left" ||input === "right"){
    if(input ==="up"){
        y = y +1;
    }
    else if(input ==="down"){
        y = y -1;
    }
    else if(input ==="left"){
        x = x -1;
    }
    else if(input ==="right"){
        x = x +1;
    }
    console.log(`Your coordinates are (${x}, ${y}). Would you like to go "up", "right", "down", or "left"? `)
    input = prompt('>')
}