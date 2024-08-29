import React, { useEffect, useState } from 'react'
import Products from '../../components/Products/Products'
import axios from 'axios';
import IsLoading from '../IsLoading/IsLoading';
import { useQuery } from '@tanstack/react-query';

export default function Home() {

  function getAllProducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  let  data  = useQuery({
    queryKey:["products"],
    queryFn: getAllProducts
  })
  console.log(data.isLoading);
  
  console.log(data.data?.data.data);
  

  return (
    <div className=' bg-gradient-to-r from-slate-900 to-slate-700'>
      {!data.isLoading ? <div className={data.isLoading ? 'flex justify-center items-center h-screen' : ''}>
        <Products allProducts={data.data?.data.data} />
      </div> : <IsLoading />}
    </div>
  )
}
