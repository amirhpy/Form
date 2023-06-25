import React from 'react';
import { useFormik } from 'formik'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Yup Validate
import { deleteSchema } from '../../validation/validation'
import axios from 'axios';

const DeleteForm = () => {
    const deleteForms = useFormik({
        initialValues: {
            id: ''
        },

        onSubmit: async (values, { setSubmitting, resetForm }) => {
            console.log("Form Inputs Data =>", values);

            await axios.delete(`https://form-server.iran.liara.run/users/${values.id}`)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            setTimeout(() => {
                setSubmitting(false);
            }, 5000);

            resetForm()
            notify()
        },

        validationSchema: deleteSchema
    })

    const notify = () => toast.success("Delete user successful", {
        position: "bottom-left"
    });

    return (
        <div>
            <ToastContainer />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Delete your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={deleteForms.handleSubmit} className="space-y-6" action="#" method="POST">
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Your ID
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={deleteForms.handleChange}
                                    onBlur={deleteForms.handleBlur}
                                    value={deleteForms.values.id}
                                    name="id"
                                    type="text"
                                    placeholder='User ID'
                                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <span className='text-err'>
                                    {deleteForms.errors.id && deleteForms.touched.id && deleteForms.errors.id}
                                </span>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${deleteForms.isSubmitting ? "bg-succ" : ""}`}
                                disabled={deleteForms.isSubmitting}
                            >
                                {deleteForms.isSubmitting ? "Loading ..." : "Sign in"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeleteForm;