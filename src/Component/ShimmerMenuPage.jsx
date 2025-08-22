import { CircleChevronRight, CircleChevronLeft } from 'lucide-react';
import { IoIosSearch } from 'react-icons/io';

const ShimmerMenuPage = () => {
    return (
        <>
            <div className='mt-5'>
            <div className="w-10/12 mx-auto max-w-[800px]">
                <div className="h-[75px] w-[250px] mx-5 my-8">
                    <div className='bg-gray-200 w-full py-8 animate-pulse'></div>
                </div>
                <div className="p-5 border border-t-0 rounded-[36px] bg-[linear-gradient(rgb(255,255,255)_-6.71%,rgb(235,235,242)_56.19%,rgb(223,223,231)_106.56%)]">
                    <div className="p-5 border rounded-3xl bg-white">
                        <div className="flex items-center lg:mx-4">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                aria-hidden="true"
                            >
                                <circle
                                    cx="10"
                                    cy="10"
                                    r="9"
                                    fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                                ></circle>
                                <path
                                    d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                                    fill="white"
                                ></path>
                                <defs>
                                    <linearGradient
                                        id="StoreRating20_svg__paint0_linear_32982_71567"
                                        x1="10"
                                        y1="1"
                                        x2="10"
                                        y2="19"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#21973B"></stop>
                                        <stop offset="1" stopColor="#128540"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="flex ml-2 font-semibold gap-2">
                                <div className="h-5 w-8 bg-gray-200 animate-pulse"></div>
                                <div className="h-5 w-20 bg-gray-200 animate-pulse"></div>
                                <span className="text-gray-200">•</span>
                                <div className="h-5 w-28 bg-gray-200 animate-pulse"></div>
                            </div>
                        </div>
                        <div className="flex h-4 w-28 bg-gray-200 animate-pulse mt-2 lg:mx-4"></div>
                        <div className="flex items-center lg:mx-5 py-1">
                            <div className="flex flex-col items-center">
                                <div className="w-[7px] h-[7px] bg-[#c4c4c4] rounded-full"></div>
                                <div className="w-[1px] h-[23px] bg-[#c4c4c4]"></div>
                                <div className="w-[7px] h-[7px] bg-[#c4c4c4] rounded-full"></div>
                            </div>
                            <div className="flex flex-col w-full ml-[12px] justify-content-center">
                                <div className="flex mb-[2px] pb-[3px]">
                                    <span className="font-semibold">Outlet: </span>
                                    <div className="bg-gray-200 h-5 w-16 ml-3 mt-1 text-center"></div>
                                </div>
                                <div className="h-4 mt-1 w-16 bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-bold flex justify-between lg:justify-between text-xl px-5 lg:mx-5 mt-10 mb-5">
                    <p>Deals for you</p>
                    <div className="flex lg:mx-14 gap-5">
                        <button className="bg-gray-200 rounded-full p-1">
                            <svg width="25" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34 20H10m0 0l9-9m-9 9l9 9" stroke="#222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button className="bg-gray-200 rounded-full p-1">
                            <svg width="25" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 20h24m0 0l-9-9m9 9l-9 9" stroke="#222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="m-auto overflow-x-auto custom-scrollbar scroll-smooth pb-5">
                    <div className="flex flex-row gap-4 h-16 mx-5">
                        {new Array(2).fill(0).map((card, index) => (
                            <div
                                key={index}
                                className="lg:flex gap-4 w-[300px] border p-3 rounded-[20px]"
                            >
                                <div>
                                    <div className="w-10 h-10 bg-gray-200 animate-pulse" />
                                </div>
                                <div>
                                    <div className="w-52 h-3 bg-gray-200 animate-pulse"></div>
                                    <div className="w-52 mt-3 h-3 bg-gray-200 animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex gap-1 items-center justify-center py-3">
                    <svg
                        width="30"
                        viewBox="0 0 131 97"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 44C20 44 28 42 40 35C52 28 60 24 70 24C83 24 94 32 94 48C94 64 83 72 70 72C58 72 52 64 52 56C52 48 58 44 64 44"
                            stroke="#44474F"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M94 44H122"
                            stroke="#44474F"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="font-bold text-xs tracking-[0.4rem] ml-2 text-gray-600">
                        MENU
                    </span>
                    <svg
                        width="30"
                        viewBox="0 0 131 97"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M120 44C111 44 103 42 91 35C79 28 71 24 61 24C48 24 37 32 37 48C37 64 48 72 61 72C73 72 79 64 79 56C79 48 73 44 67 44"
                            stroke="#44474F"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M37 44H9"
                            stroke="#44474F"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="relative flex justify-center my-3">
                    <input
                        type="text"
                        disabled
                        className="bg-gray-100 w-full h-11 px-4 rounded-xl"
                        placeholder="Search for dishes"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl">
                        <IoIosSearch className="text-gray-600" />
                    </button>
                </div>
                <div className="bg-gray-200 mt-8 mb-4 w-44 h-7 animate-pulse"></div>

                {new Array(5).fill(0).map((card, index) => (
                    <div key={index}>
                        <div className="flex border-t justify-between border-b py-6">
                            <div className="w-9/12">
                                <div className="h-5 bg-gray-200 animate-pulse w-10"></div>
                                <div className="flex gap-1">
                                    ₹
                                    <div className="h-5 bg-gray-200 animate-pulse mt-1 w-16"></div>
                                </div>
                                <div className="flex items-center mt-2 gap-1">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        fillcolor="#116649"
                                    >
                                        <rect width="14" height="14" fill="white"></rect>
                                        <path
                                            d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                                            fill="#116649"
                                        ></path>
                                    </svg>
                                    <div className="bg-gray-200 animate-pulse h-5 w-16"></div>
                                </div>
                                <div className="bg-gray-200 animate-pulse mt-3 w-11/12 h-4 mx-2"></div>
                                <div className="bg-gray-200 animate-pulse mt-3 w-11/12 h-4 mx-2"></div>
                            </div>
                            <div>
                                <div className="rounded-2xl bg-gray-200 animate-pulse w-36 h-36 object-cover"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
};

export default ShimmerMenuPage;