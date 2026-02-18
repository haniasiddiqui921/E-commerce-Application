let productId = localStorage.getItem("productId");
let parent = document.getElementById("product-detail");

async function showProductDetail() {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );

  const product = await response.json();

  parent.innerHTML = `
    <img src="${product.image}">
     <h2>${product.title}</h2>
     <p>${product.description}</p>
    <h3>Price: $${product.price}</h3>
     <p>Category: ${product.category}</p>
  `;
}

showProductDetail();
