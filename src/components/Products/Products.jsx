import React, { useContext, useEffect, useState } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import { AuthContext } from '../../Contexts/AuthContext';

export default function Products({ allProducts}) {
    const [products, setProducts] = useState([]);

    

    

    useEffect(() => {
        // Only set products if allProducts is not empty or undefined
        if (allProducts && allProducts.length) {
            setProducts(allProducts);
        }
    }, [allProducts]); // Run this effect when allProducts changes

    return (
        <div>
            {/* <div className="h-screen w-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 absolute">
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 md:px-10 gap-5'>
                {products.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </div>
        </div>
    );
}
