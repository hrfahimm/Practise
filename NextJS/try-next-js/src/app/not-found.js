/** @format */

import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className='text-center text-red-500 text-2xl items-center p-10'>
            NotFound
            <Link
                href='/'
                className='p-10'>
                Home{" "}
            </Link>
        </div>
    );
};

export default NotFound;
