/** @format */

import img1 from "../../assets/images/img1.jpg";

import Image from "next/image";

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
                placeholder='red'
            />
        </main>
    );
};
export default HomePage;
