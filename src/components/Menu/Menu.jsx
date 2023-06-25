import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='w-full px-6 py-3 duration-300 transition-all ease-in-out flex justify-center top-0' onClick={() => setOpenMenu(!openMenu)}>
            <div className='flex lg:justify-center items-center w-full'>
                <ul className={`w-full text-white lg:text-gray-950 justify-center font-semibold flex flex-col absolute inset-x-0 inset-y-0 bg-indigo-600 bg-opacity-90 h-screen z-10 items-center transition-all ease-in-out duration-500 lg:bg-transparent lg:static lg:w-auto lg:h-auto lg:z-auto lg:flex-row ${openMenu ? 'top-0' : 'top-[-800px]'}`}>
                    <li className='opacity-100 transition duration-300 cursor-pointer mb-4 lg:mb-0 lg:mr-4' onClick={() => setOpenMenu(!openMenu)}>
                        <Link to='/'>Sign in</Link>
                    </li>
                    <li className='opacity-100 transition duration-300 cursor-pointer mb-4 lg:mb-0 lg:mr-4' onClick={() => setOpenMenu(!openMenu)}>
                        <Link to='/rename'>Rename User</Link>
                    </li>
                    <li className='opacity-100 transition duration-300 cursor-pointer mb-4 lg:mb-0 lg:mr-4' onClick={() => setOpenMenu(!openMenu)}>
                        <Link to='/delete'>Delete User</Link>
                    </li>
                    <li className='opacity-100 transition duration-300 cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
                        <Link to='/users'>Users List</Link>
                    </li>
                </ul>
                <div className='lg:hidden cursor-pointer z-10 text-3xl' onClick={() => setOpenMenu(!openMenu)}>
                    {
                        openMenu ? <MdClose className='text-white' /> : <FiMenu />
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;