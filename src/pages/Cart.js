import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const productData = useSelector((state)=>state.shopsy.productData);
  const [totalAmt,setTotalAmt] = useState("");
  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price+=item.price*10*item.quantity;
      return price;
    })
    setTotalAmt(price.toFixed(2))
  },[productData])
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/268415/pexels-photo-268415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="CartImage"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem/>
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              SubTotal <span className="font-bold text-lg">₹{totalAmt}</span>
            </p>
          </div>
          <p className="font-semibold flex justify-between mt-6 ">
            Total <span className="text-xl font-bold">₹{totalAmt}</span>
          </p>
          <button className="bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
