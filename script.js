class Product {
    imgLink;
    productName;
    productPrice;

    constructor(link, name, price){
        this.imgLink = link;
        this.productName = name;
        this.productPrice = price;

        const product = document.createElement("div");
        product.innerHTML =
        `
        <img src="${this.imgLink}">
        <h5>${this.productName}</h5>
        <h6>${this.productPrice}</h6>
        <button>Купить</button>
        `
        document.body.append(product);
        
    }
}
let a = new Product("https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdnn21.img.ria.ru%2Fimages%2F156087%2F28%2F1560872802_0%3A778%3A1536%3A1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg&tbnid=yYHDl1_9fcMpKM&vet=12ahUKEwie4P25-vCCAxUG3KQKHRFWD48QMygFegQIARB4..i&imgrefurl=https%3A%2F%2Fria.ru%2F20191113%2F1560867458.html&docid=zMlli1AzDmX2FM&w=600&h=337&q=%D1%84%D0%BE%D1%82%D0%BE%20%D0%BA%D0%BE%D1%82%D0%B0&ved=2ahUKEwie4P25-vCCAxUG3KQKHRFWD48QMygFegQIARB4", "name", 20);