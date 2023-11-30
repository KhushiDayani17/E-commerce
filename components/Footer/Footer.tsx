import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left border-y-2">
        <div className="mx-12 py-12 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Company
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  About Us
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Contact
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Store Locations
                </a>
              </p>
              <p>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Careers
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Help
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Order Tracking
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  FAQ's
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Terms & Conditions
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Store
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Women
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Men
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Speakers
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                Follow Us
              </h6>
              <p className="mb-4">And get Free Shipping on all your orders!</p>
              <div className="flex items-center space-x-1">
                <a
                  href="#"
                  data-tooltip-target="tooltip-facebook"
                  className="inline-flex justify-center p-2 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor bg-slate-900"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <div
                  id="tooltip-facebook"
                  role="tooltip"
                  className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                >
                  Like us on Facebook
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <a
                  href="#"
                  data-tooltip-target="tooltip-twitter"
                  className="inline-flex justify-center p-2 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor bg-slate-900"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <div
                  id="tooltip-twitter"
                  role="tooltip"
                  className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                >
                  Follow us on Twitter
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <a
                  href="#"
                  data-tooltip-target="tooltip-github"
                  className="inline-flex justify-center p-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor bg-slate-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="sr-only">Instragram</span>
                </a>
                <div
                  id="tooltip-github"
                  role="tooltip"
                  className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                >
                  Star us on GitHub
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <a
                  href="#"
                  data-tooltip-target="tooltip-dribbble"
                  className="inline-flex justify-center p-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor bg-slate-900"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">pinterest</span>
                </a>
                <div
                  id="tooltip-dribbble"
                  role="tooltip"
                  className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                >
                  Follow us on Dribbble
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-7 flex justify-between dark:bg-neutral-700 border-y-2 text-black">
          <div>
            <span className="mr-3"><a href="">Privacy Policy</a></span>
            <span><a href="">Terms & Conditions</a></span>
          </div>
          <div>
            <a
              className="font-semibold text-neutral-600 dark:text-neutral-400"
              href="https://tw-elements.com/"
            >
              © 2023 Copyright:TW elements
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
