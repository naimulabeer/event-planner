import { FC } from 'react';
import { Flex, Text, FlexProps } from '@chakra-ui/react';
import { GiPlantRoots } from 'react-icons/gi';
import Button from '../Global/Button';
import { ebGaramond } from '@/lib/fonts';

type EventCardProps = FlexProps & {
	title: string;
	description: string;
	buttonText: string;
	bgColor: string;
	textColor: string;
};

const EventCard: FC<EventCardProps> = ({
	title,
	description,
	buttonText,
	bgColor,
	textColor,
	...props
}) => {
	return (
		<Flex
			flexDirection='column'
			alignItems='center'
			textAlign='center'
			justify='center'
			bgColor={bgColor}
			textColor={textColor}
			py={20}
			px={{ base: 10, xl: 20 }}
			gap={8}
			w={{ base: 'full', lg: '30%' }}
			h={{ base: 'full', lg: '600px' }}
			{...props}
		>
			<Text
				fontSize={{ base: 'xl', lg: '4xl' }}
				letterSpacing={8}
				textTransform='uppercase'
				fontFamily='BrandonGrot'
				fontWeight={300}
			>
				{title}
			</Text>
			<GiPlantRoots size={30} />
			<Text
				className={ebGaramond.className}
				fontSize={{ base: 'xl', lg: '2xl' }}
				letterSpacing={4}
			>
				{description}
			</Text>
			<Button label={buttonText} />
		</Flex>
	);
};

export default EventCard;
