import Column from '@/library/utils/column/Column';
import { Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import EventCard from '../Global/EventCard';

type ServicesProps = {};

const HomeServices: FC<ServicesProps> = () => {
	return (
		<Column id='services'>
			<div data-aos='fade-up'>
				<Flex
					className='home-services'
					p={{ base: 0, lg: '50px' }}
					gap={{ base: 0, lg: 20 }}
					flexDirection={{ base: 'column', lg: 'row' }}
					justifyContent='center'
					alignItems='center'
				>
					<EventCard
						title='Services'
						description='Turn your dream into a reality'
						buttonText='Discover'
						bgColor='#575555'
						textColor='#FFFFFF'
					/>
					<Flex
						w={{ base: 'full', lg: 'fit-content' }}
						h={{ base: 'full', lg: '600px' }}
					>
						<Image objectFit='cover' src='/servicesbanner.jpg' />
					</Flex>
				</Flex>
			</div>
		</Column>
	);
};

export default HomeServices;
