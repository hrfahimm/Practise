/** @format */

import Link from "next/link";
import React from "react";

const SingleCategory = ({ category }) => {
    const { id, title, name } = category;
    return (
        <div>
            <Link href={`/products?categoryId=${id}`}>
                <h1>*{name}</h1>
            </Link>
        </div>
    );
};

export default SingleCategory;
