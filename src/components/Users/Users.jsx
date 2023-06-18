import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Users = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = () => {
        axios.get('https://form-server.iran.liara.run/users')
            .then(response => response.data)
            .then(data => setUser(data))
    }

    return (
        <div className='w-full bg-schwarz h-screen p-10 text-white'>
            <div className='pl-3'>
                <h3>Users</h3>
                <p className='text-grau mt-1'>A list of all the users in your account including their name, email.</p>
            </div>
            <div className='overflow-x-auto w-full lg:w-1/2 mt-5'>
                <table className='w-full table-fixed'>
                    <thead>
                        <tr className='border-b border-white text-left'>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map(user => (
                            <tr key={user.id} className='border-b border-white'>
                                <td className='p-3'>{user.username}</td>
                                <td className='p-3 text-grau'>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;