/** @format */

import getAllCategories from "@/utils/getAllCategories";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
    const categories = await getAllCategories();
    return (
        <div>
            <h1>categori</h1>
            {categories.map((category) => (
                <SingleCategory
                    category={category}
                    key={category.id}
                />
            ))}
        </div>
    );
};

export default Categories;
