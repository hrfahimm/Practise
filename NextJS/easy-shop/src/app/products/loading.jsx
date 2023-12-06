/** @format */

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
//import "react-loading-skeleton/dist/Skeleton.css";

const productsLoading = () => {
    return (
        <SkeletonTheme
            baseColor='#2a303c'
            highlightColor='#5c5c5c'>
            <div className='mt-10'>
                <div className='grid grid-col-3 gap-5 mb-5'>
                    {[...Array(3).keys()].map((it) => (
                        <div
                            className='card card-compact bg-base-100 shadow-2xl justify-between h-[255rem]'
                            key={it}>
                            <div className=''>
                                <Skeleton height={300} />
                            </div>
                            <div className='card-body flex-grow-0'>
                                <h2>
                                    <Skeleton
                                        width={300}
                                        height={25}
                                    />
                                </h2>
                                <h3>
                                    <Skeleton width={200} />
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SkeletonTheme>
    );
};

export default productsLoading;
