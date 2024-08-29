import React from 'react'
import IsLoading from '../IsLoading/IsLoading'
import Product from '../../components/Product/Product'
import Products from '../../components/Products/Products'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function BrandProductsPage() {
    const id = useParams();
    console.log(id.id);
    

    function getBrandProducts() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`, {
            params: {
              brand: id.id,
            },
          });
    }

    let data = useQuery({
        queryKey: ["brandProducts"],
        queryFn: getBrandProducts
    })

    console.log(data.data?.data.data);
    

    return (
        data.isLoading ? <IsLoading /> : data.data?.data.data.length ? <div className='bg-slate-200'>
        <div className=' bg-slate-200 gap-5'>
            {/* {data.data?.data.data.map((product, index) => {
                return (<Products product={product} key={index} />)
            })} */}
            <Products allProducts={data.data?.data.data}/>
        </div>
    </div> : <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v7.5m0 0V12a4 4 0 1 0 0-8 4 4 0 0 0 0 8v.5m0 0V20"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-700">No Products Available</h2>
        <p className="mt-2 text-gray-500">It looks like there are no products available for this brand at the moment.</p>
      </div>
    </div>
    )
}
