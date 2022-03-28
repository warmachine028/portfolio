import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import { SocialIcons } from "../Header/HeaderStyles";
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, } from "./FooterStyles";

const Footer = () => 
	<FooterWrapper>
		<LinkList>
			<LinkColumn>
				<LinkTitle>Call</LinkTitle><LinkItem href="tel: 111-111-1111">111-111-1111</LinkItem>
			</LinkColumn>
			<LinkColumn>
				<LinkTitle>Email</LinkTitle><LinkItem href="mailto: pritamkundu771@gmail.com">pritamkundu771@gmail.com</LinkItem>
			</LinkColumn>
			<SocialIconsContainer>
				<CompanyContainer><Slogan>Building Projects right from ground level</Slogan></CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/warmachine028"><AiFillGithub size="3rem" /></SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/pritam-kundu771/"><AiFillLinkedin size="3rem" /></SocialIcons>
					<SocialIcons href="https://www.hackerrank.com/pritamkundu771"><SiHackerrank size="3rem" /></SocialIcons>
					<SocialIcons href="https://leetcode.com/pritamkundu/"><SiLeetcode size="3rem" /></SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</LinkList>
	</FooterWrapper>

export default Footer;
