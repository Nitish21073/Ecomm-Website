import React from 'react'
import { payment, shopsy } from '../assets'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome

} from 'react-icons/fa'
import {BsGithub,BsPaypal,BsPersonFill} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
        <div className='flex flex-col gap-7'>
          <img className='w-32' src={shopsy} alt="" />
          <p className='text-white text-sm tracking-wide'>Shopsy.com</p>
          <img className='w-40' src={payment} alt="" />
          <div className='flex gap-5 text-lg text-gray-500'>
            <BsGithub className='hover:text-white duration-300 cursor-pointer'/>
            <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
            <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
            <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
            <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
          </div>
        </div>
        {/* locate us starts here  */}
       <div>
       <h2 className='text-2xl font-semibold text-white mb-4'>
          Locate Us
        </h2>
        <div className='text-base flex flex-col gap-2'>
          <p>Bhori,Tekari,Gaya</p>
          <p>Mobile: 8597160665</p>
          <p>Phone: 0632 445654</p>
          <p>Email:shopsy@gmail.com</p>
        </div>
       </div>
       {/* profile starts here */}
       <div>
       <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
        <div className='flex flex-col gap-2 text-base'>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        
        <span><BsPersonFill/></span>
        My Account</p>
       <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        
        <span><BsPaypal/></span>
        Checkout</p>
       <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        
        <span><FaHome/></span>
        Order Tracking</p>
       <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        
        <span><MdLocationOn/></span>
        Help and Support</p>
        </div>
       </div>
       {/* subscribe starts here */}

       <div className='flex flex-col justify-center'>
        <input className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail' type="text" />
        <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
       </div>
      </div>
    </div>
  )
}

export default Footer
