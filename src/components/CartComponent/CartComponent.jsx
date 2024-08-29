import axios from 'axios';
import React, { useState } from 'react'
import { Bounce, toast } from 'react-toastify';

export default function CartComponent(cartProduct) {
  const userToken = localStorage.getItem('userToken');
  const [productCount, setProductCount] = useState(cartProduct.cartProduct.count)
  const [countIsLoading, setCountIsLoading] = useState(false)

  async function updateProductCount(productID, count) {
    setCountIsLoading(true)
    if (count >= 1) {
      const { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productID}`, {
        count: count,
      }, {
        headers: {
          token: localStorage.getItem('userToken')
        }
      })
      console.log(data);
      setProductCount(count);
    }else{
      setProductCount(1);
    }
    setCountIsLoading(false);
  }


  async function removeCartItem() {
    const data = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${cartProduct.cartProduct.product.id}`, {
      headers: {
        token: userToken
      }
    })

    //  setProductCount(cartProduct.cartProduct.count)
    toast.success('Product removed succesfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }


  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <a href="#" className="shrink-0 md:order-1">
          <img className="h-20 w-20 dark:hidden object-cover" src={cartProduct.cartProduct.product.imageCover} alt="imac image" />
        </a>

        <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button disabled={countIsLoading} onClick={() => updateProductCount(cartProduct.cartProduct.product.id, Number(productCount) - 1)} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              {countIsLoading ? <i className='fas fa-spinner fa-spin'></i> : <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
              </svg>}
            </button>
            {/* <div className='px-3'>{productCount}</div> */}
            {/* <input onBlur={() => {updateProductCount(cartProduct.cartProduct.product.id, productCount)}} onChange={(e) => {setProductCount(e.target.value)}} type="number" className='w-6 h-6 rounded-md outline-none border bg-white text-center flex justify-center text-xs' value={productCount} min="1" /> */}
            <input
              className="p-0 w-7 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
              type="number"
              onBlur={() => { updateProductCount(cartProduct.cartProduct.product.id, productCount) }}
              value={productCount}
              onChange={(e) => { setProductCount(e.target.value) }}
            />
            <button disabled={countIsLoading} onClick={() => updateProductCount(cartProduct.cartProduct.product.id, Number(productCount) + 1)} type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              {countIsLoading ? <i className='fas fa-spinner fa-spin'></i> : <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
              </svg>}
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 dark:text-white">${cartProduct.cartProduct.price}</p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{cartProduct.cartProduct.product.title}</a>

          <div className="flex items-center gap-4">
            <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
              <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
              </svg>
              Add to Favorites
            </button>

            <button onClick={removeCartItem} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
              <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
