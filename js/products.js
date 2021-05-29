
let products;

function renderProducts() {
    const productsContainer = document.querySelector('.product-list');
    let html = '';
    for (const product of  ) {
        html += `<article>
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <button>Info</button>
        <button>Buy - ${product.price}</button>
    </article>`;
    }
    productsContainer.innerHTML = html;
}

renderProducts();



function fetchProducts() {
  fetch('products.json')
    .then(response => response.json())
    .then(productsFromServer => products = productsFromServer);
}