import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';
import { CheckItems } from './CheckItems';
import { Context } from '../Context';
import { submitForm } from '../../services/api';
import { Loading } from './Loading';
import Tooltip from '@material-ui/core/Tooltip';
import triangulo from '../../assets/img/triangulo.png'


export const CreatePasswordScreen = () => {

  /* declaración de constantes, useState y se traen elementos del context */
  const history = useHistory(); //para hacer redirección a links

  const {checkpoints, setcheckpoints, setActiveStep, setapiresponse} = useContext (Context); // Elementos del Context

  // maneja la renderización de la pantalla del loading cuando se hace la petición a la api, ademas desactiva los botones de siguiente o cancelar para controlar la interfaz de usuario
  const [isLoading, setisLoading] = useState(false); 

  //maneja mostrar y ocultar contraseña, ademas del icono utilizado para esta funcion
  const [showPass, setshowPass] = useState({'show':"password", 'icon':"screen2__eyeicon bi bi-eye-slash"})

  //maneja mostrar y ocultar la confirmación de la contraseña, ademas del icono utilizado para esta funcion
  const [showconfimrPass, setshowconfimrPass] = useState({'show':"password", 'icon':"screen2__eyeicon bi bi-eye-slash"})

  
  /* Manejadores de eventos */
  //controlador del boton "cancelar", seteando la aceptación del contrato en false para que no pueda volver a entrar ya que la ruta es privada
  const handleReturnHome = () =>{
    setcheckpoints({...checkpoints, 'acceptContract':false})
    history.push('./');
  }

  //controlador del icono para mostrar contraseña, seteando el icono del ojo abierto y pasando la contraseña a type=text, funciona como pulsador, haciendo toogle cuando se suelta el mouse o se sale de encima del icono
  const handleShowPass = (event) => {
    if (event.type === "mousedown") {
      setshowPass({'show':"text", 'icon':"screen2__eyeicon bi bi-eye"})
    } else {
      setshowPass({'show':"password", 'icon':"screen2__eyeicon bi bi-eye-slash"})
    } 
  }

  //controlador del icono para mostrar la confirmación de la contraseña, seteando el icono del ojo abierto y pasando la contraseña a type=text
  const handleShowconfirmPass = (event) => {
    if (event.type === "mousedown") {
      setshowconfimrPass({'show':"text", 'icon':"screen2__eyeicon bi bi-eye"})
    } else {
      setshowconfimrPass({'show':"password", 'icon':"screen2__eyeicon bi bi-eye-slash"})
    } 
  }

  //useEffect para que ejecute el cambio del step-progress-bar
  useEffect(() => {
      setActiveStep(1);
  }, [setActiveStep])
  
  /* reglas de validación del formulario */
  const validate = Yup.object({
    password: Yup.string()
      .min(8, 'La contraseña debe poseer al menos 8 caracteres')
      .required('La contraseña es requerida')
      .matches(
        /^.*((?=.*[0-9]){1}).*$/,
        "La contraseña debe poseer al menos un número"
      )
      .matches(
        /^.*((?=.*[A-Z]){1}).*$/,
        "La contraseña debe poseer al menos una mayúscula"
      ).matches(
        /^.*((?=.*[a-z]){1}).*$/,
        "La contraseña debe poseer al menos una minúscula"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('La confirmación de contraseña es requerida'),
    pista: Yup.string()
      .max(255, 'La pista no puede superar los 255 caracteres')
  })

  return (
    <>
      <img src={triangulo} alt="triangulo" className="screen2__triangulo" />  {/* Imagen triangular que señala en que paso del step-progressbar nos encontramos */}
      {isLoading && <Loading />} {/* cuando isLoading está en true se mostrará el componente Loading */}
      <div className="base__container">
        <div className="base__content animate__animated animate__fadeIn">
          <h1>Crea tu Password Manager</h1>
          <div className="base__underline"></div>
          <h3>
            En primer lugar, debes crear una contraseña diferente para tus pertenencias electrónicas. <br/>
            No podrás recuperar tu contraseña, así que recuérdala bien.
          </h3>
          
          <Formik /* control de los campos del formulario, indicando valores iniciales para cada campo */
            initialValues={{
              password: '',
              confirmPassword: '',
              pista: '',
            }}
      
            validationSchema={validate} /* se ingresan las reglas de validación de formulario que ya se declararon */

            onSubmit={values => {   /* llamado a la API pasando los valores recogidos del formulario */
              setisLoading(true); /* se controla la interfaz de usuario con una pantalla de loading */
              submitForm(values.password, values.confirmPassword, values.pista)
              .then(response => setapiresponse(response)) /* Se guardan los valores de la respuesta en el context para que luego los tome la pantalla de feedback */
              .catch(function(err) {
                console.log(err); //si bien el manejo del error es tenido en cuenta ya que en la pantalla de feedback mostrará que no se puedo crear Password Manager hago un console.log del error por control de programación
              })
              .finally(
                setTimeout(() => {
                  setisLoading(false)
                }, 2900), //desmonta el loading antes de la redireccion
                setTimeout(() => {
                  setcheckpoints({...checkpoints, 'passwordAccepted':true}); /* Se setea un checkpoint de envío de contraseña para acceder a la ruta privada del feedback */
                  history.push('./response'); //se redirecciona a la pantalla de feedback
                }, 3000)
              );
            }}
          >
        
            {formik => (
              <Form>

                <div className="screen2__rulesbox">
                  <CheckItems values={formik.values}/> {/* se pasan por props los valores del formulario en tiempo real para editar la checklist de la contaseña */}
                </div>
                
                {/* input de la contraseña y la confirmación de contraseña, con los iconos "eye" con los manejadores de eventos*/}
                <div className="screen2__passwordsbox">
                  
                  <div className="screen2__inputeyebox">
                      <TextField label="Crea tu Contraseña Maestra" name="password" type={showPass.show} placeholder="Elige una contraseña"/>
                    <div className="screen2__eyeiconbox">
                      <i onMouseDown={handleShowPass} onMouseLeave={handleShowPass} onMouseUp={handleShowPass} className={showPass.icon}></i>
                    </div>
                  </div>

                  <div className="screen2__inputeyebox">
                      <TextField label="Repite tu Contraseña Maestra" name="confirmPassword" type={showconfimrPass.show} placeholder="Repite tu contraseña"/>
                    <div className="screen2__eyeiconbox">
                      <i onMouseDown={handleShowconfirmPass} onMouseLeave={handleShowconfirmPass} onMouseUp={handleShowconfirmPass} className={showconfimrPass.icon}></i>
                    </div>
                  </div>
                  
                </div>

                {/* input de la pista con un tooltip indicando cuantos caracteres puede escribir */}
                <div className="screen2__pistabox">
                  <h3>También puedes crear una pista que te ayude a recordar tu contraseña maestra. &nbsp; 
                    <Tooltip title="Solo admite hasta 255 caracteres" placement="top" arrow><i className="bi bi-info-circle screen2__infoicon"></i></Tooltip>
                  </h3>
                  <TextField label="Crea tu pista para recordar tu contraseña maestra (opcional)" maxLength="255" name="pista" type="text" placeholder="Introduce tu pista"/>
                  <div className="screen2__contadorbox"><h3 className="screen2__contador">{formik.values.pista.length}/255</h3></div>
                </div>
                
                {/* botones de cancelación y el boton submit del formulario, se deshabilitan cuando está la pantalla de loading */}
                <div className="base__buttonbox">
                  <button disabled={isLoading} className="btn btn-light" type="reset" onClick={handleReturnHome}>Cancelar</button>
                  <button disabled={isLoading} className="btn btn-primary" type="submit">Siguiente <i className="bi bi-chevron-right"></i></button>
                </div>

              </Form>
            )}
          </Formik>
        </div>
      </div> 
    </>
  )
}
