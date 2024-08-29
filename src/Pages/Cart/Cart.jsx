import React, { useContext, useEffect, useState } from 'react'
import CartComponent from '../../components/CartComponent/CartComponent'
import axios from 'axios';
import IsLoading from '../IsLoading/IsLoading';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { useQuery } from '@tanstack/react-query';

export default function Cart() {

  const [cartProducts, setCartProducts] = useState([])
  const [cartId, setCartId] = useState("");
  const [totalCartPrice, setTotalCartPrice] = useState(0)
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false)

  const { userToken } = useContext(AuthContext)

  function getCartProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
      headers: {
        token: userToken
      }
    })
  }

  let  data  = useQuery({
    queryKey:["cartProducts"],
    queryFn:getCartProducts,
  })

  console.log(data.isLoading);
  console.log(data.data?.data.data);
  console.log(data.data?.data.data.products);
  
  
  


  async function clearCart() {
    const data = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart', {
      headers: {
        token: userToken
      }
    })
    console.log(data);

  }








  return (
    <section className="bg-gradient-to-r from-slate-500 to-slate-800 py-8 antialiased dark:bg-gray-900 md:py-16 min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl text-center font-semibold text-gray-900 dark:text-white sm:text-4xl">Shopping Cart</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          {data.isLoading ? <IsLoading /> : <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {data.data?.data.data.products.length ? data.data?.data.data.products.map((product, index) => {
                return (
                  <CartComponent cartProduct={product} key={index} />
                )

              }) : <EmptyCart />}
            </div>
          </div>}

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">${data.data?.data.data.totalCartPrice}</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">$799</dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">${data.data?.data.data.totalCartPrice}</dd>
                </dl>
              </div>
              {data.data?.data.data.products.length ? <div className='flex w-full justify-center'>
                <Link to={`/shippingaddress/${cartId}`} type="button" class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-24 py-2.5 rounded-md text-white font-bold">
                  Checkout
                </Link>
              </div> : ""}
            </div>
            {data.data?.data.data.products.length ? <button onClick={clearCart} className='bg-white align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 border-2 hover:bg-red-600 hover:text-white'>
              Clear Cart
            </button> : ""}
          </div>
        </div>
      </div>
    </section>
  )
}
