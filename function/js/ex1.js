/*
function tenHam() {

}

function tenHam(thamso1, thamso2,..) {
    Nội dung hàm
}

Đặt tên:
    - camelCase
    - Sử dụng động từ get, set, make, build. print,....

    Hàm có giá trị trả về ( Hàm return)
    Hàm không có giá trị trả về (Hàm void)
*/

//Định nghĩa hàm
function getMessage(msg, type = "success") {
  console.log("F8 " + msg);
  console.log(type);
}

//Khi định nghĩa hàm => Tham số

//Gọi hàm
getMessage("Hoàng An", "error");
getMessage("Sơn");

// // Khi gọi hàm => Đối số

function getTotal(a, b) {
  var total = a + b;

  if (b !== 0) {
    return total;
  }

  return -1;
  // Khi từ khóa return được gọi => Các đoạn chương trình phía sau sẽ không hoạt động
}

getTotal(5, 10);

var total = getTotal(5, 10) + 100;
console.log(getTotal(5, 0));

function getMsg(msg) {
  var msgValue = msg + " F8";
  // Biến cục bộ
  return msgValue;
}
console.log(getMsg("Hoàng An"));

var msg = "F8";
function getMessage() {
  // Biến toàn cục
  return msg;
}

console.log(getMessage());
