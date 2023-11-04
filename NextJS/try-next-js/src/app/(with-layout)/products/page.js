/** @format */

import getAllProducts from "@/utils/getAllProducts";
import SingleProduct from "./SingleProduct";

const ProductsPage = async ({ searchParams }) => {
    const Products = await getAllProducts(searchParams.categoryId);
    return (
        <div>
            {Products.map((product) => (
                <SingleProduct
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
};

export default ProductsPage;
