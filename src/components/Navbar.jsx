import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
const Navbar = () => {
    const [visible, setvisible] = useState(false)
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <img src={assets.logo} alt='logo' className='' />
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1'>
                    <p>HOME </p>
                    <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                </NavLink>
                <NavLink to="/collection" className='flex flex-col items-center gap-1'>
                    <p>COLLECTION </p>
                    <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                </NavLink>
                <NavLink to="/about" className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                </NavLink>
                <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                </NavLink>

            </ul>
            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} className='w-5 cursor-pointer ' alt='search icon' />
                <div className='group relative'>
                    <img className='w-5' src={assets.profile_icon} />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className=' flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-400'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>

                        </div>
                    </div>
                </div>
                <Link to="/cart" className="relative" >
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt='' />
                    <p className='absolute right-[-5px ] leading-4 bottom-[-5px ] text-center  bg-black  text-white'></p>
                </Link>
                <img onClick={() => setvisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' />
            </div>
            {/* sidebar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setvisible(false)} className='flex cursor-pointer items-center gap-4 p-3'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to={'/'}>HOME</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to={'/collection'}>COLLECTION</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to={'/about'}>ABOUT</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to={'/contact'}>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar