/*
Vòng lặp

1. Lặp với số lần lặp xác định trước : for

for (bienchay; dieukiendung; buocnhay) {

}

2. Lặp với số lần lặp không xác định trước: while, do while
*/

// // Vòng lặp for tăng
// for (var i = 1; i <= 10; i++) {
//   console.log(` Xin chào ${i}`);
// }

// // Vòng lặp for giảm
// for (var i = 10; i >= 1; i--) {
//   console.log(` Xin chào ${i}`);
// }

// Bài tập 1: Tính giá trị biểu thức
// S = 1 + 2 + 3  + ... + N

var n = 10;
var total = 0;
for (var i = 1; i <= n; i++) {
  total += i;
}

console.log(`Total = ${total}`);

// Bài tập 2 : Tính giá trị biểu thức

/*
total = 1 + 1 * 2 + 1 * 2 * 3 +..+ 1*2*3 *...*N
*/

var n = 3;
var total = 0;
var subTotal = 1; // N!
for (var i = 1; i <= n; i++) {
  subTotal *= i;
  total += subTotal;
}

console.log(` Total = ${total}`);

/*
i = 1 => subTotal = 1 * 1 => total = 0 + 1
i = 2 => subTotal = 1 * 1 * 2 => total = 0 + 1 + 1 * 1 * 2
i = 3 => subTotal =  1 * 1 * 2 * 3 => total = 0 + 1 + 1 * 1 * 2 + 1 * 1 * 2 * 3
*/

/*
Kiểm tra số nguyên tố N 

> 1
Chỉ chia hết cho 1 và chính nó
*/

var n = 5;
var check = true; // Giả định n là số nguyên tố
if (n <= 1 || n % 1 !== 0) {
  // Kiểm tra nếu n là số âm hoặc không phải số nguyên
  check = false;
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      // Nếu n chia hết cho một số từ 2 đến n-1 thì n không phải là số nguyên tố
      check = false;
      i = n; // Thoát khỏi vòng lặp khi tìm thấy ước số
    }
  }
}

if (check) {
  console.log(` ${n} là số nguyên tố`);
} else {
  console.log(` ${n} không là số nguyên tố`);
}
