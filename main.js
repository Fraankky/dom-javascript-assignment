
async function getData(endpoint) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log("error pak")
        return [];
    }
}

const endpoint = ("https://api.escuelajs.co/api/v1/products?limit=24")

const headerContainer = document.getElementById("header")

function header() { 
    const headerElement = document.createElement("div");
    headerElement.classList.add("header");

    const logo = document.createElement("h3");
    logo.textContent = "Danantara";
    logo.classList.add("logo");

    const nav = document.createElement("nav");
    const homeMenu = document.createElement("a");
    homeMenu.classList.add("home");
    homeMenu.textContent = "home";
    homeMenu.classList.add("nav-link");

    const prodcutMenu = document.createElement("a");
    prodcutMenu.classList.add("product");
    prodcutMenu.textContent = "product";
    prodcutMenu.classList.add("nav-link"); 

    const cartMenu = document.createElement("a");
    cartMenu.classList.add("cart");
    cartMenu.textContent = "cart";
    cartMenu.classList.add("nav-link"); 

    nav.append(homeMenu, prodcutMenu, cartMenu);
    headerElement.append(logo, nav);

    document.body.prepend(headerElement)
}

header();

const productsContainer = document.getElementById("container")
async function app() {
    const products =  await getData(endpoint);

    products.forEach((product) => {
        const productContainer = document.createElement("div")
        console.log(product)

        const imageProduct = document.createElement("img")
        const titleProduct = document.createElement("h3");
        const priceProduct = document.createElement("p");
        const categoryProduct = document.createElement("p")
        const viewProduct = document.createElement("a")

        productContainer.classList.add("productCard")
        imageProduct.src = product.images;
        imageProduct.width = 320;
        imageProduct.height = 270;

        
        titleProduct.textContent = product.title;
        titleProduct.classList.add("text-title");

        priceProduct.textContent = `USD $ ${product.price}`;
        priceProduct.classList.add("text-price");

        viewProduct.textContent = "view product";
        viewProduct.classList.add("buttonView");
        categoryProduct.textContent = product.category.name;
        

        // add in document -> body
        productContainer.append(imageProduct, titleProduct, priceProduct, categoryProduct, viewProduct )
        productsContainer.append(productContainer);

    })
}
app();