'use strict';


function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
    
	return {
		name: name,
		nickname: nickname,
		race,
		origin,
		attack,
        defense,
        weapon,
		describe() {
			console.log(`${name} is a ${race} of ${origin} who uses ${weapon}.`);
		},
		evaluateFight: function(character) {
			let damagedOpponent = Math.max(0, this.attack - character.defense);
			let damagedSelf = Math.max(0, character.attack - this.defense);
            
			console.log(`Your opponent takes ${damagedOpponent} damage and you receive ${damagedSelf} damage.`);
		}
	};
}



const characterParams = [
	['Gandalf the Grey',    'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a staff'], 
	['Bilbo Baggins',       'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the ring'],
	['Frodo Baggins',       'frodo', 'Hobbit', 'The Shire', 3, 2, 'sting'],
	['Aragorn son of Arathorn','aragorn', 'Man', 'Dunedain', 6, 8, 'anduril'],
	['Legolas',             'legolas', 'Elf', 'Woodland Realm', 8, 5, 'a bow']
];

function createObjArr(){
	let characters = [];
	for(let i = 0; i < characterParams.length; i++){
	    let character = characterParams[i];
	    characters.push(createCharacter(...character));
	}
	return characters;
}
let charactersArr = createObjArr();

charactersArr.push(createCharacter('Arwen Undomiel', 'arwen', 'Elf', 'The Forest', 30, 44, 'hadhafang'));



const ranger = charactersArr.find(indiv => {
	return indiv.nickname === 'aragorn';
});
// if (ranger !== null && ranger !== undefined) {
if (ranger) {
	ranger.describe();
}
else {
	console.error('Aragorn does not exist. (but he really does, you just forgot him)');
}



const hobbits = charactersArr.filter(indiv => {
	return indiv.race === 'Hobbit';
});

for (let i = 0; i < hobbits.length; i++){
    hobbits[i].describe();
}


const strong = charactersArr.filter(indiv => {
	return indiv.attack > 5;
});

for (let i = 0; i < strong.length; i++) {
    strong[i].describe();
}

