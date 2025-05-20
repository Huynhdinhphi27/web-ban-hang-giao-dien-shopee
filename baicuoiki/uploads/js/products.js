// js/products.js
const detailButtons = document.querySelectorAll('.product-item button');

detailButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productItem = button.parentElement;
    const productName = productItem.querySelector('h3').innerText;
    const productPrice = productItem.querySelector('p').innerText;
    const productImage = productItem.querySelector('img').src;

    // Tạo mô tả giả lập (có thể mở rộng sau)
    const productDescription = "Đây là sản phẩm chất lượng cao, phù hợp với mọi lứa tuổi và phong cách.";

    // Lưu vào localStorage
    localStorage.setItem('productDetail', JSON.stringify({
      name: productName,
      price: productPrice,
      image: productImage,
      description: productDescription
    }));

    // Chuyển hướng tới trang chi tiết
    window.location.href = 'detail.html';
  });
});
