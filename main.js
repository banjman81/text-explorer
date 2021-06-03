const prompt = require('prompt-sync')({sigint:true});

console.log("Welcome to the world of Terminal. Your goal is to find the Golden Keyboard.")

let input = prompt('Your coordinates are (0, 0). Would you like to go "up", "right", "down", or "left"? ')

let x = 0;
let y = 0;

let gx = -2;
let gy = -2;
//Goal location
let check = false;
function location(a,b){
    if(a == 0 && b == 0 ){
        console.log("You are at a crossroad.")
    }
    else if(a == -2 && b == -2 ){
        console.log("Congradulation you hgave found the golden keyboard!!.")
    }
    else if(a == -2 && b == 2 ){
        console.log("You see a giant tree in front of you.")
    }
    else if(a == -1 && b == 2 ){
        console.log("You see a shallow stream flowing out of the forest you are in.")
    }
    else if(a == 0 && b == 2 ){
        console.log("You are at the edge of the forst and you see an abandoned house below you.")
    }
    else if(a == 1 && b == 2 ){
        console.log("You are at the edge of the forst and you see small villege below you.")
    }
    else if(a == 2 && b == 2 ){
        console.log("You are at the edge of the forst and you see small well below you.")
    }
    else if(a == -2 && b == 1 ){
        console.log("There are flowers all around you and you can hear the sound of the stream.")
    }
    else if(a == -1 && b == 1 ){
        console.log("You see a stream flowing down. It's shallow and you can walk across it of you dont mind getting wet. ")
    }
    else if(a == 0 && b == 1 ){
        console.log("You arrived at an abandoned house at the end of a small villege. It looks really creepy. ")
    }
    else if(a == 1 && b == 1 ){
        console.log("You arrived at a small villege and the villgers are too busy to notice you.")
    }
    else if(a == 2 && b == 1 ){
        console.log("You are at a water well of the villege.")
    }
    else if(a == -2 && b == 0 ){
        console.log("You arrived at a military check point but no one seems to care the you are there.")
    }
    else if(a == -1 && b == 0 ){
        console.log("You are standing on a small bridge that cross a beautiful stream.")
    }
    else if(a == 1 && b == 0 ){
        console.log("You see more trails.")
    }
    else if(a == 2 && b == 0 ){
        console.log("You see a grassland stretch beyound the horizon.")
    }
    else if(a == -2 && b == -1 ){
        console.log("You arrived at a beach.")
    }
    else if(a == -1 && b == -1 ){
        console.log("You see a river a not too far from a beach.")
    }
    else if(a == 0 && b == -1 ){
        console.log("You arrived at the Uppder Disctrict of the town.")
    }
    else if(a == 1 && b == -1 ){
        console.log("You see a road and houses around.")
    }
    else if(a == 2 && b == -1 ){
        console.log("You see a grassland stretch beyound the horizon.")
    }
    else if(a == -1 && b == -2 ){
        console.log("You see a stream flow into a waterfall.")
    }
    else if(a == 0 && b == -2 ){
        console.log("You arrived at the Lower Disctrict of the town.")
    }
    else if(a == 1 && b == -2 ){
        console.log("You arrived at a busy market.")
    }
    else if(a == 2 && b == -2 ){
        console.log("You see a long trail that cuts into the grassland.")
    }
}

// location(x,y);
while(check == false){
    if(input ==="up" && y<2 ){
        y = y +1;
        if(x == gx && y == gy){
            break
        }
    }
    else if(input ==="down" && y>-2 ){
        y = y -1;
        if(x == gx && y == gy){
            break
        }
    }
    else if(input ==="left" && x>-2 ){
        x = x -1;
        if(x == gx && y == gy){
            break
        }
    }
    else if(input ==="right" && x<2 ){
        x = x +1;
        if(x == gx && y == gy){
            break
        }
    }
    else{
        console.log('You cannot go there.');
        // if(x > 2){
        //     x =2;
        // }
        // else if(x < -2){
        //     x = -2;
        // }
        // else if(y > 2){
        //     y =2;
        // }
        // else if(y < -2){
        //     y = -2;
        // }
    }
    location(x,y);
    console.log(x,y)
    console.log("")
    console.log(`Would you like to go "up", "right", "down", or "left"? `)
    input = prompt('>')

}

console.log("Congradulation you have found the golden keyboard!!")
