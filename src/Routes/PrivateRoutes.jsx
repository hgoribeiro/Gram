import React, { Children } from 'react'
import { Navigate } from "react-router"
import { islogged } from '../Components/logged'


export const PrivateRoutes = ( {children} ) => {
    return (
        islogged()
            ? children
            : <Navigate to="/login" />
    )

}