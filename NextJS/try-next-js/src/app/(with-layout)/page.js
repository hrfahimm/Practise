/** @format */

import Categories from "@/components/HomePage/Categories";
import img1 from "../../assets/images/img1.jpg";

import Image from "next/image";
import PropulerProducts from "@/components/HomePage/PropulerProducts";
import { Suspense } from "react";
export const revalidate = 5;

export const metadata = {
    title: "Next || RootLayout",
    description: "Hello Next.js",
};
const HomePage = () => {
    return (
        <main className='container flex flex-col items-center justify-between p-24'>
            <h1 className='text-3xl text-blue-600 p-8 font-extrabold '>
                {" "}
                Home
            </h1>
            <Image
                width={600}
                height={380}
                alt='logo'
                src={img1}
                placeholder='blur'
            />
            <div>
                <Categories />
                <Suspense
                    fallback={
                        <h1 className='text-center font-semibold text-2xl'>
                            propuler products Loading...
                        </h1>
                    }>
                    <PropulerProducts />
                </Suspense>
            </div>
        </main>
    );
};
export default HomePage;
