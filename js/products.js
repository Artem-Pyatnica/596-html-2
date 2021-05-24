const productsJson = 
`[
    {
        "id": "1",
        "title": "Mini Gir",
        "image": "img/gir.png",
        "description": "Mini Gir Sticker",
        "price": 49.99
    },
    {
        "id": "2",
        "title": "Gir Happy",
        "image": "img/gir-happy.png",
        "description": "Happy Gir sticker",
        "price": 19.99
    },
    {
        "id": "3",
        "title": "Zir",
        "image": "img/zim.png",
        "description": "Zim sticker",
        "price": 24.99
    }
]`;

function renderProducts(products) {
    const productsContainer = document.querySelector('.product-list');
    let html = '';
    for (const product of products ) {
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

renderProducts(JSON.parse(productsJson));