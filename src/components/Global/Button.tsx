import React from 'react';
import {
	Button as ChakraButton,
	ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
	label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
	return (
		<ChakraButton
			bg='#AF9453'
			color='white'
			borderStyle='double'
			borderRadius={1}
			borderColor='#FFFFFF'
			boxShadow='0px 0px 0px 1px white inset'
			_hover={{
				bg: 'white',
				color: '#AF9453',
				boxShadow: '0px 0px 0px 1px #AF9453 inset',
			}}
			px={20}
			py={6}
			variant='ghost'
			textTransform='uppercase'
			fontFamily='BrandonGrot'
			fontWeight='300'
			{...props}
		>
			{label}
		</ChakraButton>
	);
};

export default Button;
