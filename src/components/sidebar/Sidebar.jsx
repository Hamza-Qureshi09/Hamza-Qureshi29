import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonLinesFill, BsBagFill } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { IoIosContacts } from "react-icons/io";

const Sidebar = () => {
    return (
        <div className='bg-red-500 w-[300px]
         h-screen relative'>
            <div className="topPart h-32 bg-orange-200 flex flex-col justify-center items-center">
                <h1 className='font-Merriweather text-2xl font-bold p-6 bg-gray-300 relative italic'>
                    <div>
                        <div className='h-2 w-8 bg-rose-500 absolute top-0 right-0'></div>
                        <div className='h-8 w-2 bg-rose-500 absolute right-0 top-0'></div>
                    </div>
                    <span className='font-Tangerine text-5xl font-extrabold'>H</span>amza Q.
                    <div>
                        <div className='h-2 w-8 bg-rose-500 absolute bottom-0 left-0'></div>
                        <div className='h-8 w-2 bg-rose-500 absolute left-0 bottom-0'></div>
                    </div>
                </h1>
            </div>
            <div className="links ">
                <ul className="lists flex flex-col justify-center items-center font-Nunito space-y-6">
                    <li className='flex flex-row items-center  border-b border-gray-400 w-32 justify-start'><AiFillHome className='text-2xl' /> <span className='pl-4 text-xl font-semibold'>Home</span></li>
                    <li className='flex flex-row items-center  border-b border-gray-400 w-32 justify-start'><BsFillPersonLinesFill className='text-2xl' /> <span className='pl-4 text-xl font-semibold'>About</span></li>
                    <li className='flex flex-row items-center  border-b border-gray-400 w-32 justify-start'><GrServices className='text-2xl' /> <span className='pl-4 text-xl font-semibold'>Services</span></li>
                    <li className='flex flex-row items-center  border-b border-gray-400 w-32 justify-start'><BsBagFill className='text-2xl' /> <span className='pl-4 text-xl font-semibold'>Portfoio</span></li>
                    <li className='flex flex-row items-center  border-b border-gray-400 w-32 justify-start'><IoIosContacts className='text-2xl' /> <span className='pl-4 text-xl font-semibold'>Contact</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar