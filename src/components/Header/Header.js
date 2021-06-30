import React from 'react';
import openbankLogo from '../../assets/img/logo_openbank.png';
import { StepProgress } from './StepProgress';

export const Header = () => {
	/* Solo presenta el logo de la empresa y trae el componente del Step-progress-bar */
	return (
		<div className='header__container'>
			<img alt='obLogo' className='header__logo' src={openbankLogo} />
			<StepProgress />
		</div>
	);
};
