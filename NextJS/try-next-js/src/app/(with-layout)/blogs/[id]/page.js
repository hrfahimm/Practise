/** @format */

import loadBlogsData from "@/utils/loadBlogsData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlogData(params.id);
    return {
        title: title,
    };
};

export const generateStaticParams = async ({ params }) => {
    const blogs = await loadBlogsData();

    return blogs.map(({ id }) => ({ id: id.toString() }));
};

const SingleBlog = async ({ params }) => {
    const { id, title, body } = await loadSingleBlogData(params.id);
    return (
        <div className=' border-2 rounded-lg border-green-500 uppercase text-xl p-2 mx-2 my-2'>
            <h2 className='trxt-xl font-bold'>
                {id}-{title}
            </h2>
            <p className='text-sm'> {body}</p>
        </div>
    );
};

export default SingleBlog;
//
//
//
//
//import { useParams, useSearchParams } from "next/navigation";
//{ params, searchParams }
//
//const [year, id] = params.segments || [];
// const params2 = useParams();
// const searchParams2 = useSearchParams();

//console.log(params2.segments, searchParams2.get("title"));
