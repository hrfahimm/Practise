/** @format */

import Link from "next/link";

/** @format */
const navlinks = [
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/about",
        title: "About",
    },
    {
        path: "/profild",
        title: "Profild",
    },
    {
        path: "/blogs",
        title: "Blogs",
    },
    {
        path: "/dashboard",
        title: "Dashboard",
    },
];

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between container mx-auto p-4 '>
            {" "}
            <h1 className='text-3xl font-semibold'>Next Js </h1>
            <ul className='flex items-center justify-center'>
                {navlinks.map(({ path, title }) => (
                    <li
                        key={path}
                        className='mx-2 text-xl'>
                        <Link href={path}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
