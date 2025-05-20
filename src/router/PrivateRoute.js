import React from 'react'
import { redirect, Route } from 'react-router-dom'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

export const PrivateRoute = ({
   component: Component,
   ...rest
}) => {
    const isAuthenticated = useIsAuthenticated()
    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? <Component { ...props } />
                    : redirect("/login")
            )} 
        />
    )
}



