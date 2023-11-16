/** @format */

import NavLink from "@/components/NavLink";
import Link from "next/link";

const navlinks = [
    {
        path: "/dashboard",
        title: "Dashboard",
    },
    {
        path: "/dashboard/add-product",
        title: "Add Products",
    },
    {
        path: "/dashboard/manage-product",
        title: "Manage Products",
    },
    {
        path: "/dashboard/allproducts",
        title: "All products",
    },
    ,
    {
        path: "/",
        title: "Home",
    },
];

const Sidebar = () => {
    return (
        <aside className='mr-10'>
            <h1 className='text-3xl font-semibold'>Dashboard</h1>
            <ul>
                {navlinks.map(({ path, title }) => (
                    <li
                        className='my-2'
                        key={path}>
                        <NavLink
                            exact
                            activeClassName='text-blue-500 '
                            href={path}>
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
