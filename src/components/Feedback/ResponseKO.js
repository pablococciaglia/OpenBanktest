import React, { useContext } from 'react'
import fail from '../../assets/img/ko.png'
import { useHistory } from 'react-router';
import { Context } from '../Context';

export const ResponseKO = () => {
    
    const {setcheckpoints, setapiresponse} = useContext (Context);

    const history = useHistory();
    
    const handleReturnHome = () =>{/* cuando se presiona el boton para volver al inicio se vuelven a setear los checkpoints en falsos para que no se pueda acceder a las rutas privadas, ademas se setea en vacia la respuesta de la api y finalmente redirecciona al Home */
        setcheckpoints({'acceptContract':false, 'passwordAccepted':false});
        setapiresponse({'status': ""})
        history.push('./');
    }

    return (
        <>
            <img src={fail} alt="fail" className="screen3__icon" />
            <h2>Ha habido un error</h2>
            <h3>No hemos podido modificar tu Password Manager. Inténtalo más tarde.</h3>
            <div className="screen3__buttonbox">
                <span onClick={handleReturnHome} className="screen3__button">Volver a Password Manager <i className="bi bi-chevron-right"></i></span>
            </div>
        </>
    )
}
