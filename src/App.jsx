import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

// import pages
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/home";
import Footer from "./components/footer/Footer";
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/myGigs/MyGigs";
import Add from "./pages/add/Add";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import './app.scss'
import Gigs from "./pages/gigs/Gigs";


function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/gig/:id',
          element: <Gig />
        },
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/mygigs',
          element: <MyGigs />
        },
        {
          path: '/gigs',
          element: <Gigs />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: '/messages',
          element: <Messages/>
        },
        {
          path: '/message:id',
          element: <Message />
        }
      ]
    },
  ]);

  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
