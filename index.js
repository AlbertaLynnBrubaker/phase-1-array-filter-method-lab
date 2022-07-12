// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

const findMatching = (array, string) => {
    return array.filter(item => {
        return item === string || item.toLowerCase() === string.toLowerCase() || item.toUpperCase() === string.toUpperCase();
    });
}

// const findTruth = (item, stringArray) => {
//     let truth;
//     // for(let i = 0; i < stringArray.length; i++) {
//     //     if (item[0] === stringArray[i] || item[0] === stringArray[i].toLowerCase() || item[0] === stringArray[i].toUpperCase()) {
//     //         truth = true;
//     //     } else {
//     //         truth = false;
//     //     }
//     // }

//     stringArray.forEach(letter => {
//         truth = (!!(letter === item[0] && letter === item[0].toLowerCase() && letter === item[0].toUpperCase()))
//     })
//     console.log(truth)
//     return truth;
// }

// const fuzzyMatch = (array, string) => {
//     const stringArray = [];
//     for(letter in string) {
//         stringArray.push(string[letter])
//     }
//     return array.filter(item =>findTruth(item, stringArray))
// }

// for(let i = 0; i < stringArray.length; i++) {
//     let truth;
//    if (item[0] === stringArray[i]) {
//     truth = true;
//    } else if (item[0] === stringArray[i].toLowerCase()) {
//     truth = true;
//    } else if (item[0] === stringArray[i].toUpperCase()) {
//     truth = true;
//    } else {
//     truth = false;
//    }
//    return truth;
// }

// needs to return array of drivers by first initial matching letters in a string
    // array.filter to determine items that match each letter
        // 

const driverObjs = [
    {name: 'Alie',
    hometown: 'Minneapolis'},
    {name: 'Chris',
    hometown: 'Pike'},
    {name: 'Manny',
    hometown: 'Boxmeer'},
]

const matchName = (array, string) => {
    return array.filter(item => item.name === string)
}