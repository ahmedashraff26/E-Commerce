
import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { Link, Navigate, NavLink, useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios';
import { AuthContext } from '../../Contexts/AuthContext';

export default function ShippingAddress() {

    const [isLoading, setIsLoading] = useState(false)
    const { userToken } = useContext(AuthContext);
    const CartId = useParams();
    console.log(CartId.id);

    const validationSchema = Yup.object({
        details: Yup.string().required("details is required"),
        phone: Yup.string().required("phone is required").matches(/^(\01|01|00201)[0-2,5]{1}[0-9]{8}/, "Please enter valid phone number"),
        city: Yup.string().required("city is required"),
    })

    const initialValues = {
        'details': "",
        'phone': "",
        'city': "",
    }

    let { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    async function onSubmit() {
        setIsLoading(true)
        console.log(values);

        const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CartId.id}`, {shippingAddress:values}, {
            headers:{
                token:userToken,
            },
            params:{
                url:"http://localhost:5173",
            }
        })

        console.log(data.session.url);
        location.href = data.session.url;
    }


    return (
        <div>
            {/* <!--Start Background Animation Body--> */}
            <div class="area">
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            {/* <!--End Background Animation Body--> */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen dark:bg-gray-900 pt-16">
                <div className="w-full max-w-3xl mx-auto p-8">
                    <div className="bg-slate-200 dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>

                        {/* <!-- Shipping Address --> */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Address</h2>

                                <div className="mt-4">
                                    <label htmlFor="city" className="block text-gray-700 dark:text-white mb-1">City:</label>
                                    <input onBlur={handleBlur} onChange={handleChange} value={values.city} type="text" name='city' id="city" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>

                                <div className="mt-4">
                                    <label htmlFor="phone" className="block text-gray-700 dark:text-white mb-1">Phone</label>
                                    <input onBlur={handleBlur} onChange={handleChange} value={values.phone} name='phone' type="text" id="phone" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>

                                <div className="grid mt-4">
                                    <div>
                                        <label htmlFor="details" className="block text-gray-700 dark:text-white mb-1">Details</label>
                                        <input onBlur={handleBlur} onChange={handleChange} value={values.details} type="text" name='details' id="details" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-center">
                                <button type='submit' className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 text-white px-8 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

