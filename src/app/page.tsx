'use client';

import Banner from '@/components/Home/Banner';
import HomeGallery from '@/components/Home/HomeGallery';
import HomeServices from '@/components/Home/HomeServices';
import HomeTestimonial from '@/components/Home/HomeTestimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		AOS.init({});
	}, []);
	return (
		<>
			<Banner />
			<HomeServices />
			<HomeTestimonial />
			<HomeGallery />
		</>
	);
}
