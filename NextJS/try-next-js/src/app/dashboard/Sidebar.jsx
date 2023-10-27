/** @format */

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
                        <Link href={path}>{title}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
