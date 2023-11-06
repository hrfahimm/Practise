/** @format */

"use client";

import { useEffect } from "react";

const ProductsError = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div className='text-center '>
            <h1 className='text-2xl font-bold'>
                {error.message || " something is wromg "}
            </h1>
            <button onClick={() => reset()}>Reset</button>
        </div>
    );
};

export default ProductsError;
