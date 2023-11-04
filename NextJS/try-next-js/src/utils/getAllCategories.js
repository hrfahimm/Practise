/** @format */

const getAllCategories = async () => {
    const res = await fetch("http://localhost:5000/categories", {
        caches: "force-cache",
    });
    return res.json();
};

export default getAllCategories;
