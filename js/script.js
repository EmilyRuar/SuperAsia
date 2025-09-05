//FILTRO DE PRECIO
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const products = document.querySelectorAll("#productos .col-md-3");

if (priceRange && priceValue && products.length > 0) {
  priceRange.addEventListener("input", () => {
    let maxPrice = parseInt(priceRange.value);
    priceValue.textContent = maxPrice.toLocaleString("es-CL");

    products.forEach(product => {
      let productPrice = parseInt(product.getAttribute("data-price"));
      product.style.display = (productPrice <= maxPrice) ? "block" : "none";
    });
  });
}
 //FORMULARIO
// FORMULARIO DE CONTACTO
window.addEventListener("load", () => {
  const form = document.getElementById("form-contacto");
  const mensajeExito = document.getElementById("mensaje-exito");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // evita recargar la página

      const email = document.getElementById("email").value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        alert("Por favor ingresa un correo válido.");
        return;
      }

      // Mostrar mensaje de éxito
      mensajeExito.style.display = "block";

      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        mensajeExito.style.display = "none";
      }, 3000);

      // Limpiar formulario
      form.reset();
    });
  }
});
