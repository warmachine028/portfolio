import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons} from './HeaderStyles';

const Header = () => 
	<Container>
		<Div1>
			<Link href="/">
				<a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px' }}>
					<DiCssdeck size="3rem" /><span>{"Portfolio"}</span>
				</a> 
			</Link>
		</Div1>
		<Div2>
			<li><Link href="#projects"><NavLink>Projects</NavLink></Link></li>
			<li><Link href="#tech"><NavLink>Tech</NavLink></Link></li>
			<li><Link href="#about"><NavLink>About Me</NavLink></Link></li>
			<li><Link href="#accomplishments"><NavLink>Accomplishments</NavLink></Link></li>
		</Div2>
		<Div3>
			<SocialIcons href="https://github.com/warmachine028"><AiFillGithub size="3rem" /></SocialIcons>
			<SocialIcons href="https://www.linkedin.com/in/pritam-kundu771/"><AiFillLinkedin size="3rem" /></SocialIcons>
			<SocialIcons href="https://www.hackerrank.com/pritamkundu771"><SiHackerrank size="3rem" /></SocialIcons>
			<SocialIcons href="https://leetcode.com/pritamkundu/"><SiLeetcode size="3rem" /></SocialIcons>
		</Div3>
	</Container>

export default Header;
