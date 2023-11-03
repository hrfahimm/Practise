/** @format */

"use client";

//import { useParams, useSearchParams } from "next/navigation";
//{ params, searchParams }
const SingleBlog = ({ params }) => {
    //const [year, id] = params.segments || [];
    // const params2 = useParams();
    // const searchParams2 = useSearchParams();

    //console.log(params2.segments, searchParams2.get("title"));
    return (
        <div className='text-center text-3xl p-10'>
            <h1>SingleBlog {params.id}</h1>
        </div>
    );
};

export default SingleBlog;
