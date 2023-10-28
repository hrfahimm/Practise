/** @format */

import Link from "next/link";
import NavLink from "./NavLink";

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
        path: "/profile",
        title: "Profile",
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
                        <NavLink
                            exact={path === "/"}
                            activeClassName='text-red-500 '
                            href={path}>
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
