/** @format */

"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
