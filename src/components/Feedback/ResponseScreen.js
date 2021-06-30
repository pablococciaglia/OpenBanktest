import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context';
import { ResponseKO } from './ResponseKO';
import { ResponseOK } from './ResponseOK';
import triangulo from '../../assets/img/triangulo.png';

export const ResponseScreen = () => {
	const { setActiveStep, apiresponse } = useContext(Context); //se traen del context la respuesta de la api y el manejador del step-progress-bar

	const [resultado, setresultado] = useState(null); //se declara un useState para manejar que respuesta se va a renderizar

	useEffect(() => {
		/* dependiendo del estado de la respuesta recibida se setea el useState para mostrar el mensaje de respuesta exitosa o de respuesta fallida */
		if (apiresponse.status !== 200) {
			setresultado(false);
			setActiveStep(2); // para que ejecute el cambio del step-progress-bar y quede activa el step número 3
		} else {
			setresultado(true);
			setActiveStep(3); // para que ejecute el cambio del step-progress-bar y lo coloque con la última tarea en cumplida, cosa que no hará si se rechaza la petición
		}
	}, [apiresponse.status, setActiveStep]);

	return (
		<>
			<img src={triangulo} alt='triangulo' className='screen3__triangulo' />{' '}
			{/* Imagen triangular que señala en que paso del step-progressbar nos encontramos */}
			<div className='base__container animate__animated animate__fadeIn'>
				<div className='base__content'>
					<h1>Crea tu Password Manager</h1>
					<div className='base__underline'></div>
					{resultado ? <ResponseOK /> : <ResponseKO />}{' '}
					{/* renderiza un componente u otro dependiendo de la respusta de la api */}
				</div>
			</div>
		</>
	);
};
