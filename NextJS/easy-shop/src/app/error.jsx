/** @format */
"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-semibold text-red-600'>
                {error.message || "Something went wrong"}
            </h1>
            <button
                className='btn btn-circle bg-green-700'
                onClick={() => reset()}>
                Reset
            </button>
        </div>
    );
};

export default Error;
