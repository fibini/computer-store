import { AiFillCompass } from 'react-icons/ai'
import { BsFillBackspaceReverseFill } from 'react-icons/bs'
import logo from "/src/assets/images/logo.jpg"

export default function Nav()
{
    return(
        <>
        <div className="flex justify-between items-center bg-slate-500">
            <a href=""><img className=" w-64" src={logo} alt="business logo" /></a>
            <div className=' pr-3'><AiFillCompass size='50' /></div>
        </div>
        <div className=" flex-col w-full h-screen bg-slate-500 fixed z-10 top-0 hidden">
            <div className=' flex justify-end mb-56'>< BsFillBackspaceReverseFill size= '50' cursor='pointer' /></div>
                <ul className=' text-3xl text-center justify-center'>
                    <li className=' mb-5 cursor-pointer'>HOME</li>
                    <li className=' mb-5 cursor-pointer'>ABOUT US</li>
                    <li className=' mb-5 cursor-pointer'>PRODUCTS</li>
                    <li className=' mb-5 cursor-pointer'>SERVICES</li>
                    <li className=' mb-5 cursor-pointer'>CONTACT</li>
                </ul>
        </div>
        </>
    )
}