let parent = document.getElementById("all-products");
async function showAllProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("API Fail to grt Data");
        }

        let products = await response.json();
        

        products.forEach((product) => {
            console.log(product);

            let child = document.createElement("div");

            child.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title" >${product.title}</h5>
                        <p class="card-text"><strong>Price: $${product.price}</strong></p>
                        <button  class ="button" onclick="goToDetailPage(${product.id})">
                            Check product detail
                        </button>
                    </div>
                </div>
            `;

            parent.appendChild(child);
        });
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
}
showAllProducts()
// Example function to navigate to product details page
function goToDetailPage(productId) {
  
 // Product ID save
  localStorage.setItem("productId", productId);

    window.location.href = `productDetailPage.html?id=${productId}`;
  // Extra cheez (optional – sirf samajhne ke liye)
//   localStorage.setItem("productId2", "Hello");
//   localStorage.setItem("username", "Ali");

}



async function filterProducts(category) {

    parent.innerHTML = "";   // purane cards remove

    try {

        let response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error("API Fail to grt Data");
        }
        let products = await response.json();

        products.forEach((product)=> {

            if (category === "all" || product.category === category) {

                let child = document.createElement("div");

                child.innerHTML = `
                     <div class="card" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title" >${product.title}</h5>
                        <p class="card-text"><strong>Price: $${product.price}</strong></p>
                        <button  class ="button" onclick="goToDetailPage(${product.id})">
                            Check product detail
                        </button>
                    </div>
                </div>
                `;

                parent.appendChild(child);
            }

        });

    } catch (error) {
        console.log("Error aa gaya:", error);
    }
}

