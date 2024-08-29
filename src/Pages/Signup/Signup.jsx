import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios';
import IsLoading from '../IsLoading/IsLoading';

export default function Signup() {



  localStorage.setItem('userToken', "");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)

  let { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
    initialValues: {
      'name': "",
      'email': "",
      'password': "",
      'rePassword': "",
      'phone': "",
    },
    onSubmit,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters").max(20, "Name must be less than 20 characters"),
      email: Yup.string().required("Email is required").email('Enter a valid email'),
      password: Yup.string().required("Password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password must have minimum eight characters, at least one letter, one number and one special character"),
      rePassword: Yup.string().required("Password confirmation is required").oneOf([Yup.ref("password")], "Passwords do NOT match"),
      phone: Yup.string().required("Phone is required").matches(/^(\01|01|00201)[0-2,5]{1}[0-9]{8}/, "Please enter valid phone number")
    })
  })
  
  function onSubmit() {
    setIsLoading(true)
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values).then(({ data }) => {
      navigate('/login');
      setIsLoading(false)
      console.log(data);
    }).catch(() => {
      setIsLoading(false);
    })
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
      <section className="flex flex-col items-center pt-6 min-h-screen justify-center">
      <div
        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an
            account
          </h1>
          <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input onBlur={handleBlur} onChange={handleChange} value={values.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="emelia_erickson24" required="" />
              {touched.name && errors.name && <p className='text-red-500'>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@gmail.com" required="" />
              {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              {touched.password && errors.password && <p className='text-red-500'>{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input onBlur={handleBlur} onChange={handleChange} value={values.rePassword} type="password" name="rePassword" id="rePassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              {touched.rePassword && errors.rePassword && <p className='text-red-500'>{errors.rePassword}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
              <input onBlur={handleBlur} onChange={handleChange} value={values.phone} type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0123456789" required="" />
              {touched.phone && errors.phone && <p className='text-red-500'>{errors.phone}</p>}
            </div>
            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-500" disabled={isLoading}>Create an account {isLoading && <i className='fas fa-spinner fa-spin ms-2 text-lg'></i>}</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <Link to="/login"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin">Sign in here</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}
