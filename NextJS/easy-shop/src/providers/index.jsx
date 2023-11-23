/** @format */
"use client";

import React from "react";
import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";

const Provider = ({ children }) => {
    return (
        <ThemeProvider>
            <AuthProvider>{children}</AuthProvider>{" "}
        </ThemeProvider>
    );
};

export default Provider;
