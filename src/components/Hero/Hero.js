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
				Hi / Hola! <br />
				Nice to meet you, I'm Marco
			</SectionTitle>
			<SectionText>
				"I'm good with people but better with computers. I love
				everything related to design, engineering, data science,
				photography and coffee."
			</SectionText>
			<Button onClick={() => (window.location = "#footer")}>
				Let's get in contact
			</Button>
		</LeftSection>
	</Section>
)

export default Hero
