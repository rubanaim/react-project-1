
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Layout from './layout/Layout'
import About from './pages/About/About'
// import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact/Contact'
import { lazy , Suspense, useEffect } from 'react'
import LottieHandler from './common/Dynamic/LottieHandler'
import { Toaster } from 'react-hot-toast'
import useAuth from './zustant/authSlice';
const Layout = lazy(()=> import('./layout/Layout'))
const Home = lazy(()=> import('./pages/Home/Home'))
const Register = lazy(()=> import('./pages/Auth/Register'))
const Login = lazy(()=> import('./pages/Auth/Login'))
const Products = lazy(()=> import('./components/Products/Products'))
const WishList = lazy(()=> import('./pages/WishList/WishList'))
const Cart = lazy(()=> import('./pages/Cart/Cart'))

export default function App() { 
const initiatAuth = useAuth(s=>s.initiatAuth)
useEffect(()=>{
  const recoed = initiatAuth()
  return ()=> recoed
},[])
const router = createBrowserRouter([

  {
    path: '/',
    element: <Suspense fallback={<LottieHandler status='main'/>}>
      <Layout /></Suspense>,
    children:[
       {  path :"/", 
        element: <Suspense fallback={<LottieHandler status='main'/>}>
          <Home /></Suspense>,
      },
       {  path : "/about", 
        element: <About />,
      },
       {  path : "/shop", 
        element: <Shop />,
      },
       {  path : "/contact", 
        element: <Contact />,
      },
      {
        path :"/register", 
        element: <Suspense fallback={<LottieHandler status='main'/>}>
          <Register /></Suspense>,
      },
      {
        path :"/login", 
        element: <Suspense fallback={<LottieHandler status='main'/>}>
          <Login /></Suspense>,
      },
      {
        path :"products/:category", 
        element: <Suspense fallback={<LottieHandler status='main'/>}>
          <Products /></Suspense>,
      },
      {
        path :"products", 
        element: <Suspense fallback={<LottieHandler status='main'/>}>
          <Products /></Suspense>,
      },
      {
        path :"wishlist", 
        element: <Suspense fallback={<LottieHandler status='main'/>}>
          <WishList /></Suspense>,
      },
      {
        path :"cart", 
        element: <Suspense fallback={<LottieHandler status='main'/>}>
          <Cart /></Suspense>,
      }

    ],
    errorElement: <LottieHandler status='error'/>
  }
])
  return <><RouterProvider router={router}/>
  <Toaster/>
  </>  
  
}
   