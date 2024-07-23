// let str = 'the-stealth-warrior';
// let str0 = 'The_Stealth_Warrior';
// let str9 = 'The_Stealth-Warrior';

// function toCamelCase(a) {
//     let arr = [];
//     let arr1 = [];
//     let arr2 = [];
//     let str1;
//     arr = a.split('');
//     arr1.push(arr[0].toUpperCase());
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i - 1] !== '-' && arr[i - 1] !== '_') {
//             arr1.push(arr[i]);
//         } else {
//             arr1.push(arr[i].toUpperCase());
//         }
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== '-' && arr1[i] !== '_') {
//             arr2.push(arr1[i]);
//         }
//     }
//     str1 = arr2.join('');

//     return str1;

// }
// console.log(toCamelCase(str));
// console.log(toCamelCase(str0));
// console.log(toCamelCase(str9));

// упражнение 2
// const arrayOne = [1, 2];
// const arrayTwo = [1];
// const arrayThree = [1, 2, 2, 2, 3];
// const arrayFour = [2];

// function arrayDiff(a, b) {
//     const result = [];
//     if (a.length === 0 || b.length === 0) {
//         return a;
//     } else {
//         for (let i = 0; i < a.length; i++) {
//             let count = 0;
//             for (let j = 0; j < b.length; j++) {
//                 if (a[i] === b[j]) {
//                     count++;
//                 }
//             }
//             if (count < 1) {
//                 result.push(a[i]);
//             }
//         }
//         return result;
//     }
// }

// console.log(arrayDiff(arrayOne, arrayTwo));
// console.log(arrayDiff(arrayThree, arrayFour));

// упражнение 3
// let str = 'din';
// let str1 = 'recede';
// let str2 = 'Success';
// let str3 = '(( @';

// function duplicateEncode(word) {
//     const array = word.toLowerCase().split('');
//     count0 = 0;
//     for (let i = 0; i < array.length; i++) {
        
//         if (array[i] === '(' || array[i] === ')') {
//             count0++
//         }
        
//     }
//     if (count0 === 0) {
//         for (let i = 0; i < array.length; i++) {
//             let count = 0;
//             for (let j = 0; j < array.length; j++) {
//                 if (array[i] === array[j] && i !== j) {
//                     array.splice(j, 1, ')');
//                     count++
//                 }
//             }
//             if (count > 0) {
//                 array.splice(i, 1, ')');
//             } else if (count === 0) {
//                 array.splice(i, 1, '(');
//             }
    
//         }
//         newStr = array.join('');
//         return newStr; 
//     } else {
//         const newArr = [];
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] === '(') {
//                 newArr.push(0);
//             } else if (array[i] === ')') {
//                 newArr.push(1);
//             } else {
//                 newArr.push(array[i]);
//             }
//         }
//         for (let i = 0; i < newArr.length; i++) {
//             let count = 0;
//             for (let j = 0; j < newArr.length; j++) {
//                 if (newArr[i] === newArr[j] && i !== j) {
//                     newArr.splice(j, 1, ')');
//                     count++
//                 }
//             }
//             if (count > 0) {
//                 newArr.splice(i, 1, ')');
//             } else if (count === 0) {
//                 newArr.splice(i, 1, '(');
//             }
    
//         }
//         newStr = newArr.join('');
//         return newStr;
//     }
    
// }
// console.log(duplicateEncode(str));
// console.log(duplicateEncode(str1));
// console.log(duplicateEncode(str2));
// console.log(duplicateEncode(str3));

// упражнение 4
const array = ['w','e','w','e','w','e','w','e','w','e','w','e'];
let north = 0;
let south = 0;
let west = 0;
let east = 0;
let summ = 10;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 'n') {
        north++
    } else if (array[i] === 's') {
        south++
    } else if (array[i] === 'w') {
        west++
    } else if (array[i] === 'e') {
        east++
    }
}

if (north+south+west+east === summ) {
    
    if (north === south && west === east) {
        console.log('true');
    } else {
        console.log('false');
    }
} else {
    console.log('false');
}
