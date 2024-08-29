import React, { useEffect, useState } from 'react'
import Category from '../../components/Categories/Category';
import axios from 'axios';
import IsLoading from '../IsLoading/IsLoading';
import { useQuery } from '@tanstack/react-query';

export default function Categories() {

    function getAllCategories() {
            return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    }

    let  data  = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories
    })


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (data.isLoading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <IsLoading />
            </div>
        )
    } else {
        return (
            <div>
                <div className='grid grid-cols-4 bg-slate-300'>
                    {data.data?.data.data.map((product, index) => {
                        return (
                            <Category product={product} key={index} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
