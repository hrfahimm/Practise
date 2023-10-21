/** @format */
"use client";
const Template = ({ children }) => {
    console.log("from Template ");
    return (
        <div>
            <button>WOWWWWW</button> {children}
        </div>
    );
};

export default Template;
