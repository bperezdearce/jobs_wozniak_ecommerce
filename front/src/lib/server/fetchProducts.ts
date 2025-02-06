async function fetchProducts() {
    try {
        const response = await fetch("http://localhost:3000/products");
        const products = await response.json();
        return products;
    } catch(error) {
        console.log(error)
    }
}

export default fetchProducts;