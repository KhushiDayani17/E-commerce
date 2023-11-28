import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/selectors/productSelector";
import { productAction } from "../../redux/features/productSlice";

const CartDetail = () => {
  const dispatch = useDispatch();
  const cartDetails = useSelector(selectCart);

  const [itemQuantities, setItemQuantities] = useState(
    cartDetails.items.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const handleIncrement = (itemId:any) => {
    setItemQuantities((prevQuantities:any) => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] + 1,
    }));
  };

  const handleDecrement = (itemId:any) => {
    if (itemQuantities[itemId] > 0) {
      setItemQuantities((prevQuantities:any) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  const total = cartDetails.items.reduce(
    (acc: any, item: any) => acc + item.price * item.quantity,
    0
  );

  const shippingCharge = 4.99;
  const subtotal = total + shippingCharge;
  return (
    <div className="min-h-screen bg-white pt-20">
      <h1 className="mb-10 text-center text-4xl font-bold">Cart</h1>
      <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartDetails && cartDetails.items.length > 0 ? (
            <div>
              {cartDetails.items.map((item) => (
                <div
                  key={item.id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={item?.image || ""}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-20 sm:h-20"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h2>
                      {/* <p className="mt-1 text-xs text-gray-700">
                        {item.description}
                      </p> */}
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <button
                          onClick={() => handleDecrement(item.id)}
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          <span>-</span>
                        </button>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          value={itemQuantities[item.id]}
                          min="1"
                        />
                        <button
                          onClick={() => handleIncrement(item.id)}
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          <span>+</span>
                        </button>
                      </div>
                      <div className="flex items-center border-gray-100">
                        {/* Your quantity buttons and input */}
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{item.price}₭</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 cursor-pointer"
                          onClick={() =>
                            dispatch(productAction.removeItemFromCart(item.id))
                          }
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
              ))}
            </div>
          ) : (
            <p className="text-center text-lg font-semibold mt-8">
              Your cart is empty.
            </p>
          )}
        </div>
        <div className="sticky top-10 mb-6 mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-full md:max-w-xs lg:max-w-md">
          <div className="mb-6 flex justify-center">
            <p className="text-2xl font-bold">Cart Totals</p>
          </div>
          <div className="mb-6 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${total}</p>
          </div>
          <div className="mb-6 flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-6" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-4 text-lg font-bold">${subtotal} USD</p>
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
