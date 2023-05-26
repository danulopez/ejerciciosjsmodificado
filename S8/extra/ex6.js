
init()

const characters$$ = document.querySelector("[data-function='characters']")
const arena$$ = document.querySelector("[data-function='arena']")
let firstPlayer;
let secondPlayer;


async function init() {
    const characters = await getCharacters();
    printCharacters(characters);
}

async function getCharacters() {
    try {
        const res = await fetch("http://localhost:3000/characters");
        return await res.json();
    } catch (e) {
        console.error(e)
    }
}

    function printCharacters (characters){
      for (const character of characters) {
        const div$$ =document.createElement('div');
        div$$.classList.add("c-characters");
        div$$.innerHTML= `
        <img src="${character.avatar}"/>;
        <h2>${character.name}</h2>
        `
        div$$.addEventListener("click", () => {playerSelected(character) })
        characters$$.appendChild(div$$)


      }
}
function playerSelected(character) {
    if (firstPlayer) {
        secondPlayer = character;
        startBattle();
    } else {
        firstPlayer = character;
    }
}

function startBattle () {
    const button$$ = document.createElement("button");
    button$$.innerHTML = "Fight!"
    button$$.addEventListener('click', battle)
    characters$$.appendChild(button$$)
}

function battle () {

}

init()
//function battleRound (attackingCharacter,defendingCharacter) {
//    const totalDamage = 0;


 //   const num = Number(damage.substring(0,1));
//    const num2 = Number(damage.substring(2, damage.length));

 //   for (let index = 0; index < num; index++) {
 //       totalDamage = Math.floor(math.random()*num2) +1;
        
 //   }

//if(){
//    battleRound(defendingCharacter, attackingCharacter)

