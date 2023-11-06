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
        <main className='flex flex-col items-center justify-between p-24'>
            <h1 className='text-3xl text-red-600 p-2'>next js Home</h1>
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
                        <h1 className='text-center text-3xl font-bold p-10'>
                            Loading.........
                        </h1>
                    }>
                    <PropulerProducts />
                </Suspense>
            </div>
        </main>
    );
};
export default HomePage;
