import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import CategoryProductsPage from '../../Pages/CategoryProductsPage/CategoryProductsPage';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Category(product) {

  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [IsClicked, setisClicked] = useState(false)
  // const category = product.product.name;


  function getCategoryProducts(categoryId) {
    // if (allProducts.length) {
    //   const related = allProducts.filter(prod => prod.category.name === category);
    //   setRelatedProducts(related);
    //   displayRelatedddd(related);
    // }
    navigate(`/categoryproducts/${categoryId}`)
  }

  function displayRelatedddd(relatedItems) {
    if (relatedItems.length) {
      console.log(relatedItems);
      // return (
      //   <div className='bg-slate-200'>
      //       <div class="h-screen w-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 absolute">
      //       </div>
      //       <div className={isLoading ? 'flex justify-center items-center h-screen' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 md:px-10 bg-slate-200 gap-5'}>
      //           {isLoading && <IsLoading />}
      //           {relatedItems.map((product, index) => {
      //               return (<Product product={product} key={index} />)
      //           })}
      //       </div>
      //   </div>
    // )
    } else{
      console.log('sorry no related items');
    }
    
  }


  // function displayRelatedProducts(products) {
  //   console.log(products);

  //   // return(
  //   //   <div className='bg-slate-200'>
  //   //       <div class="h-screen w-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 absolute">
  //   //       </div>
  //   //       <div className={isLoading ? 'flex justify-center items-center h-screen' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 md:px-10 bg-slate-200 gap-5'}>
  //   //           {isLoading && <IsLoading />}
  //   //           {products.map((product, index) => {
  //   //               return (<Product product={product} key={index} />)
  //   //           })}
  //   //       </div>
  //   //   </div>
  //   // )
  // }


  return (
    <div onClick={(() => {
      console.log(product.product._id);
      
      getCategoryProducts(product.product._id)
    })} className="flex-shrink-0 m-6 relative overflow-hidden bg-slate-500 rounded-lg shadow-lg group cursor-pointer col-span-4 md:col-span-2 lg:col-span-1">
      {/* Decorative SVG Background */}
      <svg
        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
        viewBox="0 0 375 283"
        fill="none"
        style={{ opacity: 0.1 }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>

      {/* Image and Gradient Overlay */}
      <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform h-4/6 cursor-pointer">
        <div
          className="absolute w-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: 'radial-gradient(black, transparent 60%)',
            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
            opacity: 0.2,
          }}
        />
        <img
          className="relative w-40"
          src={product.product.image}
          alt="Peace Lily"
        />
      </div>

      {/* Product Details */}
      <div className="relative text-white px-6 pb-6 mt-9">
        <span className="block opacity-75 mb-1">{product.product.slug}</span>
        <div className="flex justify-between items-center">
          <span className="block font-semibold text-xl">{product.product.name}</span>
          <span className="bg-white rounded-full text-neutral-800 text-xs font-bold px-4 py-3 leading-none flex items-center">
            Click to here
          </span>
        </div>
      </div>
    </div>
  )
}
