import React, { useState } from "react";

const CartDetail = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div className="min-h-screen bg-white pt-20">
      <h1 className="mb-10 text-center text-4xl font-bold">Cart</h1>
      <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./static/images/women-cashmere-a4.jpg.webp"
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Nike Air Max 2019
                </h2>
                <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <button
                    onClick={handleDecrement}
                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>-</span>
                  </button>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    value={quantity}
                    min="1"
                  />
                  <button
                    onClick={handleIncrement}
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>+</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">259.000 ₭</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./static/images/women-cashmere-a4.jpg.webp"
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Nike Air Max 2019
                </h2>
                <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <button
                    onClick={handleDecrement}
                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>-</span>
                  </button>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    value={quantity}
                    min="1"
                  />
                  <button
                    onClick={handleIncrement}
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>+</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">259.000 ₭</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./static/images/women-cashmere-a4.jpg.webp"
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Nike Air Max 2019
                </h2>
                <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <button
                    onClick={handleDecrement}
                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>-</span>
                  </button>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    value={quantity}
                    min="1"
                  />
                  <button
                    onClick={handleIncrement}
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>+</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">259.000 ₭</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./static/images/women-cashmere-a4.jpg.webp"
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Nike Air Max 2019
                </h2>
                <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <button
                    onClick={handleDecrement}
                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>-</span>
                  </button>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    value={quantity}
                    min="1"
                  />
                  <button
                    onClick={handleIncrement}
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>+</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">259.000 ₭</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./static/images/women-cashmere-a4.jpg.webp"
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Nike Air Max 2019
                </h2>
                <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <button
                    onClick={handleDecrement}
                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>-</span>
                  </button>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    value={quantity}
                    min="1"
                  />
                  <button
                    onClick={handleIncrement}
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>+</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">259.000 ₭</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./static/images/women-cashmere-a4.jpg.webp"
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Nike Air Max 2019
                </h2>
                <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <button
                    onClick={handleDecrement}
                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>-</span>
                  </button>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    value={quantity}
                    min="1"
                  />
                  <button
                    onClick={handleIncrement}
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>+</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">259.000 ₭</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="./static/images/women-cashmere-a4.jpg.webp"
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Nike Air Max 2019
                </h2>
                <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <button
                    onClick={handleDecrement}
                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>-</span>
                  </button>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    value={quantity}
                    min="1"
                  />
                  <button
                    onClick={handleIncrement}
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    <span>+</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">259.000 ₭</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-10 mb-6 mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-full md:max-w-xs lg:max-w-md">
          <div className="mb-6 flex justify-center">
            <p className="text-2xl font-bold">Cart Totals</p>
          </div>
          <div className="mb-6 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="mb-6 flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-6" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-4 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full bg-slate-900 py-3 font-medium text-white hover:bg-gray-700">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
