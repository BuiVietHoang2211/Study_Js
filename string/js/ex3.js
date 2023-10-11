var keyword = `lorem`;

var content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

/*
Trình bày ý tưởng

Bước 1:
- Tìm vị trí xuất hiện của keyword trong content
- Cắt chuỗi từ đầu đến vị trí
- Cắt chuỗi từ vị trí tìm được đến hết keyword và bọc span
=> Nối 3 chuỗi trên và lưu vào biến khác ( biến result)

Bước 2:
- Cắt nội dung từ sau khi keyword đến hết chuỗi => gán vào biến content => biến content sẽ mang 1 giá trị mới là đoạn văn chưa tìm
Lặp lại bước 1

Bước 3:
- Cắt nội dung từ sau khi keyword của bước 2 đến hết chuỗi => gán vào biến content
- Lặp lại bước 1

=> Cứ lặp lại các bước cho đến khi nào vị trí trả về -1

*/

var result = "";

var position = content.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase());

while (position !== -1) {
  result +=
    content.slice(0, position) +
    ` <span>${content.slice(position, position + keyword.length)}</span>`;

  content = content.slice(position + keyword.length);

  position = content.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase());
}

result = result + content;

console.log(result);

var title = `<p> Tìm kiếm với từ khóa <b>${keyword}</b></p>`;

var bottom = ` <p> Đã tìm thấy <b>0</b> kết quả với từ khóa <b>${keyword}</b></p>`;
document.write(title + result + bottom);
