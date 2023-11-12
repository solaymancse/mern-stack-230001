import React from 'react'
import { categoryData } from '../data'

export const Category = () => {
    return (
        <div className=' max-w-7xl mx-auto mt-[40px]'>
            <h1 className=' text-xl text-[#777] mb-2'> Categories</h1>

            <div className=' grid grid-cols-8'>
                {categoryData.map((item, index) => (
                    <div key={index} className='border border-t-0 border-r-0 cursor-pointer  bg-white flex flex-col justify-center items-center text-center'>
                        <img className='w-[80px] h-[80px]' src={item.img} alt="" />
                        <h1>{item.title}</h1>
                    </div>
                ))}
            </div>

        </div>
    )
}
