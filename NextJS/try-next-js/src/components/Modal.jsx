/** @format */

import React from "react";

const Modal = () => {
    return (
        <div>
            <dialog className='w-[98%] max-w-[500px] rounded-md'>
                <div className='text-right mb-4'>
                    <button>Close</button>
                </div>
                <form>
                    <input
                        className='w-full mb-2 p-2 focus:outline-none border-gray-500 rounded-md'
                        type='text'
                        placeholder='title'
                        name='title'
                    />
                    <input
                        className='w-full mb-2 p-2 focus:outline-none border-gray-500 rounded-md'
                        type='number'
                        placeholder='Price'
                        name='price'
                    />
                    <button className='text-white px-2 py-1 bg-blue-500 focus:outline-none'>
                        Submit
                    </button>
                </form>
            </dialog>
        </div>
    );
};

export default Modal;
