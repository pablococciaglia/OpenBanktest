import React from 'react';
import { ErrorMessage, useField } from 'formik';

/* Plantilla para creación de elementos del Formulario, recibe el Label y las propiedades del input y devuelve con algunas clases seteadas, asi los elementos del formulario se declaran en una sola línea con menos código en la parte pricipal de la aplicación */
export const TextField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className='mb-2'>
			<label htmlFor={field.name}>{label}</label>
			<input
				className={`screen2__inputtext form-control shadow-none ${
					meta.touched && meta.error
				}`}
				{...field}
				{...props}
				autoComplete='off'
				id={field.name}
			/>
			<ErrorMessage
				component='div'
				name={field.name}
				className='screen2__error'
			/>
		</div>
	);
};
