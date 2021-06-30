import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import success from '../../assets/img/ok.png';
import { Context } from '../Context';

export const ResponseOK = () => {
	const { setcheckpoints, setapiresponse } = useContext(Context);

	const history = useHistory();

	const handleReturnHome = () => {
		/* cuando se presiona el boton para volver al inicio se vuelven a setear los checkpoints en falsos para que no se pueda acceder a las rutas privadas, ademas se setea en vacia la respuesta de la api y finalmente redirecciona al Home */
		setcheckpoints({ 'acceptContract': false, 'passwordAccepted': false });
		setapiresponse({ 'status': '' });
		history.push('./');
	};

	return (
		<>
			<img src={success} alt='success' className='screen3__icon' />
			<h2>¡Tu Password Manager ya está creado!</h2>
			<h3>Ya puedes disfrutar de los beneficios del servicio.</h3>
			<div className='screen3__buttonbox'>
				<span
					onClick={handleReturnHome}
					className='screen3__button'
					type='submit'
				>
					Siguiente <i className='bi bi-chevron-right'></i>
				</span>
			</div>
		</>
	);
};
