import React, { useState } from 'react';
import { useFormik } from 'formik'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Yup Validate
import { registerSchema } from '../../validation/validation'

const Form = () => {
    const [showPassword, setShowPassword] = useState(false)

    const form = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },

        onSubmit: async (values, { setSubmitting, resetForm }) => {
            console.log("Form Inputs Data =>", values);
            await axios
                .post('https://form-server.iran.liara.run/users', values)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))

            setTimeout(() => {
                setSubmitting(false);
            }, 3000);

            resetForm()
            notify()
        },

        validationSchema: registerSchema
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
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={form.handleSubmit} className="space-y-6" action="#" method="POST">
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Your Name
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    value={form.values.username}
                                    name="username"
                                    type="text"
                                    placeholder='First and last name'
                                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <span className='text-err'>
                                    {form.errors.username && form.touched.username && form.errors.username}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    value={form.values.email}
                                    name="email"
                                    type="email"
                                    placeholder='Enter your email'
                                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <span className='text-err'>
                                    {form.errors.email && form.touched.email && form.errors.email}
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
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    value={form.values.password}
                                    id="password"
                                    name="password"
                                    placeholder='At least 8 characters'
                                    type={showPassword ? 'text' : 'password'}
                                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <span className='text-err'>
                                    {form.errors.password && form.touched.password && form.errors.password}
                                </span>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${form.isSubmitting ? "disabled:bg-succ" : ""}`}
                                disabled={form.isSubmitting}
                            >
                                {form.isSubmitting ? "Loading ..." : "Sign in"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;