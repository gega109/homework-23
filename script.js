// 1. ჯამი: შექმენი ფუნქცია, რომელიც მასივის რიცხვების ჯამს გამოთვლის reduce-ის გამოყენებით.

// const myNumbers = [1, 2, 3, 4, 5];

// let newNumbers = myNumbers.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);
// console.log(newNumbers);

// 2. უმაღლესი რიცხვი: დაწერე ფუნქცია, რომელიც მასივში ყველაზე მაღალ რიცხვს პოულობს reduce-ის გამოყენებით.

// const myNumbers = [5, 3, 9, 1, 6];

// let MaxNumber = myNumbers.reduce((cur, acc) => {
//   return cur > acc ? cur : acc;
// }, 0);

// console.log(MaxNumber);

// 4. სტრიქონების გაერთიანება: დაწერე ფუნქცია, რომელიც მასივში არსებული სტრიქონების გაერთიანებას ახდენს ერთ სტრიქონად.

// const Str = ["Hello", " world", "!"];

// let NewStr = Str.reduce((acc, cur) => {
//   return acc + cur;
// });

// console.log(NewStr);

// 5. რიცხვების გამრავლება: შექმენი ფუნქცია, რომელიც მასივში არსებული რიცხვების გამრავლებას ახდენს reduce-ის მეშვეობით.

// let Numbers = [5, 3, 9, 1, 6];

// let NewNumbers = Numbers.reduce((acc, cur) => {
//   return acc * cur;
// });
// console.log(NewNumbers);

// 7. რიცხვების სხვაობა: დაწერე ფუნქცია, რომელიც მასივში არსებული რიცხვების სხვაობას გამოთვლის reduce-ის გამოყენებით.

// let Numbers = [5, 3, 9, 1, 6];

// let NewNumbers = Numbers.reduce((acc, cur) => {
//   return acc - cur;
// });
// console.log(NewNumbers);

// 8. ორმაგი მნიშვნელობები: შექმენი ფუნქცია, რომელიც მასივის თითოეულ რიცხვს გაამრავლებს ორით map-ის გამოყენებით.

// let Numbers = [5, 3, 9, 1, 6];

// let NewNumbers = Numbers.map((number) => {
//   return number * 2;
// });

// 9. სტრიქონების შეცვლა: გქონდეს სტრიქონების მასივი. დაწერე ფუნქცია, რომელიც თითოეულ სტრიქონს პატარა ასოებით გადააქცევს map-ის გამოყენებით.

// const Str = ["Hello", " World", "Beqa"];

// let NewStr = Str.map((stricon) => {
//   return stricon.toLowerCase();
// });
// console.log(NewStr);

// 11. DOM მანიპულაცია: შექმენი HTML ელემენტების მასივი. map-ის გამოყენებით თითოეულ ელემენტზე დამატებული ტექსტი ჩაწერე.

const elements = [
  document.createElement("div"),
  document.createElement("p"),
  document.createElement("span"),
];
elements.map((el, index) => {
  el.textContent = `ეს არის ელემენტი ${index + 1}`;
  document.body.appendChild(el);
});

// 12. რიცხვების კვადრატები: დაწერე ფუნქცია, რომელიც მასივში არსებულ თითოეულ რიცხვს კვადრატში გაამრავლებს map-ის გამოყენებით.

// Numbers = [2, 4, 6, 7];

// let NewNumbers = Numbers.map((number) => {
//   return number * number;
// });
// console.log(NewNumbers);

// 13. DOM ელემენტების აღება: დაწერე ფუნქცია, რომელიც forEach-ის გამოყენებით თითოეულ HTML ელემენტს ტექსტს მიუმატებს.
// const Str = ["gega", "mari", "vaxo"];

// function createParagraphs(Str) {
//   const con = document.getElementById("container");

//   Str.forEach((content) => {
//     let p = document.createElement("p");
//     p.textContent = content;
//     p.style.fontSize = "30px";
//     p.style.color = "black";
//     con.appendChild(p);
//   });
// }

// createParagraphs(Str);

// 14. ქულების ზრდა: გქონდეს სტუდენტების მასივი, სადაც თითოეულ სტუდენტს აქვს ქულა. forEach-ის მეშვეობით თითოეულ ქულას დაუმატე 5 ქულა.

// const students = [
//   { name: "gega", points: 10 },
//   { name: "vaxo", points: 5 },
//   { name: "gujar", points: 3 },
//   { name: "niki", points: 2 },
// ];
// students.forEach((student) => {
//   return student.points += 5;
// });
// console.log(students);

// 16. რიცხვების შებრუნება: დაწერე ფუნქცია, რომელიც for ციკლის გამოყენებით შებრუნებულ რიგითობით დააბრუნებს მასივს.

// const numbers = [1, 2, 3, 4, 5];
// function reverseArray(arr) {
//   const reversed = [];
//   for (let index = arr.length - 1; index >= 0; index--) {
//     reversed.push(arr[index]);
//   }
//   return reversed;
// }
// const reversedNumbers = reverseArray(numbers);
// console.log(reversedNumbers);

// 17. DOM-ის შექმნა: შექმენი HTML დივ ელემენტები მასივიდან და ჩასვი ისინი გვერდზე for-ის გამოყენებით.

// const boxs = ["box1", "box2", "box3", "box4"];
// const con = document.getElementById("container");

// for (let index = 0; index < boxs.length; index++) {
//   let div = document.createElement("div");
//   div.textContent = boxs[index];
//   div.style.width = "200px";
//   div.style.height = "200px";
//   div.style.borderRadius = "15%";
//   div.style.padding = "40px";
//   div.style.backgroundColor = "black";
//   div.style.color = "white";
//   con.appendChild(div);
// }

// 18. ცხრილის გამოტანა: გქონდეს რიცხვების მასივი, for-ის გამოყენებით გამოიტანე თითოეული რიცხვის განმრავლების ცხრილი.
// const myNumbers = [2, 3, 4];

// myNumbers.forEach((number) => {
//   console.log(`გამრავლების ცხრილი ${number}-ისთვისx:`);
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// });

// 19. რიცხვების ფილტრაცია: დაწერე ფუნქცია, რომელიც filter-ის გამოყენებით დააბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც 10-ზე მეტია.

// let Numbers = [5, 15, 20, 7];

// let NewNumbers = Numbers.filter((number) => {
//   if (number > 10) {
//     return number;
//   }
// });
// console.log(NewNumbers);

// 20. DOM ელემენტების ფილტრაცია: გქონდეს HTML ელემენტების მასივი. filter-ის გამოყენებით დააბრუნე მხოლოდ ის ელემენტები, რომელთაც აქვთ კონკრეტული CSS კლასი.

// es kido ver gavige
