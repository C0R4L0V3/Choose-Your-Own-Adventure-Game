// Terminal game practice

const prompt = require('prompt-sync')();

let playerGold = 0;
let churchGold = 110;

const username = prompt('What is your name? ');
console.log(`
    Your name is ${username}`);

//function recalls the field direction choices
function field() {
    console.log("You are in a field")
    console.log("To the East of you there is path to a dark forest.")
    console.log("To the South there is a path to a town.")
    console.log("To the West there is an old church.")
    console.log("To the North there is a path to the mountains.")
    const fieldDirection = prompt(`Which direction would you like to go? North East South West`)
    return fieldDirection;
}

// function recalls the forest driection choices
function forest() {

    console.log("You are traveling down a dark path in a forest.")
    console.log("The path East continues to go deeper into the forest.")
    console.log("The path West continues back to the field.")
    const forestDirection = prompt(`Which direction do you want to go down? East West`)
    return forestDirection;
}

function forestBear() {
    console.log("You continue down east and find a dark cave.")
    console.log("A bear has killed you.")
}

// function function if the player does not have enough gold to stay at the inn
function honeyWoodInnPoor() {
    console.log(`It costs 5 gold to stay at the inn, you do not have enough gold. Your gold:${playerGold}`)
    console.log("You do not have enough gold you peasent! *you have been kicked out of the Inn* ")

}

//function if player does not have enough gold for the blacksmith
function honeyWoodBlacksmithPoor() {
    console.log(`The blacksmith has a sword for sale 200 gold, but you do not have enough to buy it. Your gold:${playerGold}`)
    console.log(`"Get out of my shop you beggar!" *You have been kicked out of the Blacksmith's*`)

}



function churchGoldAdd (){
    console.log(playerGold+churchGold)

}


const startingArea = prompt(`Where would you like to start? field forest town `); //starting place choice

// Starting paths for field choice
if (startingArea === `field`) {
    console.log(`You wake up under a blue sky in a field. You stand up looking around trying to gather your bearings.`)
    const fieldDirection = field(); // envokes the field funtion prompt

    if (fieldDirection === `south`) {
        console.log(`You find yourself in the town of Honeywood, there is a blacksmith's and an Inn.`);
        const honeyWood = prompt('Where would you like to go? Blacksmith or Inn')

        if (honeyWood == 'blacksmith' && playerGold >= 200) {
            console.log(`The blacksmith has a sword for sale for 200 gold and have enough gold it. ${playerGold} `)
        } else if (honeyWood === `blacksmith` && playerGold <= 200) {
            const honeyWood = honeyWoodBlacksmithPoor() // envokes the honeyWoodBlacksmithPoor function
        } else if (honeyWood === 'inn' && playerGold >= 5) {
            console.log(`You can stay the night for 5 gold. Your gold:${playerGold}`)
        } else if (honeyWood === 'inn' && playerGold < 5) {
            const honeyWood = honeyWoodInnPoor() // envokes the honeyWoosInnPoor function
        }

    } else if (fieldDirection == `east`) {
        const forestDirection = forest();
        if (forestDirection == `west`) {
            console.log("You reach the edge of the forest and find yourself in a field")
            const forestDirection = field();
        } else if (forestDirection == `east`) {
            const forestDirection = forestBear();
        }

    } else if (fieldDirection == `west`){
        console.log('You have discovered an old abandoned Church') // could be consolidated to a function
        const oldChurch = prompt('Would you like to explore or leave? ')
            if(oldChurch === `explore`){ 
                console.log("You found a chest with 110 gold!")
                const gold = churchGoldAdd()
                console.log("You are now leaving the oldChurch")
                const fieldDirection = field()

            } else if (oldChurch == `leave`){
                const church = field();
            }    
    } else if (fieldDirection == 'north'){

    }

    // Starting paths for forest choice
} else if (startingArea === `forest`) {
    const forestDirection = forest();


    if (forestDirection == `west`) {
        const fieldDirection = field()
    } else if (forestDirection == `east`) {
        const forestDirection = forestBear();
    }

    // Starting paths for town choice
} else if (startingArea === `town`) {
    console.log(`this is a test`)
}
