import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios';
import { AuthContext } from '../../Contexts/AuthContext';

export default function Login() {



  localStorage.setItem('userToken', "");
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUserToken } = useContext(AuthContext);

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").email('Enter a valid email'),
    password: Yup.string().required("Password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password must have minimum eight characters, at least one letter, one number and one special character"),
  })

  const initialValues = {
    'email': "",
    'password': "",
  }

  let { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })


  const navigate = useNavigate();


  async function onSubmit() {
    setIsLoading(true)
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values).then(({ data }) => {
      setSuccessMsg(data.message);
      setErrorMsg(false);
      setIsLoading(false);
      localStorage.setItem('userToken', data.token);
      setUserToken(localStorage.getItem('userToken'));
      console.log(data.token);
      if (location.pathname == '/login') {
        navigate('/home');
      }else{
        navigate(location.pathname);
      }
    }).catch((err) => {
      setIsLoading(false)
      setErrorMsg(err.response.data.message)
      setSuccessMsg(false);
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
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@gmail.com" required="" />
              {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              {touched.password && errors.password && <p className='text-red-500'>{errors.password}</p>}
            </div>
            {errorMsg && <p className='text-red-500 text-center'>Invalid email or password</p>}
            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-500" disabled={isLoading}>Log in {isLoading && <i className='fas fa-spinner fa-spin ms-2 text-lg'></i>}</button>
            <div className='w-full flex justify-center'>
            <Link to={'/SendCode'} className="text-sm text-center mx-auto font-normal text-red-700 hover:text-red-500 dark:text-gray-400">Forgot Password?
            </Link>
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">Don't have an account? <Link to="/"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin">Sign up here</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}
