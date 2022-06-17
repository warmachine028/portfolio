import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>
	<Section id="tech">
		<SectionDivider />
		<SectionTitle main>Technologies</SectionTitle>
		<SectionText>
			I've worked with a range of technologies in the web developement world
			from back-end to Designing
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-end</ListTitle>
					<ListParagraph>Experence with <br />React.js</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back-end</ListTitle>
					<ListParagraph>Experence with <br />Node.js and Mongo DB</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiZend size="3rem" />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>Experence with <br />tools like Figma</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>


export default Technologies;
