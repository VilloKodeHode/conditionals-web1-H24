// Initial declaration of variable x with a value of 10
let x = "tall";

// Conditional statements to check the value of x and log appropriate messages
if (x === 10) {
    console.log("tallet er 10")
} else if (x < 10) {
    console.log("tallet er mindre enn 10")
} else if (x > 10) {
    console.log("tallet er større enn 10")
} else {
    console.log("tallet er ikke en integer")
}

// Ternary operator providing a more concise way to express the same logic as the if-else statements
x === 10 ? console.log("tallet er 10")
    : x < 10 ? console.log("tallet er mindre enn 10")
        : x > 10 ? console.log("tallet er større enn 10")
            : console.log("tallet er ikke en integer")


// Bar logikk (Simple logic)

// Declaring varibale age with a value of 16
let age = 18;
let drikke;

// Checking the age and logging messages based on the condition
if (age >= 20) {
    console.log("Kunde er myndig og får lov til å drikke alle typer alkohol vi serverer")
    drikke = "FIREBAAAAL"
}
else if (age >= 18 && age < 20) {
    console.log("Kunden er myndig og får lov til å drikke alkohol, men ikke drikke sprit")
    drikke = "øl"
} else {
    console.log("Kunden er ikke myndig og får ikke lov til å drikke alkohol")
    drikke = "juice"
}


console.log(drikke)

const whatToGive = age >= 20 ? "Ta deg en FIREBALL gamlefar!" : age >= 18 && age < 20 ? "Ta den en øl din voksen!" : "Ta deg en juice in unge!"

console.log(whatToGive)

// How to use the randomNumberGenerator with if/else:

// Generating a random number between 1 and 20, rounding it to the nearest integer
let diceThrow = Math.ceil(Math.random() * 20)
let health = 100
let enemyHealth = 80

if (diceThrow === 20) {
    console.log(diceThrow, "Nat 20! You crit with your hit!")
    enemyHealth -= 40;
    console.log(enemyHealth)
} else if (diceThrow >= 15) {
    console.log(diceThrow, "A decent throw! You hit your target easily")
    enemyHealth -= 20;
    console.log(enemyHealth)
} else if (diceThrow >= 10) {
    console.log(diceThrow, "You grazed your target for half damage")
    enemyHealth -= 10;
    console.log(enemyHealth)
} else if (diceThrow >= 5) {
    console.log(diceThrow, "You missed you target you clutz!")
    console.log(enemyHealth)
} else if (diceThrow >= 2) {
    console.log(diceThrow, "You hit air and fall over, dufus!")
    health -= 10;
    console.log(health)
} else if (diceThrow === 1) {
    console.log(diceThrow, "You damage youself for full damage!")
    health -= 20;
    console.log(health)
}

function combat() {
    if (diceThrow === 20) {
        console.log(diceThrow, "Nat 20! You crit with your hit!")
        enemyHealth -= 40;
    } else if (diceThrow >= 15) {
        console.log(diceThrow, "A decent throw! You hit your target easily")
        enemyHealth -= 20;
    } else if (diceThrow >= 10) {
        console.log(diceThrow, "You grazed your target for half damage")
        enemyHealth -= 10;
    } else if (diceThrow >= 5) {
        console.log(diceThrow, "You missed you target you clutz!")
    } else if (diceThrow >= 2) {
        console.log(diceThrow, "You hit air and fall over, dufus!")
        health -= 10;
    } else if (diceThrow === 1) {
        console.log(diceThrow, "You damage youself for full damage!")
        health -= 20;
    }
    console.log("enemyHealth" ,enemyHealth)
    console.log("health" ,health)
}

// calling the function:
combat()

// Generating a random number between 1 and 10, rounding it to the nearest integer
let randomNumber = Math.ceil(Math.random() * 10);

// Conditional statements to check the value of randomNumber and log appropriate messages
if (randomNumber < 5) {
    console.log("Tallet er mindre enn 5");
} else if (randomNumber > 5) {
    console.log("Tallet er større enn 5");
} else {
    console.log("Tallet er 5");
}

// Logging the value of randomNumber using template literals
console.log(`Tallet er ${randomNumber}`);