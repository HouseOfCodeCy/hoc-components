import React,{FC} from 'react';
import {ButtonProps} from './Button.types';
import {ButtonProps as PrimeButtonProps, Button as PrimeButton} from 'primereact/button';
export interface CustomButtonProps extends PrimeButtonProps, ButtonProps {}

export const Button: FC<CustomButtonProps> = ({...props}) => {

	const CustomButton = () => {
		return (
			<PrimeButton icon="pi pi-check" iconPos="right" {...props}/>
		);
	};

	return (
		<CustomButton />
	);
};
