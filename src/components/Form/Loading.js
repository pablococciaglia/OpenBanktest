import React from 'react';

export const Loading = () => {
	return (
		<div className='d-flex justify-content-center loading__container animate__animated animate__fadeIn'>
			<div className='loading__box'>
				<div className='d-flex justify-content-center'>
					<div className='spinner-border text-primary' role='status'></div>
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		</div>
	);
};
