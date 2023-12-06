/** @format */

"use client";

import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";
import { FcBarChart } from "react-icons/fc";

// import { MdOutLineAddShoppingCart } from "react-icon/md";
const AddToCartBtn = ({ id }) => {
    const { isLoading, cart, mutate } = useCart();

    const isAlready = cart.findIndex((pd) => pd._id === id);
    const handleAddToCart = async (id) => {
        try {
            const res = await fetch(`/api/cart?id=${id}`, {
                method: "POST",
            });
            const result = await res.json;
            if (result.added) {
                toast.success(result.message);
                mutate();
            } else {
                toast.error(result.message);
            }
        } catch (error) {}
    };
    return (
        <button
            onClick={() => handleAddToCart(id)}
            className='btn btn-secondary mt-4'
            disabled={isAlready !== -1 || isLoading}>
            {" "}
            <FcBarChart />
            {isAlready}
        </button>
    );
};

export default AddToCartBtn;
