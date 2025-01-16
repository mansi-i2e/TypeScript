"use strict";
// const a = 250
// alert(a)
// // datatypes
// let x: string = "{27}"
// let num: number = 230;
// let check: boolean
// let fruit = <string>"mango";
// let user;
// // union type
// let surname: string | number;
// surname = "beth";
// surname = 353;
// function definition/declaration
// const func = (a: number, b: number): number => {
//     console.log(a, b);
//     // return String(a * b);
//     return a * b;
// }
// console.log(func(5, 7));
// custom data type , aliasis
// type UserName = string | number;
// let a: UserName = "mansi20";
// type func_add = (a: number, b: number) => number;
// const func: func_add = (a, b) => {
//     console.log(a, b);
//     return a + b;
// }
// ARRAY
// const array: number[] = [33,58,72,95];
// const arr: [number,number,number,number] = [3, 5, 2, 9];   // fixed size array or tuple
// const arr2: Array<string> = ["a", "b", "c", "d", "e"];
// const arr3: Array<string | number> = ["Hello", 452, 27, 100];
// arr3[2] = "hey";
// arr.forEach(i => {
//     i.       // num methods
// })
// arr2.forEach(i => {
//     i.        // string methods
// })
// OBJECTS
// type obj = {
//     height: number;
//     weight: number;
//     gender?: boolean;   // optional
// }
// const my_obj_1: obj = {
//     gender: true,
//     height: 154.5,
//     weight: 43,
// }
// const my_obj_2: obj = {
//     height: 166,
//     weight: 55,
// }
// interface detail {
//     name: string,
//     age: number,
//     gender?: boolean,
// }
// type FuncType = (a: number, b: number) => void;
// interface my_detail extends detail {
//     scholar: boolean;
//     func?: FuncType;
// }
// const detail_1: my_detail = {
//     name: "Simran",
//     age: 23,
//     scholar: true,
// }
// const detail_2: my_detail = {
//     name: "Rohit",
//     age: 19,
//     scholar: false,
//     func: (a, b) => {
//         console.log(a * b);
//     },
// };
// detail_2.func(3, 9);
// FUNCTIONS
