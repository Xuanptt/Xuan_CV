"use strict";

/* Câu 9 Chức năng ẩn thông tin cá nhân
Ban đầu, bạn sẽ hiển thị ra form dữ liệu, ẩn container chứa thông tin. Sau đó, bạn sẽ xử lý DOM để bắt sự kiện khi click vào nút submit và thực hiện các thao tác như sau:
Lấy dữ liệu từ input mà người dùng đã nhập vào.
Kiểm tra dữ liệu có hợp lệ hay không: Nếu như nhập chuỗi rỗng hoặc không phải đúng định dạng email thì là không hợp lệ, bạn sẽ hiển thị lỗi lên cho người dùng.
Ngược lại, nếu như dữ liệu đã hợp lệ thì bạn sẽ hiện container chứa thông tin, đồng thời cũng ẩn form đi.*/

// Lấy các phần tử cần thao tác
const form = document.getElementById("infor-request");
const emailInput = document.getElementById("email");
const infoContainer = document.getElementById("infor-details");
const emailBtn = document.getElementById("email-btn");
const emailLabel = document.querySelector('label[for="email"]');

// Hàm kiểm tra định dạng email
function validateEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

emailBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn form submit mặc định. Without event.preventDefault(): If you omit the event object and the call to preventDefault(), the form will submit and reload the page, which might prevent your JavaScript code from executing the intended actions (like hiding the form or showing an error message) because the page will refresh immediately after the form submission.

  // Kiểm tra dữ liệu có hợp lệ không
  if (validateEmail(emailInput.value)) {
    // Nếu hợp lệ, ẩn form và hiển thị thông tin cá nhân
    form.style.display = "none";
    infoContainer.style.display = "block";
  } else {
    emailLabel.textContent =
      "Sai định dạng email: abc@funix.edu.vn Hãy nhập lại";
  }
});

/**10. Chức năng ẩn thông tin nghề nghiệp
Tiếp theo, bạn sẽ thêm chức năng để ẩn hiện thông tin của các kỹ năng nghề nghiệp.
Ban đầu trang Web sẽ chỉ hiển thị phần tiêu đề của từng kỹ năng, khi Hover vào từng phần sẽ có hiệu ứng như trên ảnh và hiển thị ra nút "View More".
Khi nhấn vào nút View More thì sẽ xem được nội dung toàn bộ thông tin và lúc này nút sẽ chuyển về "View Less"
Ngược lại, nếu nhấn vào View Less thì sẽ ẩn các thông tin đó đi và chuyển nút về "View More"
Để hoàn thành được yêu cầu này, bạn sẽ cần thêm sự kiện click vào các phần tử tiêu đề của từng kỹ năng, sau đó dùng các DOM Traverse để tìm các phần tử chứa thông tin tương ứng để hiển thị.
 */

const cards = document.querySelectorAll(".sec--3 .card");

cards.forEach(function (card) {
  // Tạo view more btn ở tất cả các card
  const viewMoreBtn = document.createElement("button");
  viewMoreBtn.textContent = "VIEW MORE";
  viewMoreBtn.classList.add(
    "viewmore-btn",
    "btn",
    "btn-warning",
    "btn-sm",
    "mt-2"
  );
  viewMoreBtn.style.display = "none";

  //Thêm button vào trước content
  const contentDiv = card.querySelector(".content");
  card.insertBefore(viewMoreBtn, contentDiv);

  // Tạo hiệu ứng hover, hiển thị ra nút "View More"
  card.addEventListener("mouseenter", function () {
    viewMoreBtn.style.display = "block";
  });

  // hiển thị content  và "View Less"
  viewMoreBtn.addEventListener("click", function () {
    if (contentDiv.style.display === "none") {
      contentDiv.style.display = "block";
      viewMoreBtn.textContent = "VIEW LESS";
    } else {
      contentDiv.style.display = "none";
      viewMoreBtn.textContent = "VIEW MORE";
    }
  });

  // Ẩn View More button, content khi di chuột ra chỗ khác
  card.addEventListener("mouseleave", function () {
    viewMoreBtn.style.display = "none";
    contentDiv.style.display = "none";
  });
});
