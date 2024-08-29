import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

export default function RelatedProduct({ product }) {

    const [wishListLoading, setWishListLoading] = useState(false);
    const [addToCartLoading, setAddToCartLoading] = useState(false);

    const { userToken } = useContext(AuthContext);

    async function addToCart(id) {
        setAddToCartLoading(true)
        const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", {
            productId: id
        }, {
            headers: {
                token: userToken
            }
        })
        console.log(data);
        setAddToCartLoading(false)
        toast.success('added to cart succesfully!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    async function addToWishList(id) {
        setWishListLoading(true)
        const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
            productId:id
        }, {
            headers:{
                token:userToken
            }
        })
        setWishListLoading(false)
        toast.success('added to wish list succesfully!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const navigate = useNavigate();

    function getProductDetails() {
        navigate(`/productDetails/${product.id}`);
    }

    function sayHello() {
        console.log('hello');

    }

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
            <div onClick={getProductDetails} className="cursor-pointer border-b-2">
                <img className="w-full" src={product.imageCover} alt="Product Image" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                <div className="flex justify-start pb-2">
                    <span className="font-bold text-lg">${product.price}</span>
                </div>
                <div className='pb-7 flex flex-col gap-2'>
                    <button disabled={addToCartLoading} onClick={() => addToCart(product.id)} className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 border-2 hover:bg-emerald-500">
                        Add to cart {addToCartLoading && <i className='fas fa-spinner fa-spin ms-2 text-lg'></i>}
                    </button>
                    <button disabled={wishListLoading} onClick={() => addToWishList(product.id)} className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 border-2 hover:bg-fuchsia-400">
                        Add to wish list {wishListLoading && <i className='fas fa-spinner fa-spin ms-2 text-lg'></i>}
                    </button>
                </div>
            </div>
        </div>

    )
}
