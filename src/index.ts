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

// type FuncType = (n: number, m: number, l?: number) => number

// // optional parameter
// const func: FuncType = (n, m, l) => {
//     if (typeof l === "undefined") return n * m;

//     return n * m * l;
// }
// func(5, 8);

// // default parameter
// type FuncType = (n: number, m: number, l?: number) => number
// const func: FuncType = (n, m, l = 20) => {
//     return n * m * l;
// }
// func(5, 8);

// const func1 = (n: number, m: number, l: number = 20): number => {
//     return n * m * l;
// }
// func1(5, 8);

// rest operator
// type FuncType = (...m: number[]) => number[]
// const func: FuncType = (...m) => {
//     return m;
// }
// func(5, 8, 3, 6);

// // using Function Keyword
// function my_func(n: number): number {
//     return 45
// }

// // Function Keyword with type aliasis
// type MyFuncType = (m: number) => number;

// const my_func_1: MyFuncType = function my_func_1(m) {
//     return m;
// }


// Function with Object
// interface Product {
//     name: string; stock: number; price: number; photo: string; readonly id: string;
// }

// type getDataType = (product: Product) => void;

// const getData: getDataType = (product) => {
//     // product.id="333"   -- not possible
//     console.log(product);
// };

// const productOne: Product = {
//     name: "Macbook",
//     stock: 40,
//     price: 90999,
//     photo: "sampleurl",
//     id: "mac-book",
// }

// getData(productOne)

// // Never type
// const errorHandler = (): never => {
//     throw new Error();
// }

// type themeMode = "light" | "dark";
// const mode:themeMode = "dark";


// CLASSES 

// class Student {
//     public readonly regNo: string;
//     constructor(private id: number, public score: number, protected grade: string) {
//         this.regNo = String(Math.random() * 100);
//     }

//     get getStudId(): number { return this.id };

//     set setId(val: number) { this.id = val };
// }

// const rahul = new Student(55, 87, "A+");
// console.log(rahul.id) -- invalid
// console.log(rahul.grade); -- invalid
// console.log(rahul.score);
// console.log("Id:", rahul.getStudId);
// rahul.setId=57; 
// console.log("Id:", rahul.getStudId);

// class Our_Stud extends Student {
//     scholar: boolean
//     constructor(id: number, score: number, grade: string, scholar: boolean) {
//         super(id, score, grade);
//         this.scholar = scholar;
//     }

//     getStudGrade = () => this.grade;
// }

// const neha = new Our_Stud(40, 95, "A++", true)
// console.log("Id:", neha.getStudId());
// console.log("Score:", neha.score);
// console.log("Grade:", neha.getStudGrade());
// console.log("Reg No.:", neha.regNo)
// // neha.regNo="34.37383" - not possible

// interface ProdType {
//     name: string;
//     price: number;
//     stock: number;
//     offer?: boolean;
// }

// interface GiveId {
//     getProdId: () => string;
// }

// class Product implements ProdType, GiveId {

//     private id: string = String(Math.random() * 1000);

//     constructor(public name: string, public price: number, public stock: number) {
//     }

//     getProdId = () => this.id;
// }

// const prod1 = new Product("Fan", 1200, 25);
// prod1.getProdId