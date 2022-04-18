import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				James <br />
				Hockless
			</SectionTitle>
			<p>Software Development</p>
			<SectionText></SectionText>
		</LeftSection>
	</Section>
);

export default Hero;
