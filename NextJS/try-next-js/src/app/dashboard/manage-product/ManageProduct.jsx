/** @format */
import ManageSingleProduct from "./ManageSigleProduct";
import Modal from "@/components/Modal";

const ManageProduct = ({ products }) => {
    return (
        <div>
            <table className='border-collapse w-fill'>
                <thead>
                    <tr>
                        <th className='border border-slate-400 p-4'>Title</th>
                        <th className='border border-slate-400 p-4'>Pricer</th>
                        <th className='border border-slate-400 p-4'>Update</th>
                        <th className='border border-slate-400 p-4'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ManageSingleProduct
                            key={product.id}
                            product={product}
                        />
                    ))}
                </tbody>
            </table>
            <Modal />
        </div>
    );
};

export default ManageProduct;
