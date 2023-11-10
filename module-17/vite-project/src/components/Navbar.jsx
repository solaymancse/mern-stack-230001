import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineGlobal } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav class="bg-[#F85606] ">
            <div className='mx-auto max-w-7xl'>
                <div className='justify-between hidden lg:flex '>
                    <div className='flex  justify-between gap-4 text-white'>
                        <Link>Become a Seller</Link>
                        <Link>Daraz Donates</Link>
                        <Link>Help & Support</Link>
                    </div>
                    <div className=' bg-[#AD3C04] text-white pb-2 px-2 rounded-b-lg'>
                        <button>Save More on App</button>
                    </div>
                </div>
                <div class="mx-auto max-w-7xl ">
                    <div class="relative flex h-20 items-center justify-between">

                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class=" flex-shrink-0 items-center hidden lg:flex">
                                <h1 className=' text-white font-bold text-2xl'>   DARAZ</h1>
                            </div>
                            <div className='w-11/12 items-center pl-6 pr-2 ml-6 h-[40px] flex justify-between bg-white lg:rounded-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#777" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                <input type="text" placeholder='Search in Daraz' className='  w-10/12 h-full lg:rounded-xl outline-none' />

                                <div className=' hidden bg-[#FFE1D2] w-[60px] h-[30px] rounded-md lg:flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F85606" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>

                            </div>

                        </div>
                        <div class="hidden lg:flex absolute inset-y-0 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <div className='flex items-center gap-4 hover:bg-[#AD3C04]  cursor-pointer'>
                                <FaUserAlt color='#fff' />
                                <h1 className='text-white font-bold'>Login</h1>
                            </div>
                            <div className='pl-6 flex items-center gap-4'>

                                <h1 className='text-white font-bold'>Signup</h1>
                            </div>
                            <div class="relative ml-3 flex gap-2 items-center text-white font-bold">
                                <AiOutlineGlobal size={24} />
                                <span>EN</span>
                            </div>
                            <div className='pl-6 flex items-center font-bold'>
                                <FiShoppingCart color='white' size={30} />
                            </div>



                        </div>
                    </div>
                </div>

                {/* 
                <div class="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2">

                        <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                    </div>
                </div> */}
            </div>

        </nav>

    )
}
