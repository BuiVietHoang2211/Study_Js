console.log(Array.prototype);

var users = ["Tú", "An", "Anh", "Dũng", "Dương"];

console.log(users);

// 1.at() => Lấy phần tử mảng theo index
// console.log(users.at(0));

// 2.concat => Nối mảng và trả về mảng mới sau khi nối

// console.log(users.concat([1, 2, 3], [4, 5, 6]));

// console.log(users.concat("Tuấn"));

// 3.indexOf(value) => Tìm vị trí xuất hiện đầu tiên của phần tử mảng theo giá trị
// console.log(users.indexOf("Dũng"));

// 4. lastIndexOf(value) => Tìm vị trí cuối

// 5. includes(value) => Tìm phần tử trong mảng và trả về true/false

// 6. slice(start,end) => Trả về 1 mảng bao gồm các phần tử từ start đến end
// console.log(users.slice(1, 3));
// console.log(users.slice(2));
// console.log(users.slice(-1));

// 7. join() => Gộp các phần tử mảng thành 1 chuỗi
// console.log(users.join("-"));

// 8.push() => Thêm phần tử vào cuối mảng và trả về số lượng sau khi thêm

// var count = users.push("A", "B", "C");
// console.log(users);
// console.log(count);

// console.log(users.concat("A", "B", "C", ["D"]));

// 9. unshift() => Thêm phần tử vào đầu mảng
// var count = users.unshift("A", "B", "C");
// console.log(users);
// console.log(count);

// 10. pop() => Xóa phần tử cuối mảng và trả về giá trị phần tử vừa xóa

// var value = users.pop();
// console.log(users, value);

// 11. shift() => Xóa phần tử đầu mảng
// var value = users.shift();
// console.log(users, value);

// 12. reverse() => Đảo ngược mảng
// users.reverse();
// console.log(users);

// 13. sort() => Sắp xếp mảng theo thứ tự tăng dần
// users.sort();
// console.log(users);

// var numbers = [5, 1, 10, 100, 70];
// numbers.sort(function (a, b) {
//     // a - b => tăng dần
//     // b - a => giảm dần
//   return a - b;
// });
// console.log(numbers);

// 14. fill => Thay thế tất cả các phần tử thành 1 giá trị
// console.log(users.fill("An"));

// 15. forEach() => Duyệt từng phần tử
// Lưu ý:
/*
- Không trả về giá trị
- Không dừng được ( Không break, không return)
*/
// users.forEach(function (user, index) {
//   console.log(user, index);
// });

// 16. map() => Duyệt các phần tử và trả về 1 mảng mới

// var result = users.map(function (user, index) {
//   console.log(user, index);
//   return `<h3>${user}</h3>`;
// });
// console.log(result);
// document.write(result.join(""));

// 17. some()
/*
- Trả về true nếu có 1 phần tử return về true
- Trả về false nếu không có phần tử nào return về true
*/

// var check = users.some(function (user) {
//   if (user === "An") {
//     return true;
//   }
// });
// console.log(check);

// 18. every()

/*
- Trả về true nếu tất cả các phần tử trả về true
- Trả về false nếu ít nhất 1 phần tử trả về false
*/
// var number = [1, 3, 5, 7, 9];
// var check = number.every(function (number) {
//   if (number % 2 !== 0) {
//     return true;
//   }
// });

// console.log(check);

// 19. filter()

/*
- Trả về 1 mảng
- Lấy ra các phần tử được return true
-
*/

// var result = users.filter(function (user) {
//   if (user === "An" || user === " Dũng") {
//     return true;
//   }
// });
// console.log(result);

// 20. find()
/*
- Trả về 1 phần tử của mảng
- Thỏa mãn điều kiện phần tử đầu tiên return true
 
*/

var result = users.find(function (user) {
  if (user === "An" || user === " Dũng") {
    return true;
  }
});
console.log(result);
