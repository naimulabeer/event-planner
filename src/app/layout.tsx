import type { Metadata } from 'next';
import './globals.css';
import Providers from './Providers';
import Footer from '@/components/Global/Footer';
import Navbar from '@/components/Global/Navbar';

export const metadata: Metadata = {
	title: 'Event Planning',
	description:
		'Its a event planning website for the event planners out there who wants to plan their wedding, birthday events in hefty reasonable price.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
