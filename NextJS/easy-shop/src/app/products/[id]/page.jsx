/** @format */

import getSingleProduct from "@/utils/getSingleProduct";
import AddToCartBtn from "./AddToCartBtn";

export const revalidate = 0;

const ProductDetails = async ({ params: { id } }) => {
    const product = await getSingleProduct(id);
    const { imageUrls, title, price, ratings, features, details, brand, name } =
        product;
    return (
        <div>
            <h1>{name}</h1>
            <AddToCartBtn id={id} />
        </div>
    );
};

export default ProductDetails;
