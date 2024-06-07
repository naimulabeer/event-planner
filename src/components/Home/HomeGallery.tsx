'use client';

import Column from '@/library/utils/column/Column';
import { Box, Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import EventCard from '../Global/EventCard';

type HomeGalleryProps = {};

const HomeGallery: FC<HomeGalleryProps> = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 100], [0, 0]);

	return (
		<Column>
			<Flex position='relative' p={{ base: 0, lg: 20 }}>
				<Image
					w='full'
					h='fit-content'
					src='/homegallery.jpg'
					fill='true'
					objectFit='cover'
				/>

				<Box as={motion.div} style={{ y }}>
					<EventCard
						title='GALLERY'
						description='Unforgettable Memories'
						buttonText='Discover'
						bgColor='#AF9453'
						textColor='#FFFFFF'
						position='absolute'
						display={{ base: 'none', xl: 'flex' }}
						top='50%'
						left='75%'
						transform='translate(-50%, -50%)'
					/>
				</Box>
			</Flex>
		</Column>
	);
};

export default HomeGallery;
