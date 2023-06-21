import React, { useState } from 'react';

import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='w-full px-6 py-3 duration-300 transition-all ease-in-out flex justify-center top-0'>
            <div className='text-white-0 flex justify-between items-center w-full'>
                <ul className={`w-full justify-center flex flex-col absolute inset-x-0 inset-y-0 bg-darkorange-0 bg-opacity-95 h-screen font-Vazir-bold z-10 items-center transition-all ease-in-out duration-500 lg:static lg:bg-transparent-0 lg:w-auto lg:h-auto lg:z-auto lg:flex-row ${openMenu ? 'top-0' : 'top-[-800px]'}`}>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer mb-[15px] lg:mb-0'>
                        خانه
                    </li>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer mb-[15px] lg:mb-0 lg:mr-[30px]'>
                        فهرست
                    </li>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer mb-[15px] lg:mb-0 lg:mr-[30px]'>
                        منو
                    </li>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer mb-[15px] lg:mb-0 lg:mr-[30px]'>
                        رزرو
                    </li>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer mb-[15px] lg:mb-0 lg:mr-[30px]'>
                        وبلاگ
                    </li>
                    <li className='lg:hover:text-orange-0 opacity-100 transition duration-300 cursor-pointer lg:mr-[30px]'>
                        ارتباط با ما
                    </li>
                </ul>

                <div className='rounded-[10px] text-[25px] hidden border-2 border-white-0 py-[10px] px-[20px] font-Vazir-medium lg:flex items-center'>
                    amir
                </div>

                <div className='lg:hidden cursor-pointer z-10 text-[30px]' onClick={() => setOpenMenu(!openMenu)}>
                    {
                        openMenu ? <MdClose /> : <FiMenu />
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;