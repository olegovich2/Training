// task1
// const array = ['агруши', 'яблоки', 'сливы', 'абрикосы', 'апельсины', 'бананы'];
// const newArray = [];
// for (let element of array) {
//     if (element[0] == 'а') {
//         newArray.push(element);
//     }
// }
// console.log(newArray);
// task2
// const array = ['груши', 'яблоки', 'сливы', 'абрикосы', 'апельсины', 'бананы'];
// const newArray = [];
// for (let element of array) {
//     if (element.length == 5) {
//         newArray.push(element);
//     }
// }
// console.log(newArray);
// task3
// const array = [-3, -2, -1, 1, 2, 3, 4, 5];
// const newArrayPlus = [];
// const newArrayMinus = [];
// function plus(array) {
//     for (let element of array) {
//             if (element > 0) {
//                 newArrayPlus.push(element);
//             }
//         }
//         return newArrayPlus;
// }
// function minus(array) {
//     for (let element of array) {
//             if (element < 0) {
//                 newArrayMinus.push(element);
//             }
//         }
//         return newArrayMinus;
// }
// console.log(plus(array));
// console.log(minus(array));
// task4
// const array = [2, 5, 9];
// array.splice(0,1);
// console.log(array.slice(0,1));
// console.log(array);
// task5
// const array = [1, 2, 3, 4, 5];
// array.splice(3,2);
// console.log(array);
// task6
// const array = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// let newArray = array.slice(3);
// console.log(newArray);
// task5
// const array = [1, 2, 3, 4, 5];
// array.splice(1, 0, 'a', 'b');
// console.log(array);
// array.splice(6, 0, 'c');
// console.log(array);
// array.splice(8, 0, 'e');
// console.log(array);
// task6
// const array = [1, 2, 3, 4, 5];
// const array1 = ['груши', 'яблоки', 'сливы', 'абрикосы', 'апельсины', 'бананы'];
// console.log(array.concat(array1));
// task7
// const friends = [
//     {name: 'alex', pizzas: ['cheese', 'pepperoni']},
//     {name: 'mike', pizzas: ['salami', 'margarita']},
//     {name: 'stas', pizzas: ['meat']},
//     {name: 'anna', pizzas: ['fish']},
// ];
// let pizzas = [];
// for (let element of friends) {
//     pizzas = pizzas.concat(element.pizzas);
// }
// console.log(pizzas);
// task8
// let func = (a,b) => {
//     return a + b;
// }
// let func1 = (a,b) => a + b;
// console.log(func(2,5));
// console.log(func1(2,5));
// task9
// const arr = [1, 2, 3, 4, 5];
// let newArr = [];
// arr.forEach(element => {
//     newArr.push(element * 10)
// });
// console.log(arr);
// console.log(newArr);
// task10
// const array = [-3, -2, -1, 1, 2, 3, 4, 5];
// let newArr = [];
// let newArr1 = [];
// let newArr2 = [];
// array.forEach(element => {
//     newArr.push(element * 5)
// });
// array.forEach(element => {
//     newArr1.push(Math.pow(element, 2));
// });
// array.forEach(element => {
//     newArr2.push(element**= 2);
// });
// console.log(newArr);
// console.log(newArr1);
// console.log(newArr2);

// task11
// const friends = [
//     { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
//     { name: 'mike', pizzas: ['salami', 'margarita'] },
//     { name: 'stas', pizzas: ['meat'] },
//     { name: 'anna', pizzas: ['fish'] },
// ];
// let likes = [];
// friends.forEach(element => {
//     likes.push(element.name + ' likes ' + element.pizzas.join(' and '));
// });
// console.log(likes);

// task12
// const array = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// let object = {};
// array.forEach(fruit => {
//     if (object[fruit]) {
//         object[fruit]++
//     } else {
//         object[fruit] = 1;
//     }
// });
// console.log(object);
// console.log(kiwi, apple, orange);
// object[0]['kiwi'] = kiwi;
// console.log(object);

// task13
// const array = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// let newArr = [];
// console.log(array.includes('kiwi'));
// console.log(array.indexOf('orange'));
// array.forEach(element => {
//     if (newArr.includes(element) == false) {
//         newArr.push(element)
//     }
//     });
//     console.log(newArr);