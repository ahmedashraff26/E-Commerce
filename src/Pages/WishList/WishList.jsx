import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import WishListComponent from '../../components/WishListComponent/WishListComponent';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Contexts/AuthContext';
import IsLoading from '../IsLoading/IsLoading';
import EmptyWishList from '../../components/EmptyWishList/EmptyWishList';

export default function WishList() {
  const [wishListProducts, setWishListProducts] = useState([])
  const {userToken} = useContext(AuthContext);


  function getWishList() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
      headers:{
        token:userToken
      }
    });
  }

  let  data  = useQuery({
    queryKey:["wishlist"],
    queryFn: getWishList
    
  })
  console.log(data.data?.data.data);


  return (
    data.isLoading ? <IsLoading /> : data.data?.data.data.length ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 md:px-10 gap-5'>
    {data.data?.data.data.map((product, index) => (
                  <WishListComponent product={product} key={index} />
              ))}
  </div> : <EmptyWishList />
  )
}
