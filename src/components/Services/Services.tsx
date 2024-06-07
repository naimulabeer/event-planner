import { Grid } from '@chakra-ui/react';
import React, { FC } from 'react';

type ServicesProps = {};

const Services: FC<ServicesProps> = ({}) => {
	return (
		<Grid
			templateColumns={{
				base: 'repeat(1,1fr), md: repeat(2,1fr), lg: repeat(3,1fr)',
			}}
			bgColor='#FBFBFB'
		></Grid>
	);
};

export default Services;
