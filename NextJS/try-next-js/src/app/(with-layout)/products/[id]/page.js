/** @format */

import getSingleProduct from "@/utils/getSingleProduct";

const SingleProductPage = async ({ params }) => {
    const product = await getSingleProduct(params.id);
    return <div> {product.title}</div>;
};

export default SingleProductPage;
