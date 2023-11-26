import React, { useState } from "react";

const Header = () => {
  return (
    <>
      <nav className="flex relative bg-white border-b-2 border-gray-300 text-gray-900">
        <div className="container mx-auto flex justify-between">
          <div className="relative block p-4 lg:p-6 text-xl text-teal-600 font-bold">
            <a href="#" className="hover:text-teal-900">
              Logo
            </a>
          </div>
        </div>
        <ul className="flex">
          <li className="hoverable">
            <a
              href="#"
              className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
            >
              Men
            </a>
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gray-100">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">T-Shirts</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      T-Shirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Casual Shirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Formal Shirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sweatshirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sweaters
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jackets
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Blazers & Coats
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sweaters
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bottomwear</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jeans
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Casual Trousers
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Formal Trousers
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Shorts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Track pants & Joggers
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Footwear</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Casual Shoes
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sports Shoes
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Formal Shoes
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sneakers
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sandals & Floaters
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Flip Flops
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Socks
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Fashion Accessories
                  </h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Wallets
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Bets
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Perfumes & Body Mists
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Trimmers
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Deodorants
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Ties, Cufflinks & Pockets Squares
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Accessory Gift Sets
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Caps & Hats
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Mufflers, Scarves & Gloves
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Phone Cases
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Rings & Wristwear
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Helmets
                    </li>
                  </ul>
                </div>
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
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gray-100">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Indian & Fusion Wear
                  </h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Kurtas & Suits
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Kurties, Tunics & Tops
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sarees
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Ethnic Wear
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Leggings, Salwars & Churidars
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Skirts & Palazzos
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Dress Materials
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Lehenga Cholis
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Dupattas & Shawls
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jackets
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Western Wear</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Dresses
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Tops
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Tshirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jeans
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Trousers & Capris
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Shorts & Skirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Co-ords
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Playsuits
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jumpsuits
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Shrugs
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sweaters & Sweatshirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jackets & Coats
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Blazers & Waitstcoats
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Footwear</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Flats
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Casual Shoes
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Heels
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Boots
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sports Shoes & Floaters
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Jewellery</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Makeup
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Skincare
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Premium Beauty
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Lipsticks
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Fragrances
                    </li>
                  </ul>
                </div>
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
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gray-100">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Boys Clothing</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      T-Shirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Shirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Shorts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jeans
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Trousers
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Clothing Sets
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Ethnic Wear
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Track Pants & Pyjamas
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jacket, Sweater & Sweatshirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Party Wear
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      InnerWear & Thermals
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Nightwear & Loungewear
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Value Packs
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Girls Clothing</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Dresses
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Tops
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Tshirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jeans
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Clothing Sets
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Lehenga choli
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Kurta Sets
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Party wear
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Dungarees & Jumpsuits
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Skirts & shorts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Tights & Leggings
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jeans, Trousers & Capris
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      jacket, Sweater & Sweatshirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Innerwear & Thermals
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Nightwear & Loungewear
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Value Packs
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Footwear</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Casual Shoes
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Flipflops
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sports Shoes
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Flats
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sandals
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Heels
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      School Shoes
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Socks
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Kids Accessories
                  </h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Bags & Backpacks
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Watches
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jewellery & Hair accessory
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sunglasses
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Masks & Protective Gears
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Caps & Hats
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="hoverable">
            <a
              href="#"
              className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
            >
              Fashion
            </a>
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-teal-700">
              {/* Mega Menu Content */}
            </div>
          </li>
          <li className="hoverable">
            <a
              href="#"
              className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
            >
              Beauty
            </a>
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gray-100">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Makeup</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Lipstick
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Lip Gloss
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Lip Liner
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Mascara
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Eyeliner
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Kajal
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Eyeshadow
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Foundation
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Primer
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Concealer
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Compact
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Nail Polish
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Skincare, Bath & Body
                  </h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Face Moisturiser
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Cleanser
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Tshirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jeans
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Trousers & Capris
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Shorts & Skirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Co-ords
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Playsuits
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jumpsuits
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Shrugs
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sweaters & Sweatshirts
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Jackets & Coats
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Blazers & Waitstcoats
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Footwear</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Flats
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Casual Shoes
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Heels
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Boots
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Sports Shoes & Floaters
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Jewellery</h3>
                  <ul>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Makeup
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Skincare
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Premium Beauty
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Lipsticks
                    </li>
                    <li className="hover:text-black hover:font-semibold cursor-pointer">
                      Fragrances
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
