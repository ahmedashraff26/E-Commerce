import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Layout from './components/Layout/Layout'
import Notfound from './components/Notfound/Notfound'
import Home from './Pages/Home/Home'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import CounterContextProvider from './Contexts/CounterContext'
import AuthContextProvider from './Contexts/AuthContext'
import Cart from './Pages/Cart/Cart'
import Brands from './Pages/Brands/Brands'
import Categories from './Pages/Categories/Categories'
import CategoryProductsPage from './Pages/CategoryProductsPage/CategoryProductsPage'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProtectedAuthRoutes from './components/ProtectedAuthRoutes/ProtectedAuthRoutes'
import ShippingAddress from './components/ShippingAddress/ShippingAddress'
import WishList from './Pages/WishList/WishList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BrandProductsPage from './Pages/BrandProductPage/BrandProductPage'
import VerifyCodePage from './Pages/VerifyCodePage/VerifyCodePage'
import UpdatePassword from './Pages/UpdatePasswordPage/UpdatePasswordPage'
import SendCode from './Pages/SendCode/SendCode'

function App() {

  const querClient = new QueryClient()

  let router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedAuthRoutes><Signup /></ProtectedAuthRoutes> },
        { path: '/login', element: <ProtectedAuthRoutes><Login /></ProtectedAuthRoutes> },
        { path: '/verifyCode', element: <ProtectedAuthRoutes><VerifyCodePage /></ProtectedAuthRoutes> },
        { path: '/SendCode', element: <ProtectedAuthRoutes><SendCode /></ProtectedAuthRoutes> },
        { path: '/updatePassword', element: <ProtectedAuthRoutes><UpdatePassword /></ProtectedAuthRoutes> },
        { path: '/home', element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: '/productDetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: '/cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: '/brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: '/categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: '/categoryproducts/:id', element: <ProtectedRoute><CategoryProductsPage /></ProtectedRoute> },
        { path: '/brandproducts/:id', element: <ProtectedRoute><BrandProductsPage /></ProtectedRoute> },
        { path: '/wishList', element: <ProtectedRoute><WishList /></ProtectedRoute> },
        { path: '/shippingaddress/:id', element: <ProtectedRoute><ShippingAddress /></ProtectedRoute> },
        { path: '*', element: <Notfound /> },
      ]
    }
  ])

  return (
    <>
      <QueryClientProvider client={querClient}>
        <AuthContextProvider>
          <CounterContextProvider>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer />
          </CounterContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>

    </>
  )
}

export default App
