/** @format */

import Navbar from "@/components/Navbar";

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}

            <h1 className='m-auto text-center p-8 text-2xl font-bold'>
                footer
            </h1>
        </div>
    );
};

export default WithLayout;
