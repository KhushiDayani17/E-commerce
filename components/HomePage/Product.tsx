import React, { useState, useEffect } from "react";
import AuthApiServices from "../../helpers/apis/authProductApiServices";
import { IProductPayload } from "../../@types/apis/IProduct";
import Link from "next/link";

const Product = () => {
  const [products, setProducts] = useState<IProductPayload[]>([]);
  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AuthApiServices.getproduct();
        setProducts(res?.data as any);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3 className="flex justify-center text-3xl p-6 font-semibold uppercase">
        Product
      </h3>

      <div className="flex justify-center flex-wrap gap-12">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              <Link
                href="/product_detail"
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl flex justify-center"
              >
                <img src={product.image} />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                  {/* {product.discountPercent}% OFF */}
                </span>
              </Link>
              <div className="mt-4 px-5 pb-5">
                <Link href="/product_detail">
                  <h5 className="text-xl tracking-tight text-slate-900">
                    {product.title}
                  </h5>
                </Link>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ${product.price}
                    </span>
                  </p>
                  <div className="flex items-center">
                    {/* Your rating stars and average rating logic here */}
                    {/* For simplicity, I'll add a static 5.0 rating */}
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      {product.rating.rate}
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Product;
