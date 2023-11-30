import React, { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import {
  IProductDetailPayload,
  IProductPayload,
} from "../../@types/apis/IProduct";
import AuthApiServices from "../../helpers/apis/authProductApiServices";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../redux/features/productSlice";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] =
    useState<IProductDetailPayload | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productIdFromUrl = router.query.id;
        if (!productIdFromUrl) {
          return;
        }
        const productId = parseInt(productIdFromUrl as string, 10);
        const response = await AuthApiServices.productDetail(productId);
        setProductDetails(response.data as any);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [router.query.id]);

  const handleAddToCart = (product: IProductPayload) => {
    dispatch(productAction.addToCart({ product, quantity }));
  };

  return (
    <div>
      <section className="pt-10 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 overflow-hidden">
                <div className="relative mb-6 lg:mb-10">
                  <img
                    className="object-contain w-full lg:h-full"
                    src={productDetails?.image || ""}
                    alt={productDetails?.title || ""}
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6">
                  <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    {productDetails?.title}
                  </h2>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    {productDetails?.description}
                  </p>
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                    <span>{`Rs.${productDetails?.price}`}</span>
                  </p>
                </div>
                <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                  <span className="text-base text-gray-600 dark:text-gray-400">
                    In Stock
                  </span>
                  <p className="mt-2 text-sm text-blue-500 dark:text-blue-200">
                    <span className="text-gray-600 dark:text-gray-400">
                      Most customers receive within 3-31 days.
                    </span>
                  </p>
                </div>
                <div className="mb-6"></div>
                <div className="flex gap-4 mb-6">
                  <a
                    onClick={() => handleAddToCart(productDetails as any)}
                    className="flex items-center justify-center w-full px-4 py-3 text-center text-gray-100 bg-slate-900 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-white hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
