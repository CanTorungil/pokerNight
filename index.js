//initiates values for the flushes and allows prompt to function

const cards = ['2s', '2h', '2c', '2d', '3s', '4s', '5s', '6s', '7c', '3c', '4c', '5c', '6c', '7c', '3h', '4h', '5h', '6h', '7h', '3d', '4d', '5d', '6d', '7d', '8s', '8c', '8h', '8d', '9s', '9c', '9h', '9d', 'Ts', 'Tc','Th','Td','Js','Jc','Jh','Jd', 'Qs','Qc','Qh','Qd', 'Ks','Kc','Kh','Kd','As','Ac','Ah','Ad'];

//initialize sample player hand
let playerHand = '8cTs'
let communityHand = '3s2s5s6s7s'
let allCards = playerHand + communityHand


// ----------------------------------------------------------------------------------


// isFourKindPossible()

// function isFourKindPossible() {
    // let twos = [];
    // let threes = []
    // let fours = []
    // let fives = []
    // let sixes = []
    // let sevens = []
    // let eigths = []
    // let nines = []
//     let tens = []
//     let jacks = []
//     let queens = []
//     let kings = []
//     let aces = []

//     let allCards = playerHand +' '+ communityHand

    // for (i = 0; i < allCards.length; i++) { //initialize i, check conditional, add i so the loop ends
    //     if (allCards[i] == '2') { //checks how many cards are a two
    //         twos.push(allCards.slice(i, i + 1)) 
    //     } else if (allCards[i] == '3') {
    //         threes.push(allCards.slice(i, i + 1))
    //     } else if (allCards[i] == '4') {
    //         fours.push(allCards.slice(i, i + 1))
    //     } else if (allCards[i] == '5') {
    //         fives.push(allCards.slice(i, i + 1))
    //     }else if (allCards[i] == '6') {
    //         sixes.push(allCards.slice(i, i + 1))
    //     }else if (allCards[i] == '7') {
    //         sevens.push(allCards.slice(i, i + 1))
    //     }else if (allCards[i] == '8') {
    //         eigths.push(allCards.slice(i, i + 1))
    //     }else if (allCards[i] == '9') {
    //         nines.push(allCards.slice(i, i + 1))
    //     }else if (allCards[i] == 'T') {
    //         tens.push(allCards.slice(i, i + 1))
    //     }else if (allCards[i] == 'J') {
    //         jacks.push(allCards.slice(i, i + 1))
    //     }else if (allCards[i] == 'Q') {
    //         queens.push(allCards.slice(i, i + 1))
    //     }else if (allCards[i] == 'K') {
    //         kings.push(allCards.slice(i, i + 1))
    //     }else if (allCards[i] == 'A') {
    //         aces.push(allCards.slice(i, i + 1))
    //     }
    // }

//     if (
//         twos.length == 4 || 
//         threes.length == 4 || 
//         fours.length == 4 || 
//         fives.length == 4 || 
//         sixes.length == 4 || 
//         sevens.length == 4 || 
//         eigths.length == 4 || 
//         nines.length == 4 || 
//         tens.length == 4 || 
//         jacks.length == 4 || 
//         queens.length == 4 || 
//         kings.length == 4 || 
//         aces.length == 4
//         ) { 
//         console.log('You can make a four kind!')
//     } else {
//         console.log('You cannot make a four kind.')
//     } 
// }

// isRoyalFlushPossible()

// function isRoyalFlushPossible() {
  
//     let tens = []
//     let jacks = []
//     let queens = []
//     let kings = []
//     let aces = []
//     let clubs = []
//     let diamonds = []
//     let hearts = []
//     let spades = []

//     let allCards = playerHand +' '+ communityHand
//     console.log(allCards)
//     for (i = 0; i < allCards.length; i++) { //initialize i, check conditional, add i so the loop ends
//         if (allCards[i] == 'T') {
//             tens.push(allCards.slice(i, i + 1))
//         }else if (allCards[i] == 'J') {
//             jacks.push(allCards.slice(i, i + 1))
//         }else if (allCards[i] == 'Q') {
//             queens.push(allCards.slice(i, i + 1))
//         }else if (allCards[i] == 'K') {
//             kings.push(allCards.slice(i, i + 1))
//         }else if (allCards[i] == 'A') {
//             aces.push(allCards.slice(i, i + 1))
//         }else if (allCards[i] == 's') {
//             spades.push(allCards.slice(i, i + 1))
//         } else if (allCards[i] == 'd') {
//             diamonds.push(allCards.slice(i, i + 1))
//         } else if (allCards[i] == 'h') {
//             hearts.push(allCards.slice(i, i + 1))
//         } else if (allCards[i] == 'c') {
//             clubs.push(allCards.slice(i, i + 1))
//         }
//     }

//     if (
//         clubs.length > 4 ||
//          diamonds.length > 4 ||
//           hearts.length > 4 ||
//            spades.length > 4
//         ) { 
//             if (
//                 jacks.length > 0 &&
//                 queens.length > 0 &&
//                 kings.length > 0 &&
//                 aces.length > 0 &&
//                 tens.length > 0 
//             ){
//                 console.log('You can make a Royal Flush!')
//             } else {
//                 console.log('You can make a normal flush but not a royal one.')
//             }
            
//         } else {
//         console.log('You cannot make a Royal Flush.')
//     } 
// }



// ----------------------------------------------------------------------------------

highCard()


function highCard() {
    let allCards = playerHand + communityHand
    let hard = []
    for (i=0; i < allCards.length; i += 2 ) {
        hard.push(Number(allCards[i]))
    }
    console.log(hard)
    hard.sort(function(a, b) {
        return b - a;
      });
      
      console.log(hard[0] + ' is your highest number.');
  
}

pair()

function pair() {
    let testArr = Array.from(allCards)
    for (i = 0; i < allCards.length; i++) {
        let occurancesOfTarget = testArr.filter((targetVal) => targetVal === allCards[i])
        if (occurancesOfTarget > 1) {
            console.log('A pair is possible');
        }
    }
}

// threepair()

// function threepair() {
//     let testArr = Array.from(allCards)
//     for (i = 0; i < allCards.length; i++) {
//         let occurancesOfTarget = testArr.filter((targetVal) => targetVal === allCards[i])
//         if (occurancesOfTarget.length > 2) {
//             console.log('A three pair is possible');
//         }
//     }
// }
// console.log(allCards)

// pair()

// function pair() {
//     let allCards = playerHand + communityHand
//     let hard = []
//     for (i=0; i < allCards.length; i += 2 ) {
//         hard.push(Number(allCards[i]))
//     }
//     console.log(hard)
//     hard.sort(function(a, b) {
//         return b - a;
//       });
      
   
// }









checkFullHouse()

function checkFullHouse(playerHand, communityCards){
    let threeKind = [];
    let twoKind = [];

    const convertedVals = convertCardValues(playerHand, communityCards);
    const arrayVals = convertedVals[0].split('')

    const sortedVals = arrayVals.sort(function (a, b) {
        return b - a;
    });

    for (let i = 0; i < sortedVals.length; i++) {
        if (threeKind.length === 3) break;

        let occurencesOfTargetVal = sortedVals.filter(
        (val) => val  === sortedVals[i]
        );
        if (occurencesOfTargetVal.length === 3) {
            threeKind.push(sortedVals[i]);
        }
    }

    console.log(threeKind);

    if (threeKind.length === 3) {
        for (let i = 0; i < sortedVals.length; i++) {
            let occurencesOfTargetVal = sortedVals.filter(
                (val) => val === sortedVals[i]
            );
            if (
                occurencesOfTargetVal.length = 2 ||
                 (occurencesOfTargetVal.length === 3 && sortedVals [i] != threeKind)
               ){
                twoKind.push(sortedVals[i]);
               }
           } 
        } else {
            console.log('A full house is not possible.')
           }
        
}

