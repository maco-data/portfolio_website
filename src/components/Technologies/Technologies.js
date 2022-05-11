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
		<br />
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've worked with a range of technologies in Data Analytics, Business
			Intelligence and Design.
		</SectionText>
		<List>
			<ListItem>
				<picture>
					<AiOutlineConsoleSql size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>SQL</ListTitle>
					<ListParagraph>
						Experience with <br />
						MySQL • Postgresql • Sqlite
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiPython size="3rem" />
					{/* <SiMicrosoftexcel size="3rem" /> */}
				</picture>
				<ListContainer>
					<ListTitle>Data Analysis</ListTitle>
					<ListParagraph>
						Experience with <br />
						Python • SPSS • Excel
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<SiTableau size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Data Visualization</ListTitle>
					<ListParagraph>
						Experience with <br />
						Tableau
					</ListParagraph>
				</ListContainer>
			</ListItem>
			{/* <ListItem>
				<picture>
					<SiMicrosoftexcel size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Spreadsheet</ListTitle>
					<ListParagraph>
						Experience with <br />
						Microsoft Excel & VBA
					</ListParagraph>
				</ListContainer>
			</ListItem> */}
			<ListItem>
				<picture>
					<DiGithubBadge size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Version Contol System</ListTitle>
					<ListParagraph>
						Experience with <br />
						Github
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<SiAdobecreativecloud size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Design</ListTitle>
					<ListParagraph>
						Experience with <br />
						Photoshop • Illustrator
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
)

export default Technologies
