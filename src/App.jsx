import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './component/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Categories from './pages/categories/Categories'
import Category from './pages/category/Category'
import Blog from './pages/blog/Blog'
import Footer from './component/footer/Footer'

function App() {

  const Layout = () => {
    return (
      <>
        <Header />
        <div className='pageContainer'>
          <Outlet />
        </div>
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/category/:category-id",
          element: <Category />
        },
        {
          path: "/blog/:blog-id",
          element: <Blog />
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
