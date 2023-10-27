/** @format */

import Link from "next/link";

export const metadata = {
    title: "Next || Blogs",
    description: "Hellow Next Js",
};
const blogs = [
    {
        id: 1,
        year: 2000,
        title: "title!",
    },
    {
        id: 1,
        year: 2000,
        title: "title2",
    },
    {
        id: 1,
        year: 2000,
        title: "title4",
    },
];
const BlogsPage = () => {
    return (
        <div className='container mx-auto'>
            {blogs.map(({ id, title, year }) => (
                <Link
                    className='block border border-blue-500 p-2 my-2'
                    href={`/blogs/${year}/${id}`}
                    key={id}>
                    {title}
                </Link>
            ))}
        </div>
    );
};

export default BlogsPage;
