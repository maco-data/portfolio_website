import React from "react"
import { DiFirebase, DiPython, DiReact, DiSwift, DiZend } from "react-icons/di"
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
				<DiReact size="3rem" />
				<ListContainer>Front-End</ListContainer>
				Expereince with <br />
				React.js
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>Back-End</ListContainer>
				Expereince with <br />
				Node and Databases
			</ListItem>
			<ListItem>
				<DiZend size="3rem" />
				<ListContainer>UI/UX</ListContainer>
				Expereince with <br />
				Tools like Figma
			</ListItem>
		</List>
	</Section>
)

export default Technologies
