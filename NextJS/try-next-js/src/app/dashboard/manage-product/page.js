/** @format */

import getAllProducts from "@/utils/getAllProducts";
import ManageProduct from "./ManageProduct";
export const metadata = {
    title: "Next || Manage-Product",
    description: "Hellow Next Js",
};

const ManageProductPage = async () => {
    const products = await getAllProducts();

    return (
        <div className='w-full mt-10'>
            <h1 className='mb-5 text-2xl font-bold'> ManageProductPage</h1>
            <ManageProduct products={products} />
        </div>
    );
};

export default ManageProductPage;
