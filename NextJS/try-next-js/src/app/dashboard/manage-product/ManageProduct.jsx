/** @format */
"use client";
import { useRef, useState, useTransition } from "react";
import ManageSingleProduct from "./ManageSigleProduct";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";

const ManageProduct = ({ products }) => {
    const modalRef = useRef(null);
    const [updateData, setUpdateData] = useState(null);
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(false);

    const isLoading = isPending || loading;

    const router = useRouter();

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
            setLoading(true);
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
                setLoading(false);
                startTransition(() => {
                    router.refresh();
                });
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
    };
    // const handleAdd = async ({}) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const title = form.title.value;
    //     const price = form.price.value;
    //     const data = {
    //         title,
    //         price,
    //     };
    //     try {
    //         const res = await fetch(`http://localhost:5000/products`, {
    //             method: "POST",
    //         });
    //         const result = await res.json();
    //         console.log(result);
    //         form.reset();
    //         closeModal();
    //         startTransition(() => {
    //             router.refresh();
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE",
            });
            const result = await res.json();
            console.log(result);
            startTransition(() => {
                router.refresh();
            });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <div>
            <table
                className={`border-collapse w-fill ${
                    isLoading ? "opacity-50" : "opacity-100"
                }`}>
                <thead>
                    <tr>
                        <th className='border border-slate-400 p-4'>Title</th>
                        <th className='border border-slate-400 p-4'>Pricer</th>
                        <th className='border border-slate-400 p-4'>Update</th>
                        <th className='border border-slate-400 p-4'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ManageSingleProduct
                            handleSubmit={handleSubmit}
                            openModal={openModal}
                            closeModal={closeModal}
                            key={product.id}
                            product={product}
                            handleDelete={handleDelete}
                            // handleAdd={handleAdd}
                        />
                    ))}
                </tbody>
            </table>
            <Modal
                closeModal={closeModal}
                handleSubmit={handleSubmit}
                updateData={updateData}
                ref={modalRef}
            />
        </div>
    );
};

export default ManageProduct;
