import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Brand(product) {

  const navigate = useNavigate();
  console.log(product.product._id);

  function getBrandProducts(brandId) {
    navigate(`/brandproducts/${brandId}`);
  }
  
  return (
    <div onClick={() => getBrandProducts(product.product._id)} className="flex-shrink-0 m-6 relative overflow-hidden bg-slate-500 rounded-lg shadow-lg group cursor-pointer col-span-4 md:col-span-2 lg:col-span-1">
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
    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
      <div
        className="absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
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
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 mb-1">{product.product.slug}</span>
      <div className="flex justify-between items-center">
        <span className="block font-semibold text-xl">{product.product.name}</span>
        <span className="bg-white rounded-full text-neutral-800 text-xs font-bold px-3 py-2 leading-none flex items-center">
          Click here
        </span>
      </div>
    </div>
  </div>
      )
}
