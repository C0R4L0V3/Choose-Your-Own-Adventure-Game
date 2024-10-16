const prompt = require('prompt-sync')();

let playerGold = 100;

const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

const startingArea = prompt(`Where would you like to start? field forest town `);

if (startingArea === `field`){
    console.log(`
        You wake up under a blue sky in a field. You stand up looking around trying to gather your bearings.`);
    const fieldDirection = prompt(`
        To the East of you there is path to a dark forest. 
        To the South there is a path to a town. 
        To the West there is an old church. 
        And to the North there is a path to the mountains. 
        Which direction would you like to go? `);
    if (fieldDirection == `south`){
            console.log(`You find yourself in the town of Honeywood, there is a blacksmith's and an Inn.`);
            const honeyWood = prompt(`Where would you like to go? 
                `);
                // }
                // if (honeyWood === `blacksmith` && playerGold >= 200){
                //     console.log(`the blacksmith has a sword for sale for 200 gold and have enough gold it. ${playerGold} `)
                // } else (honeyWood === `blacksmith` && playerGold <= 200){
                //     console.log(`The blacksmith has a sowrd for sale 200 gold, but you do not have enough to buy it. ${playerGold}`)
                // }
        } else if (fieldDirection == `east`){
            console.log(`
                Following the path East you find yourself in a dark forest. 
                The path East continues to go deeper into the forest. 
                The path West continues back to the field.`);
            const forestPath = prompt(`which direction do you want to go down? `);
                // if (forestPath == `west`) {
                //     console.log("You reach the edge of the forest and find yourself in a field")
                // } else if (forestPath == `east`){
                //     console.log("You continue down east and find a dark cave")
                // }
        }

    } else if (startingArea === `forest`){
    console.log(`
        You are traveling down a dark path in a forest. 
        As you travel west down the path you see the edge of the forest with a field on the horizon. 
        The path East continues deeper into the forest. `);
    const forestPath = prompt(`which direction do you want to go down? `);
        if (forestPath == `west`) {
            console.log(`
                You reach the edge of the forest and find yourself in a field`);
        } else if (forestPath == `east`){
            console.log(`
                You continue down east and find a dark cave`);
        }

    } else if (startingArea == `town`){
    console.log(`this is a test`)
}



