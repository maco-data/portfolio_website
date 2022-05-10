import React from "react"
import { DiPython, DiGithubBadge } from "react-icons/di"
import {
	SiTableau,
	SiMicrosoftexcel,
	SiAdobecreativecloud,
} from "react-icons/si"
import { AiOutlineConsoleSql } from "react-icons/ai"
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents"
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles"

const Technologies = () => (
	<Section nopadding id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've worked with a range of technologies in the web development
			world From Back-end to Design.
		</SectionText>
		<List>
			<ListItem>
				<AiOutlineConsoleSql size="3rem" />
				<ListContainer>SQL</ListContainer>
				Expereince with <br />
				MySQL • Postgresql • Sqlite
			</ListItem>
			<ListItem>
				<DiPython size="3rem" />
				<ListContainer>Data Analysis</ListContainer>
				Expereince with <br />
				Python • SPSS
			</ListItem>
			<ListItem>
				<SiTableau size="3rem" />
				<ListContainer>Data Visualization</ListContainer>
				Expereince with <br />
				Tableau
			</ListItem>
			<ListItem>
				<SiMicrosoftexcel size="3rem" />
				<ListContainer>Spreadsheet</ListContainer>
				Expereince with <br />
				Microsoft Excel & VBA
			</ListItem>
			<ListItem>
				<DiGithubBadge size="3rem" />
				<ListContainer>Version Contol System</ListContainer>
				Expereince with <br />
				Github
			</ListItem>
			<ListItem>
				<SiAdobecreativecloud size="3rem" />
				<ListContainer>Design</ListContainer>
				Expereince with <br />
				Photoshop • Illustrator
			</ListItem>
		</List>
	</Section>
)

export default Technologies
