/** @format */
//"use client";
//import { useRouter } from "next/navigation";
import Link from "next/link";
const blogs = [
    {
        id: 1,
        year: 2003,
        title: "title 1",
    },
    {
        id: 2,
        year: 2020,
        title: "title 2",
    },
    {
        id: 3,
        year: 2008,
        title: "title 3",
    },
];
const BlogsPage = () => {
    //const router = useRouter();
    return (
        <div className='container mx-auto p-2'>
            {blogs.map(({ id, title, year }) => (
                <Link
                    className='block border-2 rounded-lg border-red-500 text-center uppercase text-2xl p-2 my-2'
                    href={`/blogs/${year}/${id}?title=${title}`}
                    //onClick={() => router.replace(`/blogs/${year}/${id}?title=${title}`)}
                    //onClick={() => router.push(`/blogs/${year}/${id}?title=${title}`)}
                    //onClick={() => router.refresh(`/blogs/${year}/${id}?title=${title}`)}
                    //onClick={() => router.back()}
                    //onClick={() => router.back()}
                    key={id}>
                    {title}
                </Link>
            ))}
        </div>
    );
};

export default BlogsPage;
