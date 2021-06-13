import React from 'react'
import { Redirect, Route } from 'react-router'

/* Este archivo es una plantilla para las rutas privadas, indicando que elementos serán necesarios para configurarla */
export const PrivateRoutes = ({
    someCheckpoint,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={ ( props ) => (
                ( someCheckpoint ) //se establece un condicional, y en el caso de que no exista, o no sean true las variables que se configuren se redirecciona a la pantalla de home.
                    ? <Component { ...props } />
                    : <Redirect to="./" />
            )}
        />
    )
}
