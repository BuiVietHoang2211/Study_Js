// Expression function

// var getMessage = function () {
//   // Nội dung
//   return "F8";
// };

// console.log(getMessage());

// IIFE

// (function (name) {
//   console.log("Hoàng AN", name);
// })("F8");

// var sum = function () {
//   console.log(arguments);
//   // arguments => Không hoạt động trong arrow function (ES6)
// };

// sum(5, 10, 15, 20, 25, 30);

// rest parameter
// var getTotal = function (msg, ...args) {
//   console.log(args);
//   console.log(msg);
// };

// getTotal("Tổng =", 5, 10, 15, 20, 25, 30);

// var a = function (name) {
//   console.log(` Hoàng An: ${name}`);
// };

// var b = a;
// var c = b;
// a("F8");

var getA = function (fn, ...args) {
  console.log("getA");
  if (typeof fn === "function") {
    fn(...args); //spread
  }
};

// var getB = function (name) {
//   console.log("getB", name);
// };

// var callGetB = function () {
//   getB("F8");
// };

// var getC = function () {
//   console.log("getC");
// };

getA(
  function (name, email) {
    console.log("getC", name, email);
  },
  "F8",
  "hoangan.web@gmail.com"
); // Gọi hàm theo kiểu callback

/*
Gọi hàm chủ động
Gọi hàm bị động

=> Xử lý bất đồng bộ
*/

// setTimeout()
// setInterval()

// setTimeout(
//   function (name, email) {
//     console.log("Xin chào F88", name, email);
//   },
//   1000,
//   "Hoàng An",
//   "hoangan.web@gmail.com"
// );

// var count = 0;
// var id = setInterval(function () {
//   console.log(` Xin chào: ${++count}`);
//   if (count === 10) {
//     clearInterval(id);
//   }
// }, 1000);

// var showMessage = function (name) {
//   //   console.log("showMessage");
//   var display = function () {
//     console.log("Xin chào : " + name);
//   };
//   display();
// };
// showMessage("F8");

/*
Hàm con

Chỉ được gọi trong hàm cha ( không được gọi ngoài hàm cha)

Được phép sử dụng:
- Biến toàn cục
- Biến cục bộ của hàm cha
- Tham số của hàm cha
- Tham số của chính nó
- Biến cục bộ của chính nó
*/
