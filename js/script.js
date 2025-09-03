// Filtro de precio en productos
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const products = document.querySelectorAll("#productos .col-md-3");

priceRange.addEventListener("input", () => {
  let maxPrice = parseInt(priceRange.value);
  priceValue.textContent = maxPrice.toLocaleString("es-CL");

  products.forEach(product => {
    let productPrice = parseInt(product.getAttribute("data-price"));
    if (productPrice <= maxPrice) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
