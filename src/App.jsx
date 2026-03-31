import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import RootLayout from './layout/RootLayout'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/services',
          element:<Services/>
        },
        {
          path:'/pricing',
          element:<Pricing/>
        },
        {
          path:'/gallery',
          element:<Gallery/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'*',
          element:<NotFound/>
        }
      ]
    }
  ])

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
