/** @format */

"use client";

import { useParams, useSearchParams } from "next/navigation";

const SingleBlog = ({ params, searchParams }) => {
    const [year, id] = params.segments || [];
    const params2 = useParams();
    const searchParams2 = useSearchParams();

    console.log(params2.segments, searchParams2.get("title"));
    return (
        <div className='text-center text-3xl p-10'>
            <h1>
                SingleBlog {year || new Date().getFullYear()} for -- {id}
            </h1>
            <br />
            <h2>{searchParams.title}</h2>
        </div>
    );
};

export default SingleBlog;
