import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Username from "./components/Username"
import Reset from "./components/Reset"
import Register from "./components/Register"
import Recovery from "./components/Recovery"
import Profile from "./components/Profile"
import Password from "./components/Password"


import { AuthorizeUser, ProtectRoute } from './middleware/auth'
import { PageNotFound } from './components/PageNotFound'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Username></Username>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/password",
        element: <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path: "/profile",
        element: <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path: "/recovery",
        element: <Recovery></Recovery>
    },
    {
        path: "/reset",
        element: <Reset></Reset>
    },
    {
        path: "*",
        element: <PageNotFound></PageNotFound>
    },
])

export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}
