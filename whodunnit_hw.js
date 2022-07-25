// Episode 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// The murderer is Miss Scarlet

// Episode 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
// murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The murderer is Professor Plum. The program will throw an error when you try to change the murderer since it's a const


// Episode 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// The murderer is Mrs. Peacock
// The murderer is Professor Plum
// murderer is only being altered within the scope of the delcareMurderer function

// Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Miss Scarlet, Professor Plum, Colonel Mustard
// Suspect three is Mrs. Peacock
// SuspectThree is only altered within the scope of the declareAllSuspects function
// But the string assigned to suspects will contain the changed suspectThree

// Episode 5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// The weapon is the Revolver
// You can alter elements within a const

// Episode 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

// const plotTwist = function() {
//     murderer = 'Mrs. White';
// }

// plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The murderer is Mrs. White
//  The changeMurderer function defines and calls the plot twist function within itself

// Episode 7
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
// murderer = 'Mr. Green';

// const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//         murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
// }

// plotTwist();
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The Murderer is Mr. Green
// the two nested functions don't alter the variable outside of their scope.

// Episode 8
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

// const plotTwist = function(room) {
//     if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//     }

// const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//         }
//     }

// unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// 
// The weapon is Candle Stick
// change scenario calls plot twist, plot twist calls unexpected outcome, everything follows through from there.

// Episode 9
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// The Murderer is Professor Plum
// The change to murderer doesn't exist outside of the scope of the if statement.

const scenario = {
    murderer: 'Mr. Green',
    weapon: 'Lead Pipe',
    room: 'Study'
};

const changeScenario = function () {
    let alternateScenario = {
        murderer: 'Professor Plum',
        weapon: 'Revolver',
        room: 'Kitchen'
    };
    const plotTwist = function () {
        possibleScenario = {
            murderer: 'Mrs. Peacock',
            weapon: 'Hunting Rifle',
            room: 'Library'
        };
        alternateScenario.murderer=possibleScenario.murderer;
        possibleScenario.room = scenario.room;
        scenario.murderer[7] = alternateScenario.room[3]
        scenario.weapon = possibleScenario.weapon;
        const neverSawItComing = function () {
            let alternateScenario = {
                murderer: 'Mr. Green',
                weapon: 'Poison',
                room: 'Dining Room'
            };
            alternateScenario.murderer = scenario.murderer
            possibleScenario.weapon = alternateScenario.weapon
            const gasp = function () {
                if (scenario.murderer[0] === scenario.room[0]){
                    scenario.murderer[6] = possibleScenario.murderer[7]
                    scenario.room = possibleScenario.room
                    scenario.murderer[8] = scenario.room[0]
                    possibleScenario.weapon = scenario.weapon
                }
                if (scenario.room === 'Library') {
                    alternateScenario.murderer = scenario.murderer
                    scenario.weapon = alternateScenario.weapon
                    scenario.murderer[3, 1, possibleScenario.weapon[3]]
                    possibleScenario.room = alternateScenario.room
                } else {
                    scenario.murderer[5, 1, possibleScenario.weapon[11]]
                    possibleScenario.weapon = alternateScenario.weapon

                }
            }
            scenario.murderer[0] = alternateScenario.room[0]
            scenario.room = alternateScenario.room
            gasp()
            

        };
        neverSawItComing()

        };
    plotTwist()
    alternateScenario.murderer = scenario.murderer
    scenario.room = alternateScenario.room;
    scenario.murderer[4] = possibleScenario.room[2]
    alternateScenario.weapon = scenario.weapon;

};

const declareScenario = function () {
    console.log(`The murderer is ${scenario.murderer}, the weapon was a ${scenario.weapon} and it happened in the ${scenario.room}`)
}

changeScenario()
declareScenario()