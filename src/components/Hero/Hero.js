import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => 
	<Section>
		<LeftSection>
			<SectionTitle main center>Hi I'm Pritam</SectionTitle>
			<SectionText>I'm a Student and an Open Source Enthusiast.</SectionText>
			<Button onClick={() => (window.location = "https://google.com")}>My CV</Button>
		</LeftSection>
	</Section>


export default Hero;