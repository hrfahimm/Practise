/** @format */

import React from "react";

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div>Sidebar</div>

            {children}
        </div>
    );
};

export default DashboardLayout;
