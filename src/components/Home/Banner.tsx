'use client';

import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Button from '@/components/Global/Button';
import { Link } from 'react-scroll';
import { ebGaramond } from '@/lib/fonts';
import { BsArrowDown } from 'react-icons/bs';

type BannerProps = {};

const Banner: FC<BannerProps> = ({}) => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 2], [0, 0]);

	return (
		<Box
			position='relative'
			height={{ base: '60vh', lg: '90vh' }}
			backgroundImage="url('eventbanner.jpg')"
			backgroundSize='cover'
			backgroundPosition='center'
			backgroundAttachment='fixed'
		>
			<Box
				as={motion.div}
				boxShadow='inset 0px 0px 20px 10px rgba(8, 8, 8, 0.6)'
				style={{ y }}
			>
				<Flex
					flexDirection='column'
					gap={10}
					justifyContent='center'
					alignItems='center'
					className={ebGaramond.className}
					pos='absolute'
					top='50%'
					left='50%'
					transform='translate(-50%, -50%)'
					textAlign='center'
				>
					<Text
						textAlign='center'
						inlineSize='min-content'
						fontSize={{ base: 30, md: 60 }}
						letterSpacing={{ base: 4, md: 10 }}
						textColor='#6d179e'
						fontWeight={600}
					>
						Creating Unforgettable Memories
					</Text>
					<Button label='Discovery Call' w='fit-content' />
					<Link to='services' smooth duration={500}>
						<BsArrowDown size={40} color='#6d179e' cursor='pointer' />
					</Link>
				</Flex>
			</Box>
		</Box>
	);
};

export default Banner;
