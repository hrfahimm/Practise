/** @format */

import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex container mx-auto'>
            <Sidebar />
            {children}
        </div>
    );
};

export default DashboardLayout;
