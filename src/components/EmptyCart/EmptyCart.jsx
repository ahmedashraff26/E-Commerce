import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center min-h-80 bg-gray-100 p-4">
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-4">
                    It looks like you haven't added any products to your cart yet.
                </p>
                <Link to={`/home`}
                     // Link to shop or product page
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Start Shopping
                </Link>
            </div>
        </div>
    )
}
