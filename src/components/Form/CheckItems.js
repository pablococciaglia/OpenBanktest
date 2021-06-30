import React, { useEffect, useState } from 'react';

export const CheckItems = ({ values }) => {
	/* recibe valores en las props de lo que se tipea en tiempo real en password y confirmación de password*/

	/* declaración de variables */
	let password = null;
	let confirmPassword = null;

	/* Si lo que recibe es distinto de lo que ya hay guardado en las variables, lo guarda, asi solo tendremos que utilizar "password" y no "values.password" en el resto del archivo */
	if (password !== values.password) {
		password = values.password;
	}

	if (confirmPassword !== values.confirmPassword) {
		confirmPassword = values.confirmPassword;
	}

	/* se declaran unas expresiones regulares que son las que determinan las reglas que deben validarse en la contraseña */
	let capital = new RegExp('^(?=.*[A-Z])');
	let lower = new RegExp('^(?=.*[a-z])');
	let num = new RegExp('^(?=.*[0-9])');
	let len = new RegExp('^(?=.{8,})');

	/* se declara un useState para cada regla de validación, que manejara la aparición de un icono de checking por cada regla cumplida */
	const [capitalletter, setcapitalletter] = useState(false);
	const [lowerletter, setlowerletter] = useState(false);
	const [numbers, setnumbers] = useState(false);
	const [length, setlength] = useState(false);
	const [equal, setequal] = useState(false);

	/* dependiendo de los condicionales, se setean los useState declarados previamente en verdaderos o falsos dependiendo que reglas de validación fueron superadas correctamente */
	useEffect(() => {
		if (capital.test(password)) {
			setcapitalletter(true);
		} else {
			setcapitalletter(false);
		}
		if (lower.test(password)) {
			setlowerletter(true);
		} else {
			setlowerletter(false);
		}
		if (num.test(password)) {
			setnumbers(true);
		} else {
			setnumbers(false);
		}
		if (len.test(password)) {
			setlength(true);
		} else {
			setlength(false);
		}
		if (password === confirmPassword && password.length > 7) {
			setequal(true);
		} else {
			setequal(false);
		}
	}, [password, confirmPassword, capital, lower, num, len]);

	return (
		<>
			<h3>
				<strong>Reglas para la creación de la Contraseña Maestra</strong>
			</h3>
			<span>Mínimo una mayúscula</span>{' '}
			{capitalletter && <i className='bi bi-check-circle screen2__icons'></i>}{' '}
			<br />
			<span>Mínimo una minúscula</span>{' '}
			{lowerletter && <i className='bi bi-check-circle screen2__icons'></i>}{' '}
			<br />
			<span>Mínimo un número</span>{' '}
			{numbers && <i className='bi bi-check-circle screen2__icons'></i>} <br />
			<span>Mínimo 8 caracteres</span>{' '}
			{length && <i className='bi bi-check-circle screen2__icons'></i>} <br />
			<span>Las contraseñas deben coincidir</span>{' '}
			{equal && <i className='bi bi-check-circle screen2__icons'></i>} <br />
		</>
	);
};
