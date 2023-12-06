/** @format */

import React from "react";
import SingleCategories from "./SingleCategories";
import getCategories from "@/utils/getCategories";

const Categories = async () => {
    const categories = await getCategories();
    return (
        <div className='mt-14'>
            <h3 className='mb-8 text-3xl font-bold text-center uppercase'>
                Categori
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-5 gap-5'>
                {categories.map((category) => (
                    <SingleCategories
                        category={category}
                        key={category._id}></SingleCategories>
                ))}
            </div>
        </div>
    );
};

export default Categories;
