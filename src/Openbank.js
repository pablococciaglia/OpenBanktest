import React, { useState } from 'react'
import { Context } from './components/Context'
import { AppRouter } from './router/AppRouter'

export const Openbank = () => {

    /* se declaran 3 useState, que serán utilizados dentro del Context para distribuirlos por toda la aplicación */
    
    const [checkpoints, setcheckpoints] = useState({'acceptContract':false, 'passwordAccepted':false}) //será utilizado como control de las rutas privadas, asi el usuario no tendrá acceso en el caso de no haber pasado alguno de los checkpoints
    const [activeStep, setActiveStep] = useState(0); //se utilizará para configurar el Step-Progress-Bar
    const [apiresponse, setapiresponse] = useState({'status': ''}) //se utilizará para pasar los datos de la respuesta de la api a la pantalla de feedback
    
    return (
        
        /* El Context.provider envuelve a las rutas de la apicación para que todas esas rutas tengan acceso al context */
        <Context.Provider value ={{checkpoints, setcheckpoints, activeStep, setActiveStep, apiresponse, setapiresponse}}>
            <AppRouter />
        </Context.Provider>
    )

}
