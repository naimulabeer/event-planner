import HeroTitle from '@/components/Global/HeroTitle';
import Column from '@/library/utils/column/Column';
import React, { FC } from 'react';

type ServicePageProps = {};

const Page: FC<ServicePageProps> = ({}) => {
	return (
		<Column gap={6} mb={4}>
			<HeroTitle title='Services' fontSize={16} />
			<HeroTitle title='Weddings' />
		</Column>
	);
};

export default Page;
