import { Flex, TextProps as ChakraTextProps } from '@chakra-ui/react';

import React, { FC } from 'react';

interface HeroTitleProps extends ChakraTextProps {
	title: string;
}

const HeroTitle: FC<HeroTitleProps> = ({ title, ...props }) => {
	return (
		<Flex
			alignItems='center'
			justifyContent='center'
			textAlign='center'
			fontSize={30}
			fontFamily='BrandonGrot'
			fontWeight={300}
			letterSpacing='0.45em'
			textColor='#AF9453'
			textTransform='uppercase'
			mt={4}
			{...props}
		>
			{title}
		</Flex>
	);
};

export default HeroTitle;
