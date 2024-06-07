import { ebGaramond } from '@/lib/fonts';
import Column from '@/library/utils/column/Column';
import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaQuoteRight } from 'react-icons/fa6';

type HomeTestimonialProps = {};

const HomeTestimonial: FC<HomeTestimonialProps> = ({}) => {
	const style = {
		flexDirection: 'column',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		textAlign: 'center',
		fontSize: { base: 'lg', md: '2xl' },
		gap: 10,
		p: 20,
	};

	return (
		<Column>
			<Flex sx={style} className={ebGaramond.className}>
				<FaQuoteRight />
				<Text px={{ base: 1, md: 20 }} letterSpacing={{ base: 0, md: 4 }}>
					Event planning website is a website for planning great events. They
					are good at planning marriage events. Thank you for the services
				</Text>

				<Text mt={4} fontSize='md' textColor='#AF9453'>
					Naimul & Abeer
				</Text>
			</Flex>
		</Column>
	);
};

export default HomeTestimonial;
