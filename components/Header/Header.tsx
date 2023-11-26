import React, { useState } from "react";

const MenCategories = [
  {
    title: "T-Shirts",
    items: [
      "T-Shirts",
      "Casual Shirts",
      "Formal Shirts",
      "Sweatshirts",
      "Sweaters",
      "Jackets",
      "Blazers & Coats",
      "Sweaters",
    ],
  },
  {
    title: "Bottomwear",
    items: [
      "Jeans",
      "Casual Trousers",
      "Formal Trousers",
      "Shorts",
      "Track pants & Joggers",
    ],
  },
  {
    title: "Footwear",
    items: [
      "Casual Shoes",
      "Sports Shoes",
      "Formal Shoes",
      "Sneakers",
      "Sandals & Floaters",
      "Flip Flops",
      "Socks",
    ],
  },
  {
    title: "Fashion Accessories",
    items: [
      "Wallets",
      "Bets",
      "Perfumes & Body Mists",
      "Trimmers",
      "Deodorants",
      "Ties, Cufflinks & Pockets Squares",
      "Accessory Gift Sets",
      "Caps & Hats",
      "Mufflers, Scarves & Gloves",
      "Phone Cases",
      "Rings & Wristwear",
      "Helmets",
    ],
  },
];

const WomenCategories = [
  {
    title: "Indian & Fusion Wear",
    items: [
      "Kurtas & Suits",
      "Kurties, Tunics & Tops",
      "Sarees",
      "Ethnic Wear",
      "Leggings, Salwars & Churidars",
      "Skirts & Palazzos",
      "Dress Materials",
      "Lehenga Cholis",
      "Dupattas & Shawls",
      "Jackets",
    ],
  },
  {
    title: "Western Wear",
    items: [
      "Dresses",
      "Tops",
      "Tshirts",
      "Jeans",
      "Trousers & Capris",
      "Shorts & Skirts",
      "Co-ords",
      "Playsuits",
      "Jumpsuits",
      "Shrugs",
      "Sweaters & Sweatshirts",
      "Jackets & Coats",
      "Blazers & Waitstcoats",
    ],
  },
  {
    title: "Footwear",
    items: [
      "Flats",
      "Casual Shoes",
      "Heels",
      "Boots",
      "Sports Shoes & Floaters",
    ],
  },
  {
    title: "Jewellery",
    items: ["Makeup", "Skincare", "Premium Beauty", "Lipsticks", "Fragrances"],
  },
];

const KidsCategories = [
  {
    title: "Boys Clothing",
    items: [
      "T-Shirts",
      "Shirts",
      "Shorts",
      "Jeans",
      "Trousers",
      "Clothing Sets",
      "Ethnic Wear",
      "Track Pants & Pyjamas",
      "Jacket, Sweater & Sweatshirts",
      "Party Wear",
      "InnerWear & Thermals",
      "Nightwear & Loungewear",
      "Value Packs",
    ],
  },
  {
    title: "Girls Clothing",
    items: [
      "Dresses",
      "Tops",
      "Tshirts",
      "Jeans",
      "Clothing Sets",
      "Lehenga choli",
      "Kurta Sets",
      "Party wear",
      "Dungarees & Jumpsuits",
      "Skirts & shorts",
      "Tights & Leggings",
      "Jeans, Trousers & Capris",
      "jacket, Sweater & Sweatshirts",
      "Innerwear & Thermals",
      "Nightwear & Loungewear",
      "Value Packs",
    ],
  },
  {
    title: "Footwear",
    items: [
      "Casual Shoes",
      "Flipflops",
      "Sports Shoes",
      "Flats",
      "Sandals",
      "Heels",
      "School Shoes",
      "Socks",
    ],
  },
  {
    title: "Kids Accessories",
    items: [
      "Bags & Backpacks",
      "Watches",
      "Jewellery & Hair accessory",
      "Sunglasses",
      "Masks & Protective Gears",
      "Caps & Hats",
    ],
  },
];

const furnitureCategories = [
  {
    title: "Living Room Furniture",
    items: [
      "Sofa Beds",
      "Sofa Sets",
      "L-Shaped Sofas",
      "Recliners",
      "Tv & Entertainment Units",
      "Center Tables",
      "Nested Tables",
      "Chairs",
      "Shoe Racks",
      "Bean Bags",
      "Wall Shelves",
      "Magazine Racks",
    ],
  },
  {
    title: "Bedroom Furniture",
    items: [
      "Beds",
      "Mattresses",
      "Wardrobes",
      "Bedside Tables",
      "Dressing Tables",
      "Chest Of Drawers",
    ],
  },
  {
    title: "Kitchen & Dining",
    items: [
      "Dining Table Sets",
      "Dining Tables",
      "Dining Chairs",
      "Dining Bench",
      "Kitchen Cabinets",
    ],
  },
  {
    title: "Study Room Furniture",
    items: ["Desks", "Office Chairs", "Bookcases"],
  },
];

const beautyCategories = [
  {
    title: "Makeup",
    items: [
      "Lipstick",
      "Lip Gloss",
      "Lip Liner",
      "Mascara",
      "Eyeliner",
      "Kajal",
      "Eyeshadow",
      "Foundation",
      "Primer",
      "Concealer",
      "Compact",
      "Nail Polish",
    ],
  },
  {
    title: "Skincare, Bath & Body",
    items: [
      "Face Moisturiser",
      "Cleanser",
      "Masks & Peel",
      "Sunscreen",
      "Serum",
      "Face Wash",
      "Eye Cream",
      "Lip Balm",
      "Body Lotion",
      "Body Wash",
      "Body Scrub",
      "Hand Cream",
    ],
  },
  {
    title: "Haircare",
    items: [
      "Shampoo",
      "Conditioner",
      "Hair Cream",
      "Hair Oil",
      "Hair gel",
      "Hair Color",
      "Hair Serum",
      "Hair Accessory",
    ],
  },
  {
    title: "Fragrances",
    items: ["Perfume", "Deodorant", "Body Mist"],
  },
];
const Header = () => {
  return (
    <>
      <nav className="flex relative bg-white border-b-2 border-gray-300 text-gray-900 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className="relative block p-4 lg:p-6 text-xl text-teal-600 font-bold">
            <a href="#" className="text-teal-900">
              Shopsurf
            </a>
          </div>
          <ul className="flex">
            <li className="hoverable">
              <a
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
              >
                Men
              </a>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white">
                <div className="grid grid-cols-4 gap-4">
                  {MenCategories.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">
                        {category.title}
                      </h3>
                      <ul>
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="hover:text-black hover:font-semibold cursor-pointer mb-2"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            <li className="hoverable">
              <a
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
              >
                Women
              </a>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white">
                <div className="grid grid-cols-4 gap-4">
                  {WomenCategories.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">
                        {category.title}
                      </h3>
                      <ul>
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="hover:text-black hover:font-semibold cursor-pointer mb-2"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            <li className="hoverable">
              <a
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
              >
                Kids
              </a>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white">
                <div className="grid grid-cols-4 gap-4">
                  {KidsCategories.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">
                        {category.title}
                      </h3>
                      <ul>
                        {category.items.map((item, i) => (
                          <li
                            key={i}
                            className="hover:text-black hover:font-semibold cursor-pointer mb-2"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            <li className="hoverable">
              <a
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
              >
                Furniture
              </a>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white">
                <div className="grid grid-cols-4 gap-4">
                  {furnitureCategories.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">
                        {category.title}
                      </h3>
                      <ul>
                        {category.items.map((item, i) => (
                          <li
                            key={i}
                            className="hover:text-black hover:font-semibold cursor-pointer mb-2"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            <li className="hoverable">
              <a
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
              >
                Beauty
              </a>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white">
                <div className="grid grid-cols-4 gap-4">
                  {beautyCategories.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">
                        {category.title}
                      </h3>
                      <ul>
                        {category.items.map((item, i) => (
                          <li
                            key={i}
                            className="hover:text-black hover:font-semibold cursor-pointer mb-2"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <div className="flex gap-6 relative block p-4 lg:p-6 text-xl font-bold">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
