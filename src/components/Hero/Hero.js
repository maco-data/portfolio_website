import Link from "next/link"
import React from "react"

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import { LeftSection } from "./HeroStyles"

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hi, I'm Marco <br />
				Welcome to my Portfolio
			</SectionTitle>
			<SectionText>
				"This is a small collection of projects I'm excited to share!
				From Data Science, Web Development, Logo Design & more."
			</SectionText>
			<Button onClick={() => (window.location = "#footer")}>
				Let's get in contact
			</Button>
		</LeftSection>
	</Section>
)

export default Hero
