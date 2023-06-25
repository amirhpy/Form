import React, { useEffect, useState } from 'react';
import axios from 'axios'

import gif from '../../assets/gif/gif.gif'

const Users = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = () => {
        axios.get('https://form-server.iran.liara.run/users/')
            .then(res => res.data)
            .then(data => setUser(data))
    }

    return (
        <div className='w-full p-10'>
            <div>
                <h3 className='text-2xl'>Users</h3>
                <p className='mt-1'>A list of all the users in your account including their name, email.</p>
            </div>
            <div className="container mx-auto mt-6">
                <div className="overflow-x-auto">
                    <table className="w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b text-left">ID</th>
                                <th className="py-2 px-4 border-b text-left">Name</th>
                                <th className="py-2 px-4 border-b text-left">Email</th>
                                <th className="py-2 px-4 border-b text-left">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user) => (
                                <tr key={user.id}>
                                    <td className="py-2 px-4 border-b">{user.id}</td>
                                    <td className="py-2 px-4 border-b">{user.username}</td>
                                    <td className="py-2 px-4 border-b">{user.email}</td>
                                    <td className="py-2 px-4 border-b">{user.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;