import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';

export default function Navbar() {

    const { userToken, setUserToken } = useContext(AuthContext);


    setUserToken(localStorage.getItem('userToken'));

    function navToggle() {
        document.getElementById("hamburger").onclick = function toggleMenu() {
            const navToggle = document.getElementsByClassName("toggle");
            for (let i = 0; i < navToggle.length; i++) {
                navToggle.item(i).classList.toggle("hidden");
            }
        };
    }

    function logOut() {
        localStorage.setItem('userToken', "");
        setUserToken(localStorage.getItem('userToken'));
    }

    return (
        <nav className="flex flex-wrap items-center justify-between p-3 md:px-20 lg:px-32 bg-teal-200/20 border-indigo-950">
            <div className='flex gap-3 justify-center items-center'>
                <i className="fa-solid fa-cart-shopping text-emerald-500 text-3xl"></i>
                <h2 className='text-2xl'>FreshCart</h2>
            </div>
            <div className="flex md:hidden">
                <button id="hamburger" onClick={navToggle}>
                    <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="48" height="48" />
                    <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="48" height="48" />
                </button>
            </div>
            {userToken && <div
                className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none">
                <NavLink to={'/home'}
                    className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Home
                </NavLink>
                <NavLink to={'/brands'}
                    className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Brands
                </NavLink>
                <NavLink to={'/categories'}
                    className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Categories
                </NavLink>
                <NavLink to={'/cart'}
                    className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Cart
                </NavLink>
                <NavLink to={'/wishList'}
                    className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Wish List
                </NavLink>
            </div>}
            {userToken && <NavLink to={'/'}
                onClick={logOut} className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-center bg-teal-900 hover:bg-teal-500 text-white md:rounded mt-3">Log out
            </NavLink>}
            {userToken == "" ? <NavLink to={'/login'}
                className="toggle ms-auto md:me-4 hidden md:flex w-full md:w-auto px-4 py-2 text-center bg-teal-900 hover:bg-teal-500 text-white md:rounded mt-3 md:px-12">Log In
            </NavLink>: ""}
            {userToken == "" ? <NavLink to={'/'}
                className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-center bg-teal-900 hover:bg-teal-500 text-white md:rounded mt-3">Create
                Account
            </NavLink>: ""}
            
        </nav>
        // <div className='w-full bg-teal-200/20'>
        //     <nav className="flex flex-wrap items-center justify-between p-3 w-10/12 mx-auto">
        //         <div className='flex gap-4'>
        //             <i className="fa-solid fa-cart-shopping text-emerald-500 text-3xl"></i>
        //             <h1>FreshCart</h1>
        //         </div>
        //         <div className="flex md:hidden">
        //             <button id="hamburger" onClick={navToggle}>
        //                 <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="48" height="48" />
        //                 <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="48" height="48" />
        //             </button>
        //         </div>
        //         <div
        //             className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none">
        //             {/* <NavLink to={'/home'}
        //                 className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Home
        //             </NavLink>
        //             <NavLink to={'/brands'}
        //                 className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Products
        //             </NavLink>
        //             <NavLink to={'/cart'}
        //                 className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Pricing
        //             </NavLink>
        //             <NavLink to={'/categories'}
        //                 className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Contact
        //             </NavLink> */}
        //         </div>
        //         <NavLink to={'/login'}
        //             className="toggle ms-auto md:me-4 hidden md:flex w-full md:w-auto px-4 py-2 text-center bg-teal-900 hover:bg-teal-500 text-white md:rounded mt-3 md:px-12">Log In
        //         </NavLink>
        //         <NavLink to={'/'}
        //             className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-center bg-teal-900 hover:bg-teal-500 text-white md:rounded mt-3">Create
        //             Account
        //         </NavLink>
        //     </nav>
        // </div>

    )
}
