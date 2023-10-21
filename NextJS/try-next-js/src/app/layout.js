/** @format */
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: 'Next Js "1',
    description: "Hellow Next Js",
};
const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <h1>nav</h1>

                {children}

                <h1>footer</h1>
            </body>
        </html>
    );
};

export default RootLayout;
