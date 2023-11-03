/** @format */
//"use client";
//import { useRouter } from "next/navigation";
import Link from "next/link";
const BlogsPage = async () => {
    //const router = useRouter();
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "force-cache",
    });
    const blogs = await res.json();
    return (
        <div className='container mx-auto p-2'>
            {blogs.map(({ id, title, body }) => (
                <div
                    className=' border-2 rounded-lg border-green-500  uppercase text-xl p-2 my-2'
                    key={id}>
                    <h2 className='trxt-xl font-bold'>
                        {id}-{title}
                    </h2>
                    <p className='text-sm'> {body}</p>
                    <Link
                        href={`/blogs/${id}`}
                        className='inline-block mt-5'>
                        <button className='text-white px-2 py-1 bg-blue-500 rounded'>
                            Details
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BlogsPage;
//32
//href={`/blogs/${year}/${id}?title=${title}`}
//onClick={() => router.replace(`/blogs/${year}/${id}?title=${title}`)}
//onClick={() => router.push(`/blogs/${year}/${id}?title=${title}`)}
//onClick={() => router.refresh(`/blogs/${year}/${id}?title=${title}`)}
//onClick={() => router.back()}
//onClick={() => router.back()}
//
// const blogs = [
//     {
//         id: 1,
//         year: 2003,
//         title: "title 1",
//     },
//     {
//         id: 2,
//         year: 2020,
//         title: "title 2",
//     },
//     {
//         id: 3,
//         year: 2008,
//         title: "title 3",
//     },
// ];
