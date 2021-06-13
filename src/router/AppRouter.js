  import React, { useContext } from 'react'
  import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { PrivateRoutes } from './PrivateRoutes';
  import { CreatePasswordScreen } from '../components/Form/CreatePasswordScreen';
  import { ResponseScreen } from '../components/Feedback/ResponseScreen';
  import { ContractScreen } from '../components/ProductInformation/ContractScreen';
  import { HomeScreen } from '../components/ProductInformation/HomeScreen';
  import { Context } from '../components/Context';
  import { Header } from '../components/Header/Header';
  
export const AppRouter = () => {

    const {checkpoints} = useContext (Context);
    
    return (
        <Router>
            <div className="body__container">
                
                {/* El header se establece fuera del switch ya que siempre estará visible dentro de la aplicación */}
                <Header />

                <Switch>

                    {/* La ruta privada del feedback tiene 2 checkpoints, haber aceptado el contrato y tener una contraseña valida */}
                    <PrivateRoutes 
                        someCheckpoint = {checkpoints.passwordAccepted && checkpoints.acceptContract}
                        exact path = "/response" 
                        component = { ResponseScreen } 
                    />

                    {/* La ruta privada del Formulario tiene 1 checkpoint, haber aceptado el contrato */}
                    <PrivateRoutes 
                        someCheckpoint = {checkpoints.acceptContract}
                        exact path = "/create-password" 
                        component = { CreatePasswordScreen } 
                    />

                    {/* el contrato, es una ruta publica, se puede acceder desde el Home */}
                    <Route 
                        exact path = "/terms-and-conditions" 
                        component = { ContractScreen } 
                    />

                    {/* el home, que sería es una ruta pública, y no es exacta, por lo tanto si escribe mal algo en la url, siempre llegaría aquí */}
                    <Route 
                        path = "/" 
                        component = { HomeScreen } 
                    />
                 
                </Switch>

            </div>
        </Router>
      );
}
