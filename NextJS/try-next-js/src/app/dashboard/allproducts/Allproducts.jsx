/** @format */

"use client";

import Modal from "@/components/Modal";
import db from "@/db.json";
import { useRef, useState } from "react";
import ManageSingleProduct from "../manage-product/ManageSigleProduct";

const AllProducts = () => {
    const products = db.products;
    const isLoading = false;
    const modalRef = useRef(null);
    const [updateData, setUpdateData] = useState(null);

    const openModal = (product) => {
        setUpdateData(product);
        modalRef.current.showModal();
    };

    const closeModal = () => {
        setUpdateData(null);
        modalRef.current.close();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const data = {
            title,
            price,
        };

        if (title && price) {
            try {
                const res = await fetch(
                    `http://localhost:5000/products/${updateData?.id}`,
                    {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(data),
                    }
                );
                const result = await res.json();
                console.log(result);

                form.reset();
                closeModal();
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE",
            });
            const result = await res.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <table
                className={`border-collapse w-full ${
                    isLoading ? "opacity-50" : "opacity-100"
                }`}>
                <thead>
                    <tr>
                        <th className='border border-slate-400'>Title</th>
                        <th className='border border-slate-400'>Price</th>
                        <th className='border border-slate-400'>Update</th>
                        <th className='border border-slate-400'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ManageSingleProduct
                            openModal={openModal}
                            key={product.id}
                            product={product}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>

            <Modal
                closeModal={closeModal}
                updateData={updateData}
                ref={modalRef}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default AllProducts;
