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
				“Maybe stories are just data with a soul.” — Brené Brown
			</SectionText>
			<Button onClick={() => (window.location = "#footer")}>
				Let's get in contact
			</Button>
		</LeftSection>
	</Section>
)

export default Hero
