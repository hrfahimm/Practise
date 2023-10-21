/** @format */

"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
    console.log("from ");
    return (
        <html lang='en'>
            <body className={inter.className}>
                <nav>
                    <Link
                        href='./'
                        className='p-4 font-extrabold text-xl '>
                        Home
                    </Link>
                    <Link
                        href='./about'
                        className='p-4 font-extrabold text-xl '>
                        About
                    </Link>
                    <Link
                        href='./dashboard'
                        className='p-4 font-extrabold text-xl '>
                        Dasgboard
                    </Link>
                </nav>

                {children}

                <h1>footer</h1>
            </body>
        </html>
    );
};

export default RootLayout;
