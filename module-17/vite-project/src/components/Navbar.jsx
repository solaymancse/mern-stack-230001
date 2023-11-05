import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineGlobal } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav class="bg-[#F85606] ">
            <div className='mx-auto max-w-7xl'>
            <div className='flex  justify-between '>
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
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>

                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <h1 className=' text-white font-bold text-2xl'>   DARAZ</h1>
                        </div>
                        <div className='w-11/12 items-center pl-6 pr-2 ml-6 h-[40px] flex justify-between bg-white rounded-xl'>
                            <input type="text" placeholder='Search products' className='  w-10/12 h-full rounded-xl outline-none' />
                            <div className=' bg-[#FFE1D2] w-[60px] h-[30px] rounded-md flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F85606" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>

                        </div>

                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        
                        <div className='flex items-center gap-4 hover:bg-[#AD3C04]  cursor-pointer'>
                            <FaUserAlt color='#fff' />
                            <h1 className='text-white font-bold'>Login</h1>
                        </div>
                        <div className='pl-6 flex items-center gap-4'>

                            <h1 className='text-white font-bold'>Signup</h1>
                        </div>
                        <div class="relative ml-3 flex gap-2 items-center text-white font-bold">
                            <AiOutlineGlobal size={24}/>
                            <span>EN</span>
                        </div>
                        <div className='pl-6 flex items-center font-bold'>
                            <FiShoppingCart color='white'  size={30}/>
                        </div>


                       
                    </div>
                </div>
            </div>


            <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2">

                    <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                </div>
            </div>
            </div>
           
        </nav>

    )
}
