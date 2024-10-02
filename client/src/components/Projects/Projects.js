import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => 
	<Section id="projects">
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map(({title, description, image, tags, source, visit, id}) => 
				<BlogCard key={id}>
					<Img src={image} />
					<TitleContent> <HeaderThree title>{title.toString()}</HeaderThree> <Hr /></TitleContent>
					<CardInfo>{description}</CardInfo>
					<div><TitleContent>Stack</TitleContent><TagList>{tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}</TagList></div>
					<UtilityList>
						<ExternalLinks href={visit}>VISIT</ExternalLinks>
						<ExternalLinks href={source}>Source CODE</ExternalLinks>
					</UtilityList>
				</BlogCard>
			)}
		</GridContainer>
	</Section>

export default Projects;
