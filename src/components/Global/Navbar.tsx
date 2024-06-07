import { routes } from '@/lib/routes';
import {
	Flex,
	Link as ChakraLink,
	Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<Flex
			justify='space-between'
			alignItems='center'
			fontFamily='BrandonGrot'
			fontWeight={300}
			alignSelf='center'
			px={{ base: 6, lg: 10 }}
			py={{ base: 10, lg: 10 }}
			boxShadow='inset gray 0px 0px 60px -12px'
		>
			<Text
				textTransform='uppercase'
				fontSize={{ base: 18, md: 22 }}
				textColor='#AF9453'
			>
				Wanderer Events
			</Text>

			<Flex
				justify='space-between'
				alignItems='center'
				px={16}
				gap={16}
				fontSize={16}
				display={{ base: 'none', lg: 'flex' }}
			>
				{routes.map(({ href, label }) => (
					<ChakraLink as={Link} key={href} href={href}>
						{label}
					</ChakraLink>
				))}
			</Flex>

			<Flex display={{ base: 'flex', lg: 'none' }} px={6}>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label='Options'
						icon={<RxHamburgerMenu size={30} />}
						variant='none'
					/>
					<MenuList p={2}>
						{routes.map(({ href, label }) => (
							<MenuItem key={href}>
								<ChakraLink href={href} as={Link}>
									{label}
								</ChakraLink>
							</MenuItem>
						))}
					</MenuList>
				</Menu>
			</Flex>
		</Flex>
	);
};

export default Navbar;
