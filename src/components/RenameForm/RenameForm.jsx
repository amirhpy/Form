import React, { useState } from 'react';
import { useFormik } from 'formik'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Yup Validate
import { renameSchema } from '../../validation/validation'

const RenameForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const renameForms = useFormik({
        initialValues: {
            id: '',
            username: '',
            email: '',
            password: ''
        },

        onSubmit: async (values, { setSubmitting, resetForm }) => {
            console.log("Form Inputs Data =>", values);

            const res = await fetch('https://form-server.iran.liara.run/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            console.log(res)
            if (res.status === 500) {
                notify()
            }

            setTimeout(() => {
                setSubmitting(false);
            }, 3000);

            resetForm()
        },

        validationSchema: renameSchema
    })

    const notify = () => toast.success("Sign in successful", {
        position: "bottom-left"
    });

    return (
        <div>
            <ToastContainer />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Rename your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={renameForms.handleSubmit} className="space-y-6" action="#" method="POST">
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Your ID
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={renameForms.handleChange}
                                    onBlur={renameForms.handleBlur}
                                    value={renameForms.values.id}
                                    name="id"
                                    type="text"
                                    placeholder='First and last name'
                                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <span className='text-err'>
                                    {renameForms.errors.id && renameForms.touched.id && renameForms.errors.id}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Your Name
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={renameForms.handleChange}
                                    onBlur={renameForms.handleBlur}
                                    value={renameForms.values.username}
                                    name="username"
                                    type="text"
                                    placeholder='First and last name'
                                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <span className='text-err'>
                                    {renameForms.errors.username && renameForms.touched.username && renameForms.errors.username}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={renameForms.handleChange}
                                    onBlur={renameForms.handleBlur}
                                    value={renameForms.values.email}
                                    name="email"
                                    type="email"
                                    placeholder='Enter your email'
                                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <span className='text-err'>
                                    {renameForms.errors.email && renameForms.touched.email && renameForms.errors.email}
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <p onClick={() => setShowPassword(!showPassword)} className="font-semibold cursor-pointer text-indigo-600 hover:text-indigo-500">
                                        {showPassword ? 'Hide' : 'Show'}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={renameForms.handleChange}
                                    onBlur={renameForms.handleBlur}
                                    value={renameForms.values.password}
                                    id="password"
                                    name="password"
                                    placeholder='At least 8 characters'
                                    type={showPassword ? 'text' : 'password'}
                                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <span className='text-err'>
                                    {renameForms.errors.password && renameForms.touched.password && renameForms.errors.password}
                                </span>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${renameForms.isSubmitting ? "bg-succ" : ""}`}
                                disabled={renameForms.isSubmitting}
                            >
                                {renameForms.isSubmitting ? "Loading ..." : "Sign in"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RenameForm;