/** @format */

import Navbar from "@/components/Navbar";

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}

            <h1 className='m-auto text-center  text-5xl uppercase text-lime-600  font-bold'>
                footer
            </h1>
        </div>
    );
};

export default WithLayout;
