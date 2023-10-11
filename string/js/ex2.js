// var email = "hoangan.web@gmail.com";

// // lấy username của email

// var username = email.slice(0, email.indexOf("@"));
// console.log(username);

// var fullname = "TẠ HOÀNG AN";

//  Kiểm tra biến full name có được viết hoa hay không

// if (fullname === fullname.toUpperCase()) {
//   console.log(" Viết hoa");
// } else {
//   console.log("Không viết hoa");
// }

var fullname = "tạ hoàng an";
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
// console.log(fullname);
// Chuyển thành tên dạng chuẩn: Tạ Hoàng An

var index;
var result = "";

for (var i = 0; i < fullname.length; i++) {
  var char = fullname.charAt(i);
  //   console.log(char);
  var charNext = fullname.charAt(i + 1);
  //   console.log(charNext);

  if (char === " " && charNext !== " ") {
    index = i + 1;
  }

  if (i === index) {
    result += char.toUpperCase();
  } else {
    result += char;
  }
}

console.log(result);
