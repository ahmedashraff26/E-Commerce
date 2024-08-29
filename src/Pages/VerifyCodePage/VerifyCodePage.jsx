import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios';
import { AuthContext } from '../../Contexts/AuthContext';

export default function VerifyCodePage() {

    const navigate = useNavigate();
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { setUserToken } = useContext(AuthContext);

    const validationSchema = Yup.object({
        resetCode: Yup.string().required("resetCode is required"),
    })

    const initialValues = {
        'resetCode': "",
    }

    let { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    async function onSubmit() {
        setIsLoading(true)
        axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", values).then(({ data }) => {
            setSuccessMsg(data.message);
            setErrorMsg(false);
            setIsLoading(false);
            console.log(data);
            navigate('/updatePassword')
        }).catch((err) => {
            setIsLoading(false)
            setErrorMsg(err.response.data.message)
            setSuccessMsg(false);
        })

    }


    return (
        <div>
            {/* <!--Start Background Animation Body--> */}
            <div className="area">
                <ul className="circles">
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
            <section className="flex flex-col items-center pt-6 min-h-screen justify-center">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Verification Code
                        </h1>
                        <p className="text-gray-600 text-center">
                            Please enter the verification code sent to your email address.
                        </p>
                        <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="resetCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verification Code</label>
                                <input onBlur={handleBlur} onChange={handleChange} value={values.resetCode} type="text" name="resetCode" id="resetCode" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                {touched.resetCode && errors.resetCode && <p className='text-red-500'>{errors.resetCode}</p>}
                            </div>
                            {errorMsg && <p className='text-red-500 text-center'>Reset code is invalid, Please try again!</p>}
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-500" disabled={isLoading}>Verify {isLoading && <i className='fas fa-spinner fa-spin ms-2 text-lg'></i>}</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
