const PRODUCTS = "https://datainlife.ru/junior_task/get_products.php";

async function fetchProducts() {
    try {
        const data = await fetch(PRODUCTS).then((res) => res.json());
        return data;
    } catch(e) {
        throw e;
    }
}

export {fetchProducts}