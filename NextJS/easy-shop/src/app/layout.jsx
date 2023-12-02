/** @format */

import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Provider from "@/providers";
import Toster from "@/components/Toster";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata = {
    title: "EASY SHOP",
    description: " Easy Shop Is an E-commerc Web App ",
};

const RootLayout = ({ children }) => {
    return (
        <html
            lang='en'
            data-theme='dark'
            className='transition-all'>
            <body className='container mx-auto px-2 font-roboto'>
                <Provider>
                    <div className='flex min-h-screen flex-col justify-between'>
                        <div className=''>
                            <Navbar />
                            <main className='mt-5'>{children}</main>
                        </div>
                        <Footer />
                    </div>
                </Provider>
                <Toster></Toster>
            </body>
        </html>
    );
};

export default RootLayout;
