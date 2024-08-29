import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Brand from '../../components/Brand/Brand';
import IsLoading from '../IsLoading/IsLoading';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function Brands() {

    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function productSearch() {

    }



    function getAllBrands() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/brands');;
    }

    let  data  = useQuery({
        queryKey: ["brands"],
        queryFn: getAllBrands
    })
    console.log(data.isLoading);
    console.log(data.data?.data.data);
    // console.log(data.data?.data.data.products);


    if (data.isLoading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <IsLoading />
            </div>
        )
    } else if (error) {
        return <h1>error</h1>
    } else {
        return (
            <div>
                <div className='grid grid-cols-4 bg-slate-300'>
                    {data.data?.data.data.map((product, index) => {
                        return (
                            <Brand product={product} key={index} />
                        )
                    })}
                </div>
            </div>
        )
    }

}
