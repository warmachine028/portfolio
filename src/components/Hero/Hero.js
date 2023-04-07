import { resume } from '../../constants/constants';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
	<Section id="hero">
		<LeftSection>
			<SectionTitle main center>Hey There, I'm Pritam</SectionTitle>
			<SectionText>I'm a Student and an Open Source Enthusiast.</SectionText>
			<Button onClick={() => (window.location = resume)}>My Resume</Button>
		</LeftSection>
	</Section>
)


export default Hero