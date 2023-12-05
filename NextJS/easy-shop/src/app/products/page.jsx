/** @format */

import getProducts from "@/utils/getProducts";
import SingleProducts from "./SingleProducts";

export const revalidate = 0;
export const metadata = {
    title: "ES || Products",
    description: " Easy Shop Is an E-commerc Web App ",
};

const products = async ({ searchParams: { categoryId } }) => {
    const products = await getProducts(categoryId);
    return (
        <div className='mt-10'>
            <h1>Products</h1>
            <div className='grid grid-cols-3 gap-5 mb-5'>
                {products.map((product) => (
                    <SingleProducts
                        product={product}
                        key={product._id}
                    />
                ))}
            </div>
        </div>
    );
};

export default products;
