/** @format */

const getAllProducts = async (category) => {
    let url = "http://localhost:5000/products";
    if (category) {
        url += "?categoryId=" + category.id;
    }
    const res = await fetch(url, {
        caches: "no-cache",
    });
    return res.json();
};

export default getAllProducts;
