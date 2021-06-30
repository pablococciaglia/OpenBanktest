import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../Context';
import imagen1 from '../../assets/img/group.svg';
import imagen2 from '../../assets/img/group-3.svg';
import Tooltip from '@material-ui/core/Tooltip';
import triangulo from '../../assets/img/triangulo.png';

export const HomeScreen = () => {
	const history = useHistory(); //para hacer redirección a links

	/* se declara un useState para habilitar y deshabilitar el botón de "siguiente" */
	const [accept, setaccept] = useState(true);

	/* se traen elementos del context */
	const { checkpoints, setcheckpoints, setActiveStep } = useContext(Context);

	/* se usa un useEffecct para setear el step-progress-bar en la primer posición */
	useEffect(() => {
		setActiveStep(0);
	}, [setActiveStep]);

	/* cuando establece un checked en el input: */
	const handleAcceptChange = () => {
		setaccept(!accept); // habilita el boton de "siguiente"
		if (checkpoints.acceptContract === false) {
			// cambia el estado del checkpoint para habilitaar la ruta privada que lleva a la pantalla del formulario
			setcheckpoints({ ...checkpoints, 'acceptContract': true });
		} else {
			setcheckpoints({ ...checkpoints, 'acceptContract': false });
		}
	};

	const handleSiguiente = () => {
		history.push('./create-password');
	};

	return (
		<>
			<img src={triangulo} alt='triangulo' className='screen1__triangulo' />{' '}
			{/* Imagen triangular que señala en que paso del step-progressbar nos encontramos */}
			<div className='base__container animate__animated animate__fadeIn'>
				{' '}
				{/* animacion de fadein con el modulo instalado de animateCSS */}
				<div className='base__content'>
					<h1>Crea tu Password Manager</h1>
					<div className='base__underline'></div>

					<div className='container-fluid'>
						{' '}
						{/* se utiliza container de bootstrap para realizar las dos columnas con comportamiento responsive */}
						<div className='row'>
							<div className='col-lg-6'>
								<img alt='headsvg' src={imagen1} className='screen1__imagen' />
								<h3>
									Guarda aquí todas tus contraseñas, datos o cualquier
									información, olvida las notas de papel y las aplicaciones no
									protegidas.
								</h3>
							</div>
							<div className='col-lg-6'>
								<img alt='boxsvg' src={imagen2} className='screen1__imagen' />
								<h3>
									Crea tu clave maestra: solo tú podrás acceder a tus secretos
									con ella.
								</h3>
							</div>
						</div>
					</div>

					<h2>Cómo funciona</h2>
					<h3>
						En primer lugar, debes crear una contraseña diferente para tus
						pertenencias electrónicas. no podrás recuperar tu contraseña, así
						que recuérdela bien.
					</h3>

					<h2>Qué datos puedes guardar</h2>
					<h3>
						Por ejemplo, el número de tu tarjeta, el PIN y PUK de tu teléfono
						móvil, el número de series de alguno de tus dispositivos o cualquier
						información que necesites tener en un lugar seguro.
					</h3>

					<form onChange={handleAcceptChange} className='screen1__form'>
						<input className='form-check-input' type='checkbox' />
						<p>
							Soy mayor de edad y he leído y acepto el tratamiento de mis datos
							según la
							<Link to='/terms-and-conditions' className='base__Link'>
								<strong> política de protección de datos</strong>
							</Link>
							. {/* enlace al contrato de la aplicacion */}
						</p>
					</form>

					<div className='base__buttonbox'>
						<Tooltip title='Este botón no hace nada' placement='top' arrow>
							<button className='btn btn-light'>Cancelar</button>
						</Tooltip>{' '}
						{/* se utiliza un tooltip para mostrar una leyenda en el boton de cancelar */}
						<button
							disabled={accept}
							type='button'
							className='btn btn-primary'
							onClick={handleSiguiente}
						>
							Siguiente <i className='bi bi-chevron-right'></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
