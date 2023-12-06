/** @format */

import Spinner from "@/components/Spinner";
import React from "react";

const Loading = () => {
    return (
        <div className='flex items-center justify-center min-h-[calc(100vh-400px)]'>
            <Spinner />
        </div>
    );
};

export default Loading;
