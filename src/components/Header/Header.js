import Link from "next/link"
import React from "react"
import {
	AiFillDribbbleCircle,
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
} from "react-icons/ai"
import { DiBrackets } from "react-icons/di"

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from "./HeaderStyles"

const Header = () => (
	<Container>
		<Div1>
			<Link
                href="/"
                style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    marginBottom: "30",
                }}>

                <DiBrackets size="3rem" /> <Span>Marco Camarena</Span>

            </Link>
		</Div1>
		<Div2>
			{/* <li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li> */}
			<li>
				<Link href="#tech" legacyBehavior>
					<NavLink>Skills</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about" legacyBehavior>
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href="https://github.com/maco-data">
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://www.linkedin.com/in/maco-network/">
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://dribbble.com/maco-design">
				<AiFillDribbbleCircle size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
)

export default Header
