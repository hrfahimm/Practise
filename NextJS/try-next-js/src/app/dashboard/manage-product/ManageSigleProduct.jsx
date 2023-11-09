/** @format */

const ManageSingleProduct = ({ product }) => {
    const { id, title, price, categoryId, imageUrl } = product;

    return (
        <tr className='text-center w-full'>
            <td className='border p-4 border-slate-400 '>{title}</td>
            <td className='border p-4 border-slate-400 font-semibold '>
                {price}
            </td>
            <td className='border border-slate-400 '>
                <button className='bg-green-500 p-4 text-white px-3 py-2 rounded-xl'>
                    Update
                </button>
            </td>
            <td className='border border-slate-400'>
                <button className='bg-red-500 p-4 text-white px-3 py-2 rounded-xl'>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageSingleProduct;
