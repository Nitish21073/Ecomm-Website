import React from "react";
import { cart, shopsy } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
 
  const productData = useSelector((state)=>state.shopsy.productData);
  const userInfo = useSelector((state)=>state.shopsy.userInfo);
  console.log(userInfo)
  
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
       <Link to='/'>
       <div>
          <img className="w-28" src={shopsy} alt="logo" />
        </div>
       </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
           <Link to = '/'>
           <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
           </Link>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
         <Link to='/cart'>
         <div className="relative">
            <img className="w-6" src={cart} alt="cart" />
            <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">{productData.length}</span>
          </div>
         </Link>
          <Link to={'/login'}>
          <img className="w-8 h-8 rounded-full" src="https://cdn.pixabay.com/photo/2016/12/21/16/34/shopping-cart-1923313_960_720.png" alt="userlogo" />
          </Link>
          {
            userInfo && <p className="text-base font-semibold ">{userInfo.name}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
