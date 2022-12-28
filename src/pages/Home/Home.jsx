import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
    return (
        <div className='mainWrapper flex flex-row justify-start'>
            {/* this is side bar */}
            <Sidebar />
            {/* this is main page */}
            <div className='main bg-green-400  h-screen flex flex-row justify-center items-center flex-wrap lmd:h-screen overflow-scroll overflow-x-hidden'>
                <div className="left w-1/2 flex flex-col justify-start items-start p-4 min-w-[300px]">
                    <h1 className='pb-4 text-3xl font-bold font-Montserrat'>Hello, my name is <span className='font-Kaushan text-rose-500 font-normal text-3xl'>Hamza Qureshi</span></h1>
                    <h2 className='font-Kaushan font-normal text-3xl'>
                        I'm a <span className='text-rose-500'>Web Developer</span>
                    </h2>
                    <p className='mb-16 mt-4 font-Nunito maintext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facilis placeat voluptas, assumenda suscipit neque, esse soluta, qui reprehenderit rem adipisci voluptate autem corrupti quo sapiente numquam accusamus cumque recusandae?</p>
                    <button class="bg-rose-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full font-Nunito">
                        More About me
                    </button>
                </div>
                <div className="right relative h-[500px] w-1/2">
                    <div className=' absolute right-[10%] top-1 '>
                        <div className='h-3 w-16 bg-rose-500 absolute top-0 right-0'></div>
                        <div className='h-16 w-3 bg-rose-500 absolute right-0 top-0'></div>
                    </div>
                    {/* your image here */}
                    <div className='h-full flex justify-center items-center py-8 px-8 '>
                        <img src="/images/main.jpg" alt="not found" className='object-cover h-[400px] w-[300px] ' />
                    </div>
                    <div className=' absolute left-[10%] bottom-1'>
                        <div className='h-3 w-16 bg-rose-500 absolute bottom-0 left-0'></div>
                        <div className='h-16 w-3 bg-rose-500 absolute left-0 bottom-0'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home