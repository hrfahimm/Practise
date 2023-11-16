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
            <td className='  p-4 border-slate-400'>
                <button
                    // onClick={() => handleAdd({ title, price })}
                    className='bg-blue-500 p-4 text-white rounded-xl'>
                    Add
                </button>
            </td>
            <ManageProduct products={products} />
        </div>
    );
};

export default ManageProductPage;
