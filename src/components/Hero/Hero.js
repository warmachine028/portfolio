import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
	<Section id="hero">
		<LeftSection>
			<SectionTitle main center>Hey There, I'm Pritam</SectionTitle>
			<SectionText>I'm a Student and an Open Source Enthusiast.</SectionText>
			<Button onClick={() => (window.location = "https://drive.google.com/file/d/1d3YH6_EHOg-Bx8MS-GIE0SEf4_e2u8tK/view?usp=sharing")}>My Resume</Button>
		</LeftSection>
	</Section>
)


export default Hero