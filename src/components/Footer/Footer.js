import React from "react"
import {
	AiFillGithub,
	AiFillDribbbleCircle,
	AiFillLinkedin,
} from "react-icons/ai"

import { SocialIcons } from "../Header/HeaderStyles"
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles"

const Footer = () => {
	return (
		<FooterWrapper id="footer">
			{/* <SectionTitle main>Projects</SectionTitle> */}
			<LinkList>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:mcospino@gmail.com">
						mcospino@gmail.com
					</LinkItem>
					<LinkTitle>Mobile</LinkTitle>
					<LinkItem href="tel:+36301206216">+36 30 120 6216</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>
						“The goal is to turn data into information, and
						information into insight.” — Carly Fiorina
					</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/maco-data">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/maco-network/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://dribbble.com/maco-design">
						<AiFillDribbbleCircle size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	)
}

export default Footer
