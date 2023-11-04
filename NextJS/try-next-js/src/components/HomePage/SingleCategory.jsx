/** @format */

import Link from "next/link";
import React from "react";

const SingleCategory = ({ category }) => {
    const { id, name } = category;
    return <Link href={`/products?categoryId=${id}`}>{name}</Link>;
};

export default SingleCategory;
