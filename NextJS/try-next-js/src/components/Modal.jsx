/** @format */

import React, { forwardRef, useRef } from "react";

const Modal = ({ closeModal, updateData, handleSubmit }, ref) => {
    const formRef = useRef(null);

    return (
        <div>
            <dialog
                ref={ref}
                className='w-[98%] max-w-[500px] rounded-3xl border border-gray-400'>
                <div className='text-right mb-2 p-4'>
                    <button
                        className='text-white px-2 py-1 bg-red-500  rounded-lg '
                        onClick={() => {
                            closeModal();
                            formRef.current.reset();
                        }}>
                        Close
                    </button>
                </div>
                <form
                    onSubmit={handleSubmit}
                    ref={formRef}>
                    <input
                        className='w-full mb-2 p-2 focus:outline-none border border-gray-400 rounded-md'
                        type='text'
                        placeholder='title'
                        name='title'
                        defaultValue={updateData?.title}
                    />
                    <input
                        className='w-full mb-2 p-2 focus:outline-none border  border-gray-400 rounded-md'
                        type='number'
                        placeholder='Price'
                        name='price'
                        defaultValue={updateData?.price}
                    />
                    <button className='text-white px-4 py-2 bg-green-500  rounded-lg   focus:outline-none'>
                        Submit
                    </button>
                </form>
            </dialog>
        </div>
    );
};

export default forwardRef(Modal);
