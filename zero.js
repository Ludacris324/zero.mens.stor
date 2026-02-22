// 1. تعريف المتغيرات الأساسية
let cartCount = 0;
let totalPrice = 0;

// 2. الوصول لعناصر السلة في الهيدر
const cartBtn = document.querySelector(".cart-btn span");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// 3. وظيفة الإضافة للسلة
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // زيادة عدد المنتجات
    cartCount++;

    // جلب سعر المنتج من الكارت اللي اداس عليه
    const productCard = e.target.closest(".product-card");
    const priceText = productCard.querySelector(".price").innerText;
    const priceValue = parseInt(priceText.replace(/[^\d]/g, "")); // بياخد الرقم بس من النص

    // إضافة السعر للمجموع الكلي
    totalPrice += priceValue;

    // تحديث شكل الزرار والسلة فوق
    alert(`تم إضافة المنتج بنجاح! \nالمجموع الحالي: ${totalPrice} ج.م`);

    // تحديث الرقم اللي جنب السلة (لو عايز تظهره)
    document.querySelector(".cart-btn").innerHTML =
      `🛒 السلة (${cartCount}) - ${totalPrice} ج.م`;
  });
});
let count = 0;
let total = 0;
const cartDisplay = document.getElementById("cart-info");

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    count++;
    const price = parseInt(
      e.target.parentElement
        .querySelector(".price")
        .innerText.replace(/[^\d]/g, ""),
    );
    total += price;
    cartDisplay.innerText = `🛒 سلة التسوق (${count}) - ${total} ج.م`;
    alert("تمت الإضافة للملك! المجموع: " + total + " ج.م");
  });
});
