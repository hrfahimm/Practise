/** @format */

import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "500", "700"],
    variable: "--font-roboto",
});

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body className={`${roboto.className} font-roboto`}>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
