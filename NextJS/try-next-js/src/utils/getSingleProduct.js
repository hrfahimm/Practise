/** @format */

const getSingleProduct = async (id) => {
    const res = await fetch(`https://localhost:5000/products/${id}`, {
        cache: "no-cache",
    });
    return res.json();
};

export default getSingleProduct;
