import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillCompass } from 'react-icons/ai'
import { BsFillBackspaceReverseFill } from 'react-icons/bs'
import logo from "/src/assets/images/logo.jpg"

export default function Nav()
{
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
        <div className="flex justify-between items-center bg-slate-400 h-20 border-b-2 border-dashed border-black">
            <a href=""><img className=" w-40 pl-5 " src={logo} alt="business logo" /></a>
            <button className=' pr-5 cursor-pointer' onClick={() => setMenuOpen((prev) => !prev)}><AiFillCompass size='50' /></button>
        </div>
        {menuOpen && (
        <div className=" flex-col w-full h-screen bg-slate-400 fixed z-10 top-0 ">
            <button className='mb-56 pl-3 pt-2' onClick={() => setMenuOpen(false)}>
                < BsFillBackspaceReverseFill size= '50' cursor='pointer' />
            </button>
            <ul className=' text-3xl text-center justify-center'>
                <li className=' mb-5 cursor-pointer' onClick={() => setMenuOpen(false)}>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li className=' mb-5 cursor-pointer' onClick={() => setMenuOpen(false)}>
                    <NavLink to="/about">ABOUT US</NavLink>
                </li>
                <li className=' mb-5 cursor-pointer' onClick={() => setMenuOpen(false)}>
                    <NavLink to="/products">PRODUCTS</NavLink>
                </li>
                <li className=' mb-5 cursor-pointer' onClick={() => setMenuOpen(false)}>
                    <NavLink to="/services">SERVICES</NavLink>
                </li>
                <li className=' mb-5 cursor-pointer' onClick={() => setMenuOpen(false)}>
                    <NavLink to="/contact">CONTACT</NavLink>
                </li>
            </ul>
        </div>
        )}
        </>
    )
}